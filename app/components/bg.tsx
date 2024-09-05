"use client";

import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MarchingCubes,
  MarchingCube,
  MeshTransmissionMaterial,
  Environment,
  Bounds,
  Text,
} from "@react-three/drei";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";

function MetaBall({ color, vec = new THREE.Vector3(), ...props }) {
  const api = useRef();
  useFrame((state, delta) => {
    delta = Math.min(delta, 0.1);
    // @ts-ignore
    api.current?.applyImpulse(
      vec
        // @ts-ignore
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });
  return (
    <RigidBody    // @ts-ignore

      ref={api}
      colliders={false}
      linearDamping={4}
      angularDamping={0.95}
      {...props}
    >
      <MarchingCube strength={0.35} subtract={6} color={color} />
      {/* @ts-ignore */}
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}
function Pointer({ mousePosition, vec = new THREE.Vector3() }) {
  const ref = useRef<typeof RigidBody>();
  useFrame(({ viewport, size }) => {
    const { width, height } = viewport.getCurrentViewport()
    vec.set((mousePosition.x * width) / 2, (mousePosition.y * height) / 2, 0);
    if (ref.current) {
      // @ts-ignore
      ref.current.setNextKinematicTranslation(vec);
    }
  });
  return (
    // @ts-ignore
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube
        strength={0.5}
        subtract={10}
        color={new THREE.Color("orange")}
      />
      {/* @ts-ignore */}
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

export default function App({ mousePosition }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 25 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.5} />
        <Physics gravity={[0, 2, 0]}>
          <MarchingCubes
            resolution={80}
            maxPolyCount={20000}
            enableUvs={false}
            enableColors
          >
            {/* @ts-ignore */}
            <meshStandardMaterial vertexColors thickness={0.15} roughness={0} />
            <MetaBall color="indianred" position={[1, 1, 0.5]} />
            <MetaBall color="skyblue" position={[-1, -1, -0.5]} />
            <MetaBall color="teal" position={[2, 2, 0.5]} />
            <MetaBall color="orange" position={[-2, -2, -0.5]} />
            <MetaBall color="hotpink" position={[3, 3, 0.5]} />
            <MetaBall color="aquamarine" position={[-3, -3, -0.5]} />
            <Pointer mousePosition={mousePosition} />
          </MarchingCubes>
        </Physics>
        <Environment blur={2} files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" />
        {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
        <Bounds fit clip observe margin={1}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
      </Canvas>
    </div>
  );
}
