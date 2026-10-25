import React from 'react';
import { CompanySection } from '../components/CompanySection';

interface CompanyPageProps {
  onNotify: (title: string, message: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNotify }) => {
  return (
    <div className="pt-4">
      <CompanySection onNotify={onNotify} />
    </div>
  );
};
