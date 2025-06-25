import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null);
  
  // 1. `once: false` parametrini dəqiq təyin edirik.
  // Bu, `isInView` dəyərinin ekrandan çıxdıqda da yenilənməsini təmin edir.
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const controls = useAnimation();

  // 2. useEffect məntiqini yeniləyirik.
  React.useEffect(() => {
    if (isInView) {
      // Element ekrana daxil olanda "visible" vəziyyətinə keçir.
      controls.start("visible");
    } else {
      // Element ekrandan çıxanda "hidden" vəziyyətinə qayıdır.
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;