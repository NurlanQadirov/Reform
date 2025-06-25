import React, { useState, useEffect } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/common/ParticleBackground';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TechnologiesPage from './pages/TechnologiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activePage, setActivePage] = useState('Ana Səhifə');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Xidmətlər':
        return <ServicesPage />;
      case 'Haqqımızda':
        return <AboutPage />;
      case 'Texnologiyalar':
        return <TechnologiesPage />;
      case 'Əlaqə':
        return <ContactPage />;
      case 'Ana Səhifə':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-slate-900">
      <ParticleBackground />
      <div className="relative z-10">
        <Header activePage={activePage} setActivePage={setActivePage} />
        <main>
            {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;