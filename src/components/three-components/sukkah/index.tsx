"use client";
import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group, Object3DEventMap } from "three";

type SukkahProps = {
  dimensions: { width: number; depth: number; height: number };
  walls?: number;
  schach?: number;
};

export default function Sukkah({ dimensions, walls, schach }: SukkahProps) {
  const schachWidth =
    schach == undefined || schach == 1
      ? dimensions.width + 1
      : (dimensions.width + 1) * schach;

  const treeRef = useRef<Group<Object3DEventMap>>();

  const tree = useLoader(GLTFLoader, "/3D-models/tree_small_02_4k.gltf/tree_small_02_4k.gltf");

  useEffect(() => {
    tree.scene.scale.set(5, 5, 5);
  }
  , [tree]);

  return (
    <group position={[0, dimensions.height / 2, 0]}>
        
      {/* Schach */}
      <mesh
        castShadow
        receiveShadow
        position={[
          schachWidth == dimensions.width + 1 ? 0 : schachWidth - 1.1,
          dimensions.height / 2 + 0.25,
          -0.25,
        ]}
      >
        <boxGeometry args={[schachWidth, 0.5, dimensions.depth + 0.5]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>

      {/* Walls */}

      {/* Right */}
      {!walls || walls > 2 ? (
        <mesh
          castShadow
          receiveShadow
          position={[dimensions.width / 2 + 0.25, 0, 0]}
        >
          <boxGeometry args={[0.5, dimensions.height, dimensions.depth]} />
          <meshStandardMaterial color="#b5651d" />
        </mesh>
      ) : (
        <></>
      )}

      {/* Back */}
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, -dimensions.depth / 2 - 0.25]}
      >
        <boxGeometry args={[dimensions.width + 1, dimensions.height, 0.5]} />
        <meshStandardMaterial color="#b5651d" />
      </mesh>

      {/* Left */}
      <mesh
        castShadow
        receiveShadow
        position={[-dimensions.width / 2 - 0.25, 0, 0]}
      >
        <boxGeometry args={[0.5, dimensions.height, dimensions.depth]} />
        <meshStandardMaterial color="#b5651d" />
      </mesh>

      {/* Tree */}
      {tree ? <group  position={[-15, -dimensions.height / 2, 0]}>
        <primitive object={tree.scene} />
      </group> : <></>}
    </group>
  );
}
