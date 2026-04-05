import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const mouse = new THREE.Vector2(0, 0);

function WireframeSphere({
  radius,
  color,
  position,
  speed,
}: {
  radius: number;
  color: string;
  position: [number, number, number];
  speed: number;
}) {
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
      <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
    </mesh>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.y += mouse.x * 0.0005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00c6ff" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
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
      <WireframeSphere radius={3} color="#5b5ef4" position={[0, 0, 0]} speed={0.15} />
      <WireframeSphere radius={1.5} color="#00c6ff" position={[2, 1, -2]} speed={0.25} />
      <Particles count={800} />
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
