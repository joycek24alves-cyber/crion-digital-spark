import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const mouse = new THREE.Vector2(0, 0);

/* Orbiting energy ring */
function EnergyRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = tilt + state.clock.elapsedTime * speed;
    ref.current.rotation.x = Math.PI / 2 + mouse.y * 0.15;
    ref.current.rotation.y = mouse.x * 0.15;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

function WireframeSphere({ radius, color, position, speed }: { radius: number; color: string; position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.x += mouse.y * 0.002;
    ref.current.rotation.y += mouse.x * 0.002;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
    </mesh>
  );
}

/* Floating particles with energy feel */
function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 8;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const purple = new THREE.Color("#7B2EFF");
    const blue = new THREE.Color("#00D4FF");
    for (let i = 0; i < count; i++) {
      const c = Math.random() > 0.75 ? blue : purple;
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
    ref.current.rotation.y += mouse.x * 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} transparent opacity={0.6} sizeAttenuation vertexColors />
    </points>
  );
}

/* Moving light orbs */
function LightOrb({ color, speed, radius, offset }: { color: string; speed: number; radius: number; offset: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * radius * 0.6;
    ref.current.position.z = Math.sin(t) * radius * 0.4;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

function SceneContent() {
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [gl]);

  return (
    <>
      {/* Core wireframe structures */}
      <WireframeSphere radius={3.5} color="#7B2EFF" position={[0, 0, 0]} speed={0.1} />
      <WireframeSphere radius={2} color="#5B16CD" position={[2, 0.8, -2]} speed={0.18} />
      <WireframeSphere radius={1.2} color="#00D4FF" position={[-2.5, -1, -1.5]} speed={0.25} />

      {/* Energy rings */}
      <EnergyRing radius={4.5} color="#7B2EFF" speed={0.15} tilt={0.3} />
      <EnergyRing radius={3.8} color="#5B16CD" speed={-0.1} tilt={-0.5} />
      <EnergyRing radius={5.2} color="#00D4FF" speed={0.08} tilt={0.8} />

      {/* Light orbs */}
      <LightOrb color="#7B2EFF" speed={0.4} radius={4} offset={0} />
      <LightOrb color="#00D4FF" speed={0.3} radius={3.5} offset={2} />
      <LightOrb color="#9D5CFF" speed={0.5} radius={5} offset={4} />
      <LightOrb color="#7B2EFF" speed={0.35} radius={3} offset={1} />

      {/* Particles */}
      <Particles count={1200} />
    </>
  );
}

const HeroBackground = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
      <SceneContent />
    </Canvas>
  </div>
);

export default HeroBackground;
