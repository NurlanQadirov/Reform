import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Menu və X ikonlarını əlavə edirik
import { Menu, X } from 'lucide-react';

const Header = ({ activePage, setActivePage }) => {
  const [scrollY, setScrollY] = useState(0);
  // 1. Mobil menyunun vəziyyətini saxlamaq üçün yeni state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Ana Səhifə', 'Xidmətlər', 'Haqqımızda', 'Texnologiyalar', 'Əlaqə'];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menyunu bağlamaq üçün effekt: menyu açıq ikən arxa planın scroll olmasını əngəlləyir
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Komponent unmount olduqda stilin təmizlənməsi
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Mobil menyu üçün animasiya variantları
  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 || isMenuOpen
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-cyan-400/10 shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -3 }}
          className="text-3xl font-bold tracking-wider cursor-pointer z-50" // Hamburger menyusunun üstündə qalması üçün z-50
          onClick={() => {
              setActivePage('Ana Səhifə');
              setIsMenuOpen(false); // Logo-ya basdıqda menyu bağlansın
          }}
        >
           <a className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Reform</a>
        </motion.div>
        
        {/* Desktop Menu (Orta və böyük ekranlarda görünür) */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              onClick={(e) => { e.preventDefault(); setActivePage(item); }}
              whileHover={{ y: -2, color: '#22d3ee' }}
              className={`relative text-sm font-medium transition-colors cursor-pointer ${
                activePage === item ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {item}
              {activePage === item && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" 
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* 2. Hamburger Menu Button (Kiçik ekranlarda görünür) */}
        <div className="md:hidden z-50">
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-cyan-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </nav>

      {/* 3. Mobil Menu Paneli */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 w-full h-screen pt-24 bg-slate-950/95 backdrop-blur-xl md:hidden"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActivePage(item);
                                setIsMenuOpen(false); // Linkə basdıqda menyunu bağla
                            }}
                            className={`text-3xl font-semibold transition-colors ${
                                activePage === item ? 'text-cyan-400' : 'text-gray-300'
                            }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;