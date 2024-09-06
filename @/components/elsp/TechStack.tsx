"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function TechIcon({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function TechStack() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="w-full h-96">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <TechIcon position={[-2, 0, 0]} />
          <TechIcon position={[0, 0, 0]} />
          <TechIcon position={[2, 0, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  )
}