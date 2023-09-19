import React from "react";
import { Canvas } from "@react-three/fiber";

export default function DemoBox() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
