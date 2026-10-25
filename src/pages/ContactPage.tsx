import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  initialService?: string;
  initialTeamSize?: number;
  initialSavings?: number;
  onNotify: (title: string, message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService,
  initialTeamSize,
  initialSavings,
  onNotify,
}) => {
  return (
    <div className="pt-4">
      <ContactSection
        initialService={initialService}
        initialTeamSize={initialTeamSize}
        initialSavings={initialSavings}
        onNotify={onNotify}
      />
    </div>
  );
};
