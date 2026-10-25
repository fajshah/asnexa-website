import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, ZoomIn, Layers, Sparkles, Box, Shield, Mic, Cpu } from 'lucide-react';

type ModelType = 'digitalFte' | 'voiceAgent' | 'ragLattice' | 'workflowCube';

interface ModelInfo {
  id: ModelType;
  name: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
}

const MODELS: ModelInfo[] = [
  {
    id: 'digitalFte',
    name: 'Autonomous Digital FTE Model',
    category: 'Virtual AI Employee',
    description: '3D Cybernetic Autonomous Agent architecture powered by Claude 3.5 reasoning core. Operates 24/7 across ERP, CRM, and communication stacks with 99.4% deterministic precision.',
    stats: [
      { label: 'Uptime', value: '99.98%' },
      { label: 'Decision Speed', value: '180ms' },
      { label: 'Tool APIs', value: '150+ Built-in' },
    ],
  },
  {
    id: 'voiceAgent',
    name: 'Sub-300ms Voice Matrix',
    category: 'Conversational Telephony',
    description: 'Ultra-low latency bidirectional audio streaming topology. Real-time acoustic analysis, dynamic barge-in detection, and zero robotic pauses.',
    stats: [
      { label: 'Round-Trip Latency', value: '<280ms' },
      { label: 'Turn-Taking', value: 'Zero-Lag' },
      { label: 'VoIP Integration', value: 'Twilio / SIP' },
    ],
  },
  {
    id: 'ragLattice',
    name: 'Governed RAG Knowledge Core',
    category: 'System of Record (KSoR)',
    description: 'Dual-layer enterprise retrieval lattice combining hybrid dense vector spaces with deterministic BM25 keyword matching for guaranteed zero hallucinations.',
    stats: [
      { label: 'Hallucination Rate', value: '0.00%' },
      { label: 'Embedding Recall', value: '99.7%' },
      { label: 'Citation Source', value: '100% Traceable' },
    ],
  },
  {
    id: 'workflowCube',
    name: 'Autonomous n8n Pipeline Unit',
    category: 'Workflow Automation',
    description: 'Self-healing automated execution node connecting Shopify, Stripe, Salesforce, Slack, and internal SQL databases with conditional validation branches.',
    stats: [
      { label: 'Throughput', value: '25k ops/min' },
      { label: 'Error Auto-Retry', value: 'Exponential Backoff' },
      { label: 'Security', value: 'SOC2 / HIPAA Ready' },
    ],
  },
];

export const ThreeDModelShowcase: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>('digitalFte');
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(5);
  const mountRef = useRef<HTMLDivElement>(null);

  const activeGroupRef = useRef<THREE.Group | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = zoomLevel;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xa855f7, 3);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 3);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const backLight = new THREE.PointLight(0x6366f1, 5, 20);
    backLight.position.set(0, 0, -4);
    scene.add(backLight);

    // Build the 3D model for the selected type
    const group = new THREE.Group();
    scene.add(group);
    activeGroupRef.current = group;

    const buildModel = (type: ModelType) => {
      // Clear previous children
      while (group.children.length > 0) {
        const obj = group.children[0];
        group.remove(obj);
      }

      if (type === 'digitalFte') {
        // Robotic Humanoid Head / Core
        // Head Cranium
        const headGeo = new THREE.SphereGeometry(1.0, 32, 32);
        const headMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.85,
          roughness: 0.2,
          wireframe: wireframe,
        });
        const head = new THREE.Mesh(headGeo, headMat);
        head.scale.set(0.9, 1.15, 1.0);
        group.add(head);

        // Face Visor / Glass Optics
        const visorGeo = new THREE.BoxGeometry(1.2, 0.35, 0.6);
        const visorMat = new THREE.MeshPhysicalMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.1,
          transparent: true,
          opacity: 0.9,
        });
        const visor = new THREE.Mesh(visorGeo, visorMat);
        visor.position.set(0, 0.2, 0.7);
        group.add(visor);

        // Cyber Audio Ear Nodes
        const earGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.2, 24);
        const earMat = new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          metalness: 0.9,
          roughness: 0.3,
        });
        const leftEar = new THREE.Mesh(earGeo, earMat);
        leftEar.rotation.z = Math.PI / 2;
        leftEar.position.set(-1.0, 0.1, 0);
        group.add(leftEar);

        const rightEar = leftEar.clone();
        rightEar.position.set(1.0, 0.1, 0);
        group.add(rightEar);

        // Orbiting Neural Rings
        const ringGeo = new THREE.TorusGeometry(1.5, 0.02, 16, 64);
        const ringMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x1d63ff,
          emissiveIntensity: 0.6,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 4;
        group.add(ring);
      } else if (type === 'voiceAgent') {
        // Torus Knot pulsating sound wave matrix
        const knotGeo = new THREE.TorusKnotGeometry(1.1, 0.32, 128, 32, 2, 3);
        const knotMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x1d63ff,
          emissiveIntensity: 0.5,
          metalness: 0.7,
          roughness: 0.2,
          wireframe: wireframe,
        });
        const knot = new THREE.Mesh(knotGeo, knotMat);
        group.add(knot);

        // Soundwave spheres orbiting
        const count = 8;
        for (let i = 0; i < count; i++) {
          const sphereGeo = new THREE.SphereGeometry(0.12, 16, 16);
          const sphereMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
          const sphere = new THREE.Mesh(sphereGeo, sphereMat);
          const angle = (i / count) * Math.PI * 2;
          sphere.position.set(Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, (Math.random() - 0.5) * 0.8);
          group.add(sphere);
        }
      } else if (type === 'ragLattice') {
        // Dual Crystalline Nested Polyhedra (Octahedron + Dodecahedron)
        const outerGeo = new THREE.DodecahedronGeometry(1.4, 0);
        const outerMat = new THREE.MeshPhysicalMaterial({
          color: 0x8b5cf6,
          emissive: 0x3b0764,
          metalness: 0.4,
          roughness: 0.1,
          transparent: true,
          opacity: 0.75,
          wireframe: wireframe,
        });
        const outer = new THREE.Mesh(outerGeo, outerMat);
        group.add(outer);

        const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0x10b981,
          emissive: 0x059669,
          emissiveIntensity: 0.7,
          metalness: 0.9,
          roughness: 0.2,
          wireframe: true,
        });
        const inner = new THREE.Mesh(innerGeo, innerMat);
        group.add(inner);

        // Floating Data Node Spheres at vertices
        const nodes = [
          [1.4, 0, 0],
          [-1.4, 0, 0],
          [0, 1.4, 0],
          [0, -1.4, 0],
          [0, 0, 1.4],
          [0, 0, -1.4],
        ];
        nodes.forEach(pos => {
          const nGeo = new THREE.SphereGeometry(0.09, 12, 12);
          const nMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
          const nMesh = new THREE.Mesh(nGeo, nMat);
          nMesh.position.set(pos[0], pos[1], pos[2]);
          group.add(nMesh);
        });
      } else if (type === 'workflowCube') {
        // Futuristic Cyber Automation Cube
        const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const cubeMat = new THREE.MeshStandardMaterial({
          color: 0x1e1b4b,
          metalness: 0.9,
          roughness: 0.2,
          wireframe: wireframe,
        });
        const cube = new THREE.Mesh(cubeGeo, cubeMat);
        group.add(cube);

        // Edge Frames
        const edgeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        const edgeMat = new THREE.MeshBasicMaterial({
          color: 0x6366f1,
          wireframe: true,
        });
        const edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
        group.add(edgeMesh);

        // Core Glowing Reactor inside
        const coreGeo = new THREE.SphereGeometry(0.5, 24, 24);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);
      }
    };

    buildModel(selectedModel);

    // Mouse Drag Interaction for Manual Rotation
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !activeGroupRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      activeGroupRef.current.rotation.y += deltaX * 0.01;
      activeGroupRef.current.rotation.x += deltaY * 0.01;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (activeGroupRef.current && autoRotate && !isDragging) {
        activeGroupRef.current.rotation.y += delta * 0.5;
        activeGroupRef.current.rotation.x += delta * 0.2;
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
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [selectedModel, wireframe]);

  // Handle zoom changes
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = zoomLevel;
    }
  }, [zoomLevel]);

  const activeInfo = MODELS.find(m => m.id === selectedModel)!;

  return (
    <div className="py-20 bg-[#f8fafc] relative border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive 3D Engine • AsNexa Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-heading">
            3D Animated System Topology
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Click, drag to rotate in full 3D, and inspect the real-time architectural components powering AsNexa's autonomous enterprise systems.
          </p>

          {/* Model Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {MODELS.map(model => {
              const isSelected = selectedModel === model.id;
              const Icon =
                model.id === 'digitalFte'
                  ? Cpu
                  : model.id === 'voiceAgent'
                  ? Mic
                  : model.id === 'ragLattice'
                  ? Shield
                  : Box;

              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#1D63FF] text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{model.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Viewer & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Canvas Canvas (7 cols) */}
          <div className="lg:col-span-7 relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-800 bg-[#070913] shadow-xl">
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Instruction tooltip */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-2 shadow-md">
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>Drag to rotate • 3D WebGL Render</span>
            </div>

            {/* Canvas Toolbar Controls */}
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-2 rounded-2xl shadow-xl">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 font-mono ${
                  autoRotate ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
                title="Toggle Auto Rotation"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden sm:inline">{autoRotate ? 'Rotating' : 'Static'}</span>
              </button>

              <button
                onClick={() => setWireframe(!wireframe)}
                className={`p-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 font-mono ${
                  wireframe ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
                title="Toggle Wireframe Mesh"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden sm:inline">{wireframe ? 'Mesh' : 'Solid'}</span>
              </button>

              <div className="flex items-center gap-1 pl-1">
                <button
                  onClick={() => setZoomLevel(z => Math.max(3.5, z - 0.5))}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  onClick={() => setZoomLevel(z => Math.min(7.5, z + 0.5))}
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center text-xs font-bold"
                  title="Zoom Out"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          {/* Model Specification Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
                {activeInfo.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                {activeInfo.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {activeInfo.description}
              </p>
            </div>

            {/* Spec Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {activeInfo.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
                  <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 font-semibold">{stat.label}</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-blue-600">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Architectural Highlights */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Production Grade</span>
              </div>
              <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                <li>100% deterministic workflow guardrails</li>
                <li>Real-time telemetry &amp; latency tracing</li>
                <li>Zero data retention on public LLM training sets</li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1D63FF] hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-md shadow-blue-500/20 transition-all hover:scale-105"
              >
                <span>Deploy This System Architecture</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
