"use client";
import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Tree({ dimensions }: {dimensions: { width: number; depth: number; height: number }}) {
  
  const tree = useLoader(GLTFLoader, "/3D-models/tree_small_02_1k.gltf/tree_small_02_1k.gltf");

  useEffect(() => {
    tree.scene.scale.set(5, 5, 5);
  }
  , [tree]);

  return (
    <group position={[0, dimensions.height / 2, 0]}>
      {/* Tree */}
      {tree ? <group  position={[-15, -dimensions.height / 2, 0]}>
        <primitive object={tree.scene} />
      </group> : <></>}
    </group>
  );
}