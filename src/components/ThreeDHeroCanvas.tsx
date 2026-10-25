import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDHeroCanvasProps {
  interactive?: boolean;
}

export const ThreeDHeroCanvas: React.FC<ThreeDHeroCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [colorMode, setColorMode] = useState<'asNexa' | 'quantum' | 'emerald'>('asNexa');
  const [speed, setSpeed] = useState(1);
  const [isRotating, setIsRotating] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const coreMeshRef = useRef<THREE.Mesh | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);
  const ring1Ref = useRef<THREE.Group | null>(null);
  const ring2Ref = useRef<THREE.Group | null>(null);
  const ring3Ref = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const coreMaterialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const innerMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Dimensions
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 4, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x1d63ff, 4, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight3.position.set(0, 5, -2);
    scene.add(pointLight3);

    // 1. Core 3D Geometry: Icosahedron with glass/metallic aesthetic
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x2e1065,
      emissiveIntensity: 0.4,
      metalness: 0.3,
      roughness: 0.15,
      transparent: true,
      opacity: 0.82,
      transmission: 0.5,
      ior: 1.5,
      wireframe: false,
    });
    coreMaterialRef.current = coreMaterial;

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // 2. Inner Pulsating Crystal Core (Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(0.75, 1);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x1d63ff,
      emissiveIntensity: 0.8,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    });
    innerMaterialRef.current = innerMaterial;

    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);
    innerMeshRef.current = innerMesh;

    // 3. Orbiting Cyber Gyroscopic Rings
    const createRing = (radius: number, tubeRadius: number, color: number, tiltX: number, tiltY: number) => {
      const group = new THREE.Group();
      
      const ringGeo = new THREE.TorusGeometry(radius, tubeRadius, 16, 80);
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        metalness: 0.9,
        roughness: 0.1,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      group.add(ring);

      // Add small glowing satellite nodes on the ring
      const nodeCount = 4;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const nodeGeo = new THREE.SphereGeometry(tubeRadius * 2.5, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.x = Math.cos(angle) * radius;
        node.position.y = Math.sin(angle) * radius;
        group.add(node);
      }

      group.rotation.x = tiltX;
      group.rotation.y = tiltY;
      scene.add(group);
      return group;
    };

    const ring1 = createRing(2.1, 0.025, 0x8b5cf6, 0.6, 0.3);
    const ring2 = createRing(2.45, 0.02, 0x1d63ff, -0.7, 0.8);
    const ring3 = createRing(2.8, 0.018, 0x38bdf8, 1.1, -0.4);
    ring1Ref.current = ring1;
    ring2Ref.current = ring2;
    ring3Ref.current = ring3;

    // 4. Background Particle Constellation
    const particleCount = 400;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Mouse movement interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / mount.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / mount.clientHeight) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.4;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime() * speed;

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (coreMeshRef.current && isRotating) {
        coreMeshRef.current.rotation.x = time * 0.25 + mouseY * 0.5;
        coreMeshRef.current.rotation.y = time * 0.35 + mouseX * 0.8;
      }

      if (innerMeshRef.current) {
        innerMeshRef.current.rotation.x = -time * 0.5;
        innerMeshRef.current.rotation.y = -time * 0.6;
        // Breathing scale
        const scale = 0.85 + Math.sin(time * 3) * 0.12;
        innerMeshRef.current.scale.set(scale, scale, scale);
      }

      if (ring1Ref.current) {
        ring1Ref.current.rotation.z = time * 0.4;
        ring1Ref.current.rotation.y = 0.3 + Math.sin(time * 0.5) * 0.2;
      }
      if (ring2Ref.current) {
        ring2Ref.current.rotation.z = -time * 0.5;
        ring2Ref.current.rotation.x = -0.7 + Math.cos(time * 0.4) * 0.2;
      }
      if (ring3Ref.current) {
        ring3Ref.current.rotation.z = time * 0.3;
        ring3Ref.current.rotation.y = -0.4 + Math.sin(time * 0.3) * 0.25;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = time * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeometry.dispose();
      innerGeometry.dispose();
      coreMaterial.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [interactive]);

  // Handle color mode updates
  useEffect(() => {
    if (!coreMaterialRef.current || !innerMaterialRef.current) return;
    if (colorMode === 'asNexa') {
      coreMaterialRef.current.color.setHex(0x8b5cf6);
      coreMaterialRef.current.emissive.setHex(0x2e1065);
      innerMaterialRef.current.color.setHex(0x38bdf8);
      innerMaterialRef.current.emissive.setHex(0x1d63ff);
    } else if (colorMode === 'quantum') {
      coreMaterialRef.current.color.setHex(0x06b6d4);
      coreMaterialRef.current.emissive.setHex(0x083344);
      innerMaterialRef.current.color.setHex(0x38bdf8);
      innerMaterialRef.current.emissive.setHex(0x0284c7);
    } else if (colorMode === 'emerald') {
      coreMaterialRef.current.color.setHex(0x10b981);
      coreMaterialRef.current.emissive.setHex(0x064e3b);
      innerMaterialRef.current.color.setHex(0x34d399);
      innerMaterialRef.current.emissive.setHex(0x059669);
    }
  }, [colorMode]);

  // Handle wireframe update
  useEffect(() => {
    if (coreMaterialRef.current) {
      coreMaterialRef.current.wireframe = wireframe;
    }
  }, [wireframe]);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] rounded-3xl overflow-hidden glass-panel border border-indigo-500/20 shadow-2xl">
      {/* Three.js Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Badge Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 text-xs text-indigo-300 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-mono font-medium">AsNexa Neural 3D Core • WebGL Active</span>
      </div>

      {/* Interactive 3D Controls Panel */}
      <div className="absolute bottom-4 right-4 z-10 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-2xl p-3 shadow-2xl flex flex-wrap items-center gap-2 text-xs">
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`px-2.5 py-1 rounded-lg transition-colors font-mono ${
            wireframe ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title="Toggle 3D Wireframe Mesh"
        >
          {wireframe ? 'Solid' : 'Wireframe'}
        </button>

        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-2.5 py-1 rounded-lg transition-colors font-mono ${
            isRotating ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
          title="Pause or Resume 3D Rotation"
        >
          {isRotating ? 'Pause' : 'Rotate'}
        </button>

        <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block"></div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setColorMode('asNexa')}
            className={`w-5 h-5 rounded-full border transition-all ${
              colorMode === 'asNexa'
                ? 'border-white scale-110 shadow-[0_0_8px_rgba(139,92,246,0.8)]'
                : 'border-transparent opacity-60'
            } bg-gradient-to-tr from-purple-600 to-blue-500`}
            title="AsNexa Violet/Blue"
          />
          <button
            onClick={() => setColorMode('quantum')}
            className={`w-5 h-5 rounded-full border transition-all ${
              colorMode === 'quantum'
                ? 'border-white scale-110 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                : 'border-transparent opacity-60'
            } bg-gradient-to-tr from-cyan-500 to-sky-400`}
            title="Quantum Cyan"
          />
          <button
            onClick={() => setColorMode('emerald')}
            className={`w-5 h-5 rounded-full border transition-all ${
              colorMode === 'emerald'
                ? 'border-white scale-110 shadow-[0_0_8px_rgba(16,185,129,0.8)]'
                : 'border-transparent opacity-60'
            } bg-gradient-to-tr from-emerald-500 to-teal-400`}
            title="Emerald Enterprise"
          />
        </div>

        <div className="flex items-center gap-1.5 pl-2 text-slate-400">
          <span className="font-mono text-[10px]">Speed:</span>
          <button
            onClick={() => setSpeed(s => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-mono text-[10px]"
          >
            {speed}x
          </button>
        </div>
      </div>

      {/* Floating 3D Stat Cards on Corners */}
      <div className="absolute top-4 right-4 hidden md:flex flex-col gap-2 z-10 pointer-events-none">
        <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-right shadow-lg">
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Real-Time FPS</div>
          <div className="text-sm font-mono font-bold text-emerald-400">60 FPS • WebGL 2.0</div>
        </div>
        <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-right shadow-lg">
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Agent State</div>
          <div className="text-sm font-mono font-bold text-blue-400">Autonomous Active</div>
        </div>
      </div>
    </div>
  );
};
