import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Hero = () => {
  const { title, highlightTitle, subtitle } = presentationData.hero;

  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 md:px-8 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="glass-panel-light p-8 md:p-14 lg:p-20 rounded-[2rem] text-center z-10 max-w-5xl mx-auto space-y-6 md:space-y-8 shadow-[0_30px_70px_rgba(59,39,24,0.16)]">
        <motion.div
          className="inline-flex items-center rounded-full border border-[#8B4513]/15 bg-[#f7f0e2]/80 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-[#8B4513]"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Kinh tế chính trị Mác - Lênin
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-[84px] font-bold text-[#2C1E16] leading-tight tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {title} <br/>
          <span className="text-[#4A5D23]">{highlightTitle}</span>
        </motion.h1>
        
        <motion.p 
          className="mx-auto max-w-3xl text-xl md:text-3xl text-[#5C4033] font-medium tracking-wide"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#4A5D23]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#4A5D23]/0 via-[#4A5D23] to-[#4A5D23]/0 mx-auto mb-2"></div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
