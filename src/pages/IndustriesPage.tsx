import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IndustriesSection } from '../components/IndustriesSection';

interface IndustriesPageProps {
  onSelectIndustry: (indName: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onSelectIndustry }) => {
  const navigate = useNavigate();

  const handleSelect = (indName: string) => {
    onSelectIndustry(indName);
    navigate('/contact');
  };

  return (
    <div className="pt-4">
      <IndustriesSection onSelectIndustry={handleSelect} />
    </div>
  );
};
