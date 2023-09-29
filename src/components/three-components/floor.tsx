"use client";
import dynamic from "next/dynamic";
import React from "react";

const RealFloor = dynamic(() => import('./real-grass'), {
  loading: () => <Floor />,
})

function Floor() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, -0.1]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#00A619" />
    </mesh>
  );
}

export default RealFloor;
