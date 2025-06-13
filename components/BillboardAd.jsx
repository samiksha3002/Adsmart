"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Billboard, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

const ads = ["/Lift Final.jpg", "/Elevator.jpg", "Lift Panel.jpg", "/Pole.jpg"];

export default function BillboardAd() {
  return (
    <section className="relative z-0 w-full min-h-screen bg-white pt-20">
      {/* pt-20 ensures space below a fixed header */}
      <div className="w-full h-[80vh] md:h-[90vh]">
        <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <RotatingBillboard />

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}

function RotatingBillboard() {
  const group = useRef();
  const textures = useLoader(THREE.TextureLoader, ads);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2; // slow rotation
    }
  });

  return (
    <group ref={group}>
      {textures.map((tx, idx) => {
        const angle = (Math.PI / 2) * idx;
        return (
          <Billboard
            key={idx}
            position={[Math.sin(angle) * 1.8, 1, Math.cos(angle) * 1.8]}
            follow={false}
          >
            <mesh>
              <planeGeometry args={[1.6, 0.9]} />
              <meshBasicMaterial map={tx} toneMapped={false} />
            </mesh>
          </Billboard>
        );
      })}
    </group>
  );
}
