import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
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