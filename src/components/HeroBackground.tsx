import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const mouse = new THREE.Vector2(0, 0);

/* Minimal grid plane with subtle movement */
function GridPlane() {
  const ref = useRef<THREE.LineSegments>(null!);
  const geo = useMemo(() => {
    const size = 20;
    const divisions = 24;
    const points: number[] = [];
    const step = size / divisions;
    const half = size / 2;
    for (let i = 0; i <= divisions; i++) {
      const pos = -half + i * step;
      points.push(-half, 0, pos, half, 0, pos);
      points.push(pos, 0, -half, pos, 0, half);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 2.8 + mouse.y * 0.03;
    ref.current.rotation.z = mouse.x * 0.02;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 - 1.5;
  });

  return (
    <lineSegments ref={ref} geometry={geo}>
      <lineBasicMaterial color="#7B2EFF" transparent opacity={0.12} />
    </lineSegments>
  );
}

/* Subtle floating particles */
function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { positions, opacities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const op = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      op[i] = Math.random();
    }
    return { positions: pos, opacities: op };
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.008;
    ref.current.position.x = mouse.x * 0.15;
    ref.current.position.y = mouse.y * 0.1;

    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + opacities[i] * 10) * 0.001;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#9D5CFF" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

/* Single slow light sweep */
function LightSweep() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.15;
    ref.current.position.x = Math.sin(t) * 6;
    ref.current.position.y = Math.cos(t * 0.7) * 2;
    ref.current.position.z = -3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshBasicMaterial color="#7B2EFF" transparent opacity={0.08} />
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
      <GridPlane />
      <Particles count={500} />
      <LightSweep />
    </>
  );
}

const HeroBackground = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
      <SceneContent />
    </Canvas>
  </div>
);

export default HeroBackground;
