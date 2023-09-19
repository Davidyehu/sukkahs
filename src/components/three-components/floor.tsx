"use client";
import React from "react";

export default function Floor(props: any) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, -0.1]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
