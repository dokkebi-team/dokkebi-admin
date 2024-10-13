import { useMapConfigs } from "@/contexts/map-configs";
import { Sprite, useTick } from "@pixi/react";
import { useAtomValue } from "jotai";
import React, { useRef, useState } from "react";
import { useKey } from "react-use";
import { useBreath } from "../hooks/useBreath";
import { playerAtom } from "../stores/map";
import { getDistance } from "../utils/common";
import Cursor from "./Cursor";
import { useStageSize } from "./StageSizeProvider";

export interface MobsProps {
  onSelectMob: (mobId: string) => void;
}

const Mobs = ({ onSelectMob }: MobsProps) => {
  const { mobList, mobConfigs } = useMapConfigs();
  const size = useStageSize();
  const { breathScaleFactor } = useBreath();
  const player = useAtomValue(playerAtom);
  const isMouseInteractionProcessing = useRef(false);
  const [focussedMobIndex, setFocussedMobIndex] = useState<number>();
  const handleSelectMob = (mobIndex: number) => {
    onSelectMob(mobList[mobIndex].inventoryNo);
  };
  const handleMouseOver = (mobIndex: number) => {
    isMouseInteractionProcessing.current = true;
    setFocussedMobIndex(mobIndex);
  };
  const handleMouseOut = () => {
    isMouseInteractionProcessing.current = false;
    setFocussedMobIndex(undefined);
  };

  useTick(() => {
    if (
      player.state.animationStatus === "idle" &&
      isMouseInteractionProcessing.current
    ) {
      return;
    }

    let nextFocussedIndex: number | undefined = undefined;
    let minDistance: number = Infinity;
    mobList.forEach((mob, mobIndex) => {
      const mobConfig = mobConfigs[mob.inventoryNo];

      if (!mobConfig) {
        return;
      }

      const { value: distance, directions } = getDistance(player.position, {
        x: mobConfig.x,
        y: mobConfig.y,
      });

      if (
        distance < 200 &&
        directions.includes(player.state.direction) &&
        minDistance > distance
      ) {
        minDistance = distance;
        nextFocussedIndex = mobIndex;
      }
    });

    setFocussedMobIndex(nextFocussedIndex);
  });

  useKey(
    (e) => {
      return e.code === "Space" || e.code === "Enter";
    },
    (e) => {
      e.preventDefault();

      if (focussedMobIndex === undefined) {
        return;
      }

      handleSelectMob(focussedMobIndex);
    },
    undefined,
    [focussedMobIndex, onSelectMob],
  );

  return (
    <>
      {mobList.map((mob, mobIndex) => {
        const mobConfig = mobConfigs[mob.inventoryNo];

        if (!mobConfig) {
          return null;
        }

        const zIndex =
          player.position.y < mobConfig.y + 40 * mobConfig.scale ? 3 : 1;

        if (!mob.optimizedIllustrationUrl) {
          return null;
        }

        if (
          mobConfig.x < player.position.x - size.width / 2 - 200 ||
          mobConfig.x > player.position.x + size.width / 2 + 200
        ) {
          return null;
        }

        if (
          mobConfig.y < player.position.y - size.height / 2 - 200 ||
          mobConfig.y > player.position.y + size.height / 2 + 200
        ) {
          return null;
        }

        return (
          <React.Fragment key={mobIndex}>
            <Sprite
              image={mob.optimizedIllustrationUrl}
              anchor={[0.5, 0.5]}
              scale={1}
              width={128 * mobConfig.scale}
              height={128 * mobConfig.scale}
              x={mobConfig.x}
              y={mobConfig.y}
              zIndex={zIndex}
              interactive
              pointerdown={(e) => {
                e.preventDefault();
                handleSelectMob(mobIndex);
              }}
              pointermove={() => {
                handleMouseOver(mobIndex);
              }}
              pointerout={handleMouseOut}
            />
            {focussedMobIndex === mobIndex && (
              <Cursor x={mobConfig.x} y={mobConfig.y} zIndex={4} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Mobs;
