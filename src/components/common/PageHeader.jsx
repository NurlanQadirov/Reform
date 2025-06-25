import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const PageHeader = ({ title, subtitle }) => (
    <AnimatedSection className="pt-48 pb-24">
        <div className="container mx-auto px-6 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent"
            >
                {title}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            >
                {subtitle}
            </motion.p>
        </div>
    </AnimatedSection>
);

export default PageHeader;