import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  const handleSelect = (serviceName: string) => {
    onSelectService(serviceName);
    navigate('/contact');
  };

  return (
    <div className="pt-4">
      <ServicesSection onSelectService={handleSelect} />
    </div>
  );
};
