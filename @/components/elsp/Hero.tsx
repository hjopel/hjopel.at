"use client"

import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"

function Laptop() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="w-full h-1/2">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Laptop />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <h1 className="text-4xl font-bold mt-8 animate-fade-in">
        Jan Hoppel: Entrepreneurial Engineer Ready to Lead
      </h1>
      <p className="text-xl mt-4 animate-fade-in-delayed">
        Turning complex ideas into scalable, real-world solutions
      </p>
      <Button className="mt-8 animate-bounce" size="lg">
        Explore My Journey
      </Button>
    </section>
  )
}