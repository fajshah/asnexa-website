import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDVoiceVisualizerProps {
  isActive: boolean;
  rttMs?: number;
  speakingState?: 'idle' | 'agent' | 'user';
}

export const ThreeDVoiceVisualizer: React.FC<ThreeDVoiceVisualizerProps> = ({
  isActive,
  rttMs = 240,
  speakingState = 'idle',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [pulseSpeed, setPulseSpeed] = useState(1);

  const sphereMeshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);
  const wavePointsRef = useRef<THREE.Points | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const light = new THREE.PointLight(0x38bdf8, 4, 15);
    light.position.set(0, 0, 3);
    scene.add(light);
    lightRef.current = light;

    // 1. Organic Voice Soundwave Sphere (Displaced Vertices)
    const sphereGeo = new THREE.SphereGeometry(1.2, 48, 48);
    // Keep initial positions for wave deformation
    const originalPositions = sphereGeo.attributes.position.array.slice() as Float32Array;

    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x1d63ff,
      emissive: 0x0f172a,
      roughness: 0.25,
      metalness: 0.8,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);
    sphereMeshRef.current = sphere;

    // 2. Outer Wireframe Halo
    const wireGeo = new THREE.SphereGeometry(1.35, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireSphere);
    wireMeshRef.current = wireSphere;

    // 3. Audio Ring Particles
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = (i / particleCount) * Math.PI * 2;
      const radius = 1.7 + (Math.random() - 0.5) * 0.25;
      particlePositions[i * 3] = Math.cos(theta) * radius;
      particlePositions[i * 3 + 1] = Math.sin(theta) * radius;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(wavePoints);
    wavePointsRef.current = wavePoints;

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const pos = sphereGeo.attributes.position;
      const arr = pos.array as Float32Array;

      // Frequency / amplitude changes based on active call state
      const amplitude = isActive
        ? speakingState === 'agent'
          ? 0.24
          : speakingState === 'user'
          ? 0.18
          : 0.1
        : 0.04;

      const freq = isActive ? (speakingState === 'agent' ? 6.0 : 4.0) : 1.5;

      for (let i = 0; i < arr.length; i += 3) {
        const ox = originalPositions[i];
        const oy = originalPositions[i + 1];
        const oz = originalPositions[i + 2];

        const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const nx = ox / length;
        const ny = oy / length;
        const nz = oz / length;

        // Wave deformation
        const wave =
          Math.sin(nx * freq + time * 3.5) *
          Math.cos(ny * freq + time * 3.0) *
          Math.sin(nz * freq + time * 2.5);

        const displacement = 1 + wave * amplitude;

        arr[i] = ox * displacement;
        arr[i + 1] = oy * displacement;
        arr[i + 2] = oz * displacement;
      }

      pos.needsUpdate = true;

      // Rotations
      if (sphereMeshRef.current) {
        sphereMeshRef.current.rotation.y = time * 0.3;
        sphereMeshRef.current.rotation.x = time * 0.2;
      }

      if (wireMeshRef.current) {
        wireMeshRef.current.rotation.y = -time * 0.2;
        wireMeshRef.current.rotation.z = time * 0.15;
      }

      if (wavePointsRef.current) {
        wavePointsRef.current.rotation.z = time * 0.4;
      }

      // Dynamic light color based on state
      if (lightRef.current) {
        if (speakingState === 'agent') {
          lightRef.current.color.setHex(0x38bdf8);
        } else if (speakingState === 'user') {
          lightRef.current.color.setHex(0x10b981);
        } else {
          lightRef.current.color.setHex(0x8b5cf6);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      wireGeo.dispose();
      particleGeo.dispose();
      sphereMat.dispose();
      wireMat.dispose();
      particleMat.dispose();
    };
  }, [isActive, speakingState]);

  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
      <div ref={mountRef} className="w-full h-full" />

      {/* Real-time Telemetry Overlay */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono shadow-md">
        <span
          className={`w-2 h-2 rounded-full ${
            isActive
              ? speakingState === 'agent'
                ? 'bg-blue-400 animate-ping'
                : 'bg-emerald-400 animate-pulse'
              : 'bg-slate-500'
          }`}
        />
        <span className="text-slate-300">
          {isActive
            ? speakingState === 'agent'
              ? 'Agent Speaking • 3D Voice Stream'
              : speakingState === 'user'
              ? 'Listening to Caller'
              : 'Call Active'
            : 'Standby Mode'}
        </span>
      </div>

      <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[11px] font-mono font-bold shadow-md">
        RTT: {rttMs}ms
      </div>

      <div className="absolute bottom-3 inset-x-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2 pointer-events-none">
        <span>3D Acoustic Topology</span>
        <span>Codec: Opus 48kHz HD</span>
      </div>
    </div>
  );
};
