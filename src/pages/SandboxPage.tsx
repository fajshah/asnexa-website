import React from 'react';
import { SandboxSection } from '../components/SandboxSection';

interface SandboxPageProps {
  onNotify: (title: string, message: string) => void;
}

export const SandboxPage: React.FC<SandboxPageProps> = ({ onNotify }) => {
  return (
    <div className="pt-4">
      <SandboxSection onNotify={onNotify} />
    </div>
  );
};
