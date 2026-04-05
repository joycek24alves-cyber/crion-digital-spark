import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const mouse3 = new THREE.Vector2(0, 0);
const DESKTOP_COUNT = 1500;
const MOBILE_COUNT = 750;
const CONNECTION_DIST = 1.2; // in world units

function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, velocities, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
      sz[i] = 0.01 + Math.random() * 0.04;
    }
    return { positions: pos, velocities: vel, sizes: sz };
  }, [count]);

  // Pre-allocate line positions (max connections)
  const maxLines = Math.min(count * 3, 6000);
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Update positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Mouse turbulence
      const dx = arr[i3] - mouse3.x * 6;
      const dy = arr[i3 + 1] - mouse3.y * 4;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) {
        const force = (2 - dist) * 0.002;
        velocities[i3] += (dx / (dist || 1)) * force;
        velocities[i3 + 1] += (dy / (dist || 1)) * force;
      }

      arr[i3] += velocities[i3];
      arr[i3 + 1] += velocities[i3 + 1];
      arr[i3 + 2] += velocities[i3 + 2];

      // Bounce
      if (Math.abs(arr[i3]) > 6) velocities[i3] *= -1;
      if (Math.abs(arr[i3 + 1]) > 4) velocities[i3 + 1] *= -1;
      if (Math.abs(arr[i3 + 2]) > 2) velocities[i3 + 2] *= -1;

      // Damping
      velocities[i3] *= 0.999;
      velocities[i3 + 1] *= 0.999;
      velocities[i3 + 2] *= 0.999;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Connection lines
    if (!linesRef.current) return;
    let lineIdx = 0;
    const lineColor = new THREE.Color("#5b5ef4");
    for (let i = 0; i < Math.min(count, 300); i++) {
      for (let j = i + 1; j < Math.min(count, 300); j++) {
        if (lineIdx >= maxLines) break;
        const i3 = i * 3, j3 = j * 3;
        const dx = arr[i3] - arr[j3];
        const dy = arr[i3 + 1] - arr[j3 + 1];
        const dz = arr[i3 + 2] - arr[j3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < CONNECTION_DIST) {
          const idx = lineIdx * 6;
          linePositions[idx] = arr[i3];
          linePositions[idx + 1] = arr[i3 + 1];
          linePositions[idx + 2] = arr[i3 + 2];
          linePositions[idx + 3] = arr[j3];
          linePositions[idx + 4] = arr[j3 + 1];
          linePositions[idx + 5] = arr[j3 + 2];
          const alpha = 1 - d / CONNECTION_DIST;
          lineColors[idx] = lineColor.r * alpha;
          lineColors[idx + 1] = lineColor.g * alpha;
          lineColors[idx + 2] = lineColor.b * alpha;
          lineColors[idx + 3] = lineColor.r * alpha;
          lineColors[idx + 4] = lineColor.g * alpha;
          lineColors[idx + 5] = lineColor.b * alpha;
          lineIdx++;
        }
      }
      if (lineIdx >= maxLines) break;
    }
    const lGeo = linesRef.current.geometry;
    lGeo.setDrawRange(0, lineIdx * 2);
    lGeo.attributes.position.needsUpdate = true;
    lGeo.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#00c6ff" transparent opacity={0.6} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={maxLines * 2} itemSize={3} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} count={maxLines * 2} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.4} />
      </lineSegments>
    </>
  );
}

function SceneContent({ count }: { count: number }) {
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement;
    const handler = (e: MouseEvent) => {
      mouse3.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse3.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [gl]);

  return <ParticleField count={count} />;
}

const FinalCtaParticles = ({ isMobile }: { isMobile: boolean }) => {
  const count = isMobile ? MOBILE_COUNT : DESKTOP_COUNT;
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.5]} style={{ background: "transparent" }}>
        <SceneContent count={count} />
      </Canvas>
    </div>
  );
};

export default FinalCtaParticles;
