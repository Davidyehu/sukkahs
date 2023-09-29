"use client";
import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

export default function RealFloor() {
  const colorMap = useLoader(
    TextureLoader,
    "/3D-textures/grass-9843-in-architextures.jpg"
  );

  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;

  colorMap.repeat.set(6, 6);

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, -0.1]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
