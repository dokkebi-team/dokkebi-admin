"use client";

import { cn } from "@/utils/ui";
import { Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

export interface Title3DProps {
  children: string;
  className?: string;
}

const Title3D = ({ children, className }: Title3DProps) => {
  return (
    <div className={cn("w-full", className)}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <RotatingText text={children} />
        </Suspense>
      </Canvas>
    </div>
  );
};

interface RotatingTextProps {
  text: string;
}

const RotatingText = ({ text }: RotatingTextProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Text3D
        font="/fonts/Pretendard_Regular.json"
        size={2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshNormalMaterial />
      </Text3D>
    </mesh>
  );
};

export default Title3D;
