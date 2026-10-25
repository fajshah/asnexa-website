import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConciergeChatbot } from './components/ConciergeChatbot';
import { GlobalToast } from './components/GlobalToast';
import { FloatingWhatsAppButton } from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SandboxPage } from './pages/SandboxPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ThreeDArchitecturePage } from './pages/ThreeDArchitecturePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { FaqPage } from './pages/FaqPage';
import { CompanyPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function MainAppContent() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [calculatedTeamSize, setCalculatedTeamSize] = useState<number | undefined>(undefined);
  const [calculatedSavings, setCalculatedSavings] = useState<number | undefined>(undefined);
  const [toast, setToast] = useState<{ title: string; message: string } | null>(null);

  const showNotification = (title: string, message: string) => {
    setToast({ title, message });
    setTimeout(() => {
      setToast(current => (current?.title === title ? null : current));
    }, 4000);
  };

  const handleDeployFromCalculator = (
    teamSize: number,
    hours: number,
    cost: number,
    savings: number
  ) => {
    setCalculatedTeamSize(teamSize);
    setCalculatedSavings(savings);
    setSelectedService(`Deploy Digital FTEs (${teamSize} members, ~$${savings.toLocaleString()} saved/yr)`);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    showNotification('Service Selected', `${serviceName} pre-configured for your strategy session.`);
  };

  const handleSelectIndustry = (industryName: string) => {
    setSelectedService(`${industryName} AI Automation Workflow`);
    showNotification('Industry Workflow Selected', `${industryName} blueprint loaded into consultation request.`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative flex flex-col justify-between transition-colors duration-200">
      <ScrollToTop />
      
      {/* Global Toast */}
      <GlobalToast toast={toast} onClose={() => setToast(null)} />

      {/* Persistent Navigation Bar with Active Route Indicators */}
      <Navbar onNotify={showNotification} />

      {/* Routed Pages */}
      <main className="flex-1">
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />

          {/* Services Routes */}
          <Route
            path="/services"
            element={<ServicesPage onSelectService={handleSelectService} />}
          />
          <Route
            path="/services.html"
            element={<ServicesPage onSelectService={handleSelectService} />}
          />
          <Route
            path="/services/:serviceSlug"
            element={
              <ServiceDetailPage
                onSelectService={handleSelectService}
                onNotify={showNotification}
              />
            }
          />

          {/* Industries Routes */}
          <Route
            path="/industries"
            element={<IndustriesPage onSelectIndustry={handleSelectIndustry} />}
          />
          <Route
            path="/industries.html"
            element={<IndustriesPage onSelectIndustry={handleSelectIndustry} />}
          />

          {/* Live Sandbox Routes */}
          <Route
            path="/sandbox"
            element={<SandboxPage onNotify={showNotification} />}
          />
          <Route
            path="/sandbox.html"
            element={<SandboxPage onNotify={showNotification} />}
          />

          {/* ROI Calculator Routes */}
          <Route
            path="/calculator"
            element={
              <CalculatorPage
                onDeploy={handleDeployFromCalculator}
                onNotify={showNotification}
              />
            }
          />
          <Route
            path="/calculator.html"
            element={
              <CalculatorPage
                onDeploy={handleDeployFromCalculator}
                onNotify={showNotification}
              />
            }
          />

          {/* 3D System Topology & Architecture Routes */}
          <Route path="/3d-architecture" element={<ThreeDArchitecturePage />} />
          <Route path="/3d-architecture.html" element={<ThreeDArchitecturePage />} />

          {/* Portfolio & Case Studies Routes */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio.html" element={<PortfolioPage />} />

          {/* FAQ Routes */}
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq.html" element={<FaqPage />} />

          {/* Company Hub Routes */}
          <Route
            path="/company"
            element={<CompanyPage onNotify={showNotification} />}
          />
          <Route
            path="/company.html"
            element={<CompanyPage onNotify={showNotification} />}
          />

          {/* Contact & Strategy Session Routes */}
          <Route
            path="/contact"
            element={
              <ContactPage
                initialService={selectedService}
                initialTeamSize={calculatedTeamSize}
                initialSavings={calculatedSavings}
                onNotify={showNotification}
              />
            }
          />
          <Route
            path="/contact.html"
            element={
              <ContactPage
                initialService={selectedService}
                initialTeamSize={calculatedTeamSize}
                initialSavings={calculatedSavings}
                onNotify={showNotification}
              />
            }
          />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Persistent Floating WhatsApp Direct Connect */}
      <FloatingWhatsAppButton />

      {/* Persistent Interactive AI Concierge */}
      <ConciergeChatbot />

      {/* Persistent Global Footer with Direct Route Links */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainAppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
