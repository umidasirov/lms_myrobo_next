"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const canUseWebGL = () => {
  if (typeof window === "undefined") return false;

  const canvas = document.createElement("canvas");
  return !!(
    window.WebGLRenderingContext &&
    (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
  );
};

function ArduinoModel() {
  const { scene } = useGLTF("/models/arduino_uno.glb");
  const model = useMemo(() => {
    const clone = scene.clone(true);
    const bounds = new THREE.Box3().setFromObject(clone);
    const center = bounds.getCenter(new THREE.Vector3());
    const size = bounds.getSize(new THREE.Vector3());
    const scale = 3.2 / Math.max(size.x, size.y, size.z);

    clone.scale.setScalar(scale);
    clone.position.copy(center).multiplyScalar(-scale);
    clone.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    return clone;
  }, [scene]);

  return (
    <Float speed={1.15} rotationIntensity={0.12} floatIntensity={0.2}>
      <primitive object={model} />
    </Float>
  );
}

useGLTF.preload("/models/arduino_uno.glb");

export default function ArduinoScene() {
  const [isWebGLReady, setIsWebGLReady] = useState(false);

  useEffect(() => {
    setIsWebGLReady(canUseWebGL());
  }, []);

  if (!isWebGLReady) {
    return (
      <div className="flex h-full min-h-67.5 w-full items-center justify-center rounded-[1.25rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(203,213,225,0.6)_38%,rgba(148,163,184,0.24)_100%)]">
        <div className="flex flex-col items-center gap-3 text-center text-slate-700">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-2xl shadow-inner shadow-sky-100/80">
            🤖
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">
              Arduino
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Bu muhitda 3D ko‘rinish mavjud emas
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 34 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <ambientLight intensity={1.2} />
      <hemisphereLight args={["#f4fbff", "#53616b", 1.4]} />
      <directionalLight
        castShadow
        position={[4, 5, 5]}
        intensity={3.2}
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-4, 1, -3]} intensity={2} color="#78a9ff" />
      <Suspense fallback={null}>
        <ArduinoModel />
        <ContactShadows
          position={[0, -1.65, 0]}
          opacity={0.24}
          scale={5}
          blur={2.8}
          far={3.5}
        />
      </Suspense>
    </Canvas>
  );
}