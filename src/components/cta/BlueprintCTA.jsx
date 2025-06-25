import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const BlueprintCTA = ({ setActivePage }) => {
  // SVG xətlərinin animasiyası üçün variantlar
  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Mətn və düymənin animasiyası üçün variantlar
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6">
        {/* ANA KONTEYNER: Boşluqlar (padding) və minimum hündürlük responsiv edildi */}
        <div className="relative bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-6 sm:p-8 md:p-12 text-center flex items-center justify-center min-h-[380px] md:min-h-[400px] overflow-hidden">
          
          <div 
            className="absolute inset-0 z-0 opacity-50"
            style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 1px, transparent 1px)',
                backgroundSize: '1.5rem 1.5rem' // Nöqtələri bir az sıxlaşdırdıq
            }}
          ></div>

          <motion.div
            className="absolute top-0 left-0 h-full w-1 z-10"
            style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.7), transparent)'
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100vw' }}
            transition={{
                duration: 4,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
                delay: 2
            }}
          ></motion.div>

          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 500 300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="absolute top-0 left-0 w-full h-full z-20"
            preserveAspectRatio="xMidYMid slice"
          >
            {[1, 2, 3].map(i => (
              <motion.path
                key={`hex-${i}`}
                d={`M250 ${50 + i * 50} L${175 - i*25} ${93.3 + i*43.3} L${175 - i*25} ${179.9 + i*8.3} L250 ${223.2 - i*26.7} L${325 + i*25} ${179.9 + i*8.3} L${325 + i*25} ${93.3 + i*43.3} Z`}
                fill="none"
                stroke="rgba(0, 255, 255, 0.2)"
                strokeWidth="1.5"
                variants={svgVariants}
                transition={{ duration: 1.5, ease: "circOut", delay: i * 0.3 }}
              />
            ))}
            <motion.path d="M175 93.3 L 100 50" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="1" variants={svgVariants} transition={{delay: 1}} />
            <motion.path d="M325 93.3 L 400 50" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="1" variants={svgVariants} transition={{delay: 1.2}} />
            <motion.path d="M175 179.9 L 100 223.2" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="1" variants={svgVariants} transition={{delay: 1.4}}/>
            <motion.path d="M325 179.9 L 400 223.2" stroke="rgba(192, 132, 252, 0.25)" strokeWidth="1" variants={svgVariants} transition={{delay: 1.6}}/>
          </motion.svg>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={contentVariants}
            className="relative z-30"
          >
            {/* BAŞLIQ: Mətn ölçüsü responsiv edildi */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              İdeyanız Arxitekturamızdır
            </h2>
            {/* AÇIQLAMA MƏTNİ: Mətn ölçüsü responsiv edildi */}
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Rəqəmsal hədəflərinizə çatmaq üçün möhkəm təməl və qüsursuz bir plan hazırlayaq.
            </p>
            
            {/* DÜYMƏ: Boşluqlar (padding) və mətn ölçüsü responsiv edildi */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage && setActivePage('Əlaqə')}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base md:px-10 md:py-4 md:text-lg rounded-full font-bold text-white transition-shadow duration-300 transform shadow-lg bg-gradient-to-r from-cyan-500 to-purple-600"
            >
              <span className="relative flex items-center gap-3">
                Layihəni Müzakirə Edək
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BlueprintCTA;