import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface FloatingMangoProps {
  className?: string;
}

/**
 * A real 3D mango: ovoid mesh with a small stem, vibrant gradient material,
 * continuous Y-axis rotation, soft float and contact shadow.
 */
function MangoMesh() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.9; // full turntable spin
    }
  });

  return (
    <group ref={group}>
      {/* Body — sphere scaled into a mango ovoid, slightly asymmetric */}
      <mesh scale={[1.05, 1.25, 1.05]} castShadow>
        <sphereGeometry args={[1, 96, 96]} />
        <meshPhysicalMaterial
          color="#f6a623"
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
          sheen={1}
          sheenColor="#ff4d2e"
          sheenRoughness={0.5}
        />
      </mesh>

      {/* Red blush cap on the shoulder */}
      <mesh position={[0.15, 0.95, 0.15]} scale={[0.85, 0.4, 0.85]}>
        <sphereGeometry args={[0.9, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#d9381e"
          roughness={0.45}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Stem */}
      <mesh position={[0.1, 1.32, 0.1]} rotation={[0.1, 0, -0.15]}>
        <cylinderGeometry args={[0.04, 0.06, 0.18, 16]} />
        <meshStandardMaterial color="#5c3a1e" roughness={0.9} />
      </mesh>

      {/* Stem cap (the little brown nub at the top) */}
      <mesh position={[0.13, 1.42, 0.12]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#3d2614" roughness={1} />
      </mesh>
    </group>
  );
}

export function FloatingMango({ className }: FloatingMangoProps) {
  return (
    <div className={`relative h-full w-full ${className ?? ""}`}>
      {/* Warm ambient glow behind the canvas */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-[#ffb84d]/35 blur-3xl" />
      </div>

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.3, 4.2], fov: 35 }}
        className="!h-full !w-full"
      >
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[3, 4, 3]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#ff7a3d" />

        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
            <MangoMesh />
          </Float>
          <ContactShadows
            position={[0, -1.55, 0]}
            opacity={0.55}
            scale={6}
            blur={2.6}
            far={3}
            color="#000000"
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
