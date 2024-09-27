"use client";

import { OrbitControls, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export interface Title3DProps {
  children: string;
}

const Title3D = ({ children }: Title3DProps) => {
  return (
    <div className="w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingText text={children} />
        <OrbitControls enableZoom={false} />
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
        font={"/fonts/Pretendard_Regular.json"}
        size={1}
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
