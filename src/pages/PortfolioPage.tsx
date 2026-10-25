import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioSection } from '../components/PortfolioSection';

export const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-4">
      <PortfolioSection onConsult={() => navigate('/contact')} />
    </div>
  );
};
