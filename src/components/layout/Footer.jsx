import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
    const navItems = ['Ana Səhifə', 'Xidmətlər', 'Haqqımızda', 'Texnologiyalar', 'Əlaqə'];
    const services = [
      { id: 'software', title: 'Proqram Təminatı' },
      { id: 'network', title: 'Şəbəkə İnfrastrukturu' },
      { id: 'security', title: 'Kibertəhlükəsizlik' },
      { id: 'consulting', title: 'İT Konsaltinq' }
    ];
    return(
    <footer className="relative bg-slate-950/50 backdrop-blur-sm border-t border-cyan-400/10 pt-20 pb-8 z-10 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-sm">
          <div>
            <div className="text-2xl font-bold text-cyan-400 mb-4">
              <a href="#" className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Reform
              </a>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Rəqəmsal transformasiyanın arxitekturası ilə biznesinizi gələcəyə hazırlayırıq.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold tracking-wider mb-4">Naviqasiya</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"> {item} </a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold tracking-wider mb-4">Xidmətlər</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold tracking-wider mb-4">Əlaqə</h4>
            <div className="space-y-3 text-gray-400">
              <p>Bakı, Azərbaycan</p>
              <p>info@reform.az</p>
              <p>+994 12 000 00 00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Reform. Bütün hüquqlar qorunur.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <motion.a key={i} href="#" whileHover={{ y: -3, color: '#22d3ee' }} className="text-gray-500 hover:text-cyan-400 transition-colors">
                      <Icon size={20} />
                  </motion.a>
              ))}
          </div>
        </div>
      </div>
    </footer>
    )
  };

export default Footer;