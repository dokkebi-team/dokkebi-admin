"use client";

import { groups, items } from "@/generated/data";
import { createContext } from "@/modules/create-context";
import { ArchiveItem } from "@/types";
import { cn } from "@/utils/ui";
import { Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { produce } from "immer";
import Image from "next/image";
import { ReactNode, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const OBJECT_COUNT = 20;
const SPAWN_RANGE = 50;
const BLACKHOLE_PULL = 0.002;
const ORBIT_SPEED = 0.005;
const RESET_DURATION = 100;

const [ArchiveItemContextProvider, useArchiveItemContext] = createContext<{
  archiveItems: ArchiveItem[];
  archiveItemById: Record<string, ArchiveItem>;
  currentArchiveItemIds: string[];
  setCurrentArchiveItemIds: (ids: string[]) => void;
}>();

const ArchiveItemsProvider = ({ children }: { children: ReactNode }) => {
  const [currentArchiveItemIds, setCurrentArchiveItemIds] = useState<string[]>(
    () => {
      const itemIds = items.map((item) => item.id);
      const randomIds: string[] = groups.map((group) => group.id);
      for (let i = 0; i < OBJECT_COUNT - groups.length; i++) {
        const randomIndex = Math.floor(Math.random() * itemIds.length);
        randomIds.push(itemIds[randomIndex]);
      }

      return randomIds;
    },
  );
  const archiveItems: ArchiveItem[] = useMemo(() => {
    return [
      ...groups.map((group) => ({
        type: "group" as const,
        id: group.id,
        data: group,
      })),
      ...items.map((item) => ({
        type: "item" as const,
        id: item.id,
        data: item,
      })),
    ];
  }, []);
  const archiveItemById = useMemo(() => {
    return archiveItems.reduce(
      (acc, archiveItem) => {
        acc[archiveItem.id] = archiveItem;
        return acc;
      },
      {} as Record<string, ArchiveItem>,
    );
  }, [archiveItems]);

  const value = useMemo(() => {
    return {
      archiveItems,
      archiveItemById,
      currentArchiveItemIds,
      setCurrentArchiveItemIds,
    };
  }, [archiveItemById, archiveItems, currentArchiveItemIds]);

  return (
    <ArchiveItemContextProvider value={value}>
      {children}
    </ArchiveItemContextProvider>
  );
};

interface FloatingObjectProps {
  index: number;
}

const FloatingObject = ({ index }: FloatingObjectProps) => {
  const {
    archiveItems,
    archiveItemById,
    currentArchiveItemIds,
    setCurrentArchiveItemIds,
  } = useArchiveItemContext();
  const meshRef = useRef<THREE.Mesh>(null);
  const [position, setPosition] = useState(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * SPAWN_RANGE,
        (Math.random() - 0.5) * SPAWN_RANGE,
        (Math.random() - 0.5) * SPAWN_RANGE,
      ),
  );
  const [velocity] = useState(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * BLACKHOLE_PULL,
        (Math.random() - 0.5) * BLACKHOLE_PULL,
        (Math.random() - 0.5) * BLACKHOLE_PULL,
      ),
  );
  const [scale] = useState(() => Math.random() * 1 + 1.5);
  const [rotation] = useState(() => Math.random() - 0.5);
  const [orbitAngle, setOrbitAngle] = useState(Math.random() * Math.PI * 2);
  const archiveItem = useMemo(
    () => archiveItemById[currentArchiveItemIds[index]],
    [archiveItemById, currentArchiveItemIds, index],
  );
  const resetProgressRef = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      // Move towards the center (0, 0, 0)
      const positionLength = position.length();
      const distanceToCenter = positionLength < 10 ? 0 : positionLength;

      // Update orbit angle
      setOrbitAngle((prev) => {
        return prev + ORBIT_SPEED / distanceToCenter;
      });

      // const newPosition = position
      //   .clone()
      //   .setX(Math.cos(orbitAngle) * distanceToCenter)
      //   .setY(Math.sin(orbitAngle) * distanceToCenter);

      // newPosition.lerp(new THREE.Vector3(0, 0, 0), BLACKHOLE_PULL);

      const newPosition = position
        .clone()
        .lerp(new THREE.Vector3(0, 0, 0), BLACKHOLE_PULL);

      // Apply velocity
      newPosition.add(velocity);

      setPosition(newPosition);

      meshRef.current.rotation.z += rotation * 0.001;

      // If the object is too close to the center, reset it
      if (newPosition.length() < 10) {
        resetObject();
      }
    }
  });

  const resetObject = () => {
    const angle = Math.random() * Math.PI * 2;
    const radius = SPAWN_RANGE + Math.random() * 10;
    const newPosition = new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      (Math.random() - 0.5) * SPAWN_RANGE,
    );
    setPosition(newPosition);
    setOrbitAngle(Math.random() * Math.PI * 2);

    setCurrentArchiveItemIds(
      produce(currentArchiveItemIds, (draft) => {
        const candidateIds =
          archiveItem.type === "group"
            ? archiveItems
                .filter(
                  (item) => item.type === "group" && item.id !== archiveItem.id,
                )
                .map((item) => item.id)
            : archiveItems
                .filter(
                  (item) =>
                    item.type === "item" &&
                    !currentArchiveItemIds.includes(item.id),
                )
                .map((item) => item.id);

        const randomIndex = Math.floor(Math.random() * candidateIds.length);

        console.log(candidateIds[randomIndex]);

        draft[index] = candidateIds[randomIndex];
      }),
    );
    resetProgressRef.current = 0;
  };

  console.log(archiveItem);

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <Html transform scale={0.5}>
        {archiveItem.type === "group" ? (
          <div className="flex aspect-square h-40 items-center justify-center rounded-full bg-[#D1FF4E]">
            <div className="text-center text-[2.5rem] leading-none">
              #{archiveItem.data.name}
            </div>
          </div>
        ) : archiveItem.data.imageUrl ? (
          <div
            className={cn(
              "flex aspect-square h-60 items-center justify-center overflow-hidden",
              archiveItem.id.startsWith("original") && "rounded-2xl",
            )}
          >
            <Image
              className="h-full w-full"
              src={archiveItem.data.imageUrl}
              alt=""
              height={160}
              width={160}
            />
          </div>
        ) : (
          <div className="flex aspect-square h-40 items-center justify-center rounded-full bg-[#00FF66]">
            <div className="text-center text-[2.5rem] leading-none">
              #{archiveItem.data.name}
            </div>
          </div>
        )}
      </Html>
    </mesh>
  );
};

interface FloatingObjectsContainerProps {}

const FloatingObjectsContainer = ({}: FloatingObjectsContainerProps) => {
  const { currentArchiveItemIds, archiveItemById } = useArchiveItemContext();
  return currentArchiveItemIds.map((id, index) => {
    return <FloatingObject key={`${id}-${index}`} index={index} />;
  });
};

export default function Test() {
  return (
    <div className="h-screen w-full bg-white">
      <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
        <ArchiveItemsProvider>
          <FloatingObjectsContainer />
        </ArchiveItemsProvider>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
