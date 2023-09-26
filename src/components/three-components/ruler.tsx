"use client";
import { Text3D } from "@react-three/drei";
import React from "react";

export default function Ruler({
  dimensions,
  position,
}: {
  dimensions: { width: number; depth: number; height: number };
  position: [number, number, number];
}) {
  const fixedPosition: [number, number, number] = [
    position[0],
    dimensions.height / 2,
    position[2],
  ];
  return (
    <group position={fixedPosition}>
      <mesh receiveShadow>
        <boxGeometry
          args={[dimensions.width, dimensions.height, dimensions.depth]}
        />
        <meshStandardMaterial color="white" transparent opacity={0.1} />
      </mesh>
      <group position={[0, -dimensions.height / 2, 0]}>
        {/* markers for every unit in height like a ruler */}
        {Array.from(Array(dimensions.height).keys()).map((i) => (
          <mesh key={i} castShadow receiveShadow position={[0, i + 1, 0]}>
            <boxGeometry args={[dimensions.width, 0.1, dimensions.depth]} />
            {/* display number of unit */}
            <Text3D font={'/fonts/Roboto Black_Regular.json'} height={.1} size={.5} position={[-dimensions.width / 2, 0, 0]}>
              {i + 1}
              <meshNormalMaterial />
            </Text3D>
            <meshStandardMaterial color="white" />
          </mesh>
        ))}
      </group>
    </group>
  );
}
