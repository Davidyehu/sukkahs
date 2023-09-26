"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Lighting from "./lighting";
import { OrbitControls, Sky } from "@react-three/drei";
import Floor from "./floor";
import Ruler from "./ruler";

export default function MainCanvas({
  children,
  pointLightPosition,
  pointLightIntensity,
}: {
  children: React.ReactNode[];
  pointLightPosition?: [number, number, number];
  pointLightIntensity?: number;
}) {
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null);
  const [directionalLightHelperState, setdirectionalLightHelperState] =
    useState(directionalLightRef.current);

  useEffect(() => {
    setdirectionalLightHelperState(directionalLightRef.current);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 30, 30] }}
    >
      <OrbitControls />
      <pointLight intensity={pointLightIntensity} position={pointLightPosition} />
      <directionalLight
        ref={directionalLightRef}
        position={[30, 50, -30]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <ambientLight intensity={1} position={[0, 0, 0]}/>
      {directionalLightHelperState && (
        // <directionalLightHelper args={[directionalLightHelperState, 1]} />
        <></>
      )}
      {/* <Lighting /> */}
      {/* <gridHelper args={[100, 100]} />
      <axesHelper args={[10]} /> */}
      <Sky sunPosition={[30, 30, -30]} />
      <Floor />
      {children}
    </Canvas>
  );
}
