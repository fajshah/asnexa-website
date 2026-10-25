import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalculatorSection } from '../components/CalculatorSection';

interface CalculatorPageProps {
  onDeploy: (teamSize: number, hours: number, cost: number, savings: number) => void;
  onNotify: (title: string, message: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onDeploy, onNotify }) => {
  const navigate = useNavigate();

  const handleDeploy = (teamSize: number, hours: number, cost: number, savings: number) => {
    onDeploy(teamSize, hours, cost, savings);
    navigate('/contact');
  };

  return (
    <div className="pt-4">
      <CalculatorSection onDeploy={handleDeploy} onNotify={onNotify} />
    </div>
  );
};
