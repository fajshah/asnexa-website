import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeSection } from '../components/HomeSection';
import { ThreeDModelShowcase } from '../components/ThreeDModelShowcase';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (pathOrId: string) => {
    if (pathOrId.startsWith('/')) {
      navigate(pathOrId);
    } else {
      navigate(`/${pathOrId}`);
    }
  };

  return (
    <div>
      <HomeSection onNavigate={handleNavigate} />
      <ThreeDModelShowcase />
    </div>
  );
};
