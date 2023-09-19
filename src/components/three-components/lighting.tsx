"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Lighting() {
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null);
  const [directionalLightHelperState, setdirectionalLightHelperState] =
    useState(directionalLightRef.current);

  useEffect(() => {
    setdirectionalLightHelperState(directionalLightRef.current);
  }, []);

  return (
    <>
      <pointLight intensity={25} position={[0, 10, 0]} />
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

      {directionalLightHelperState && (
        // <directionalLightHelper args={[directionalLightHelperState, 1]} />
        <></>
      )}
    </>
  );
}
