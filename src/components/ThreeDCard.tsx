import React, { useRef, useState } from 'react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'blue' | 'cyan' | 'emerald';
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10; // max 10 deg tilt
    const rotY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotX, y: rotY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  const glowStyles = {
    purple: 'hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] hover:border-purple-500/40',
    blue: 'hover:shadow-[0_20px_50px_rgba(29,99,255,0.25)] hover:border-blue-500/40',
    cyan: 'hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)] hover:border-cyan-500/40',
    emerald: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)] hover:border-emerald-500/40',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      className={`relative overflow-hidden rounded-3xl glass-panel p-8 border border-slate-200 shadow-md transition-all duration-300 ${glowStyles[glowColor]} ${className}`}
    >
      {/* Specular Glare Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glarePosition.opacity}), transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
