import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Conclusion = () => {
  const { message, quotes, buttonText } = presentationData.conclusion;

  return (
    <section className="min-h-screen py-32 px-8 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
      <motion.div 
        className="max-w-6xl relative z-10 glass-panel-light p-12 md:p-24 rounded-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513] leading-tight mb-16 tracking-tight font-serif italic text-justify">
          "{message}"
        </h2>
        
        <div className="space-y-6 mb-20 text-justify">
          {quotes.map((quote, idx) => (
            <p key={idx} className="text-xl md:text-2xl text-[#2C1E16] font-medium border-l-4 border-[#4A5D23] pl-6 py-2">
              {quote}
            </p>
          ))}
        </div>
        
        <motion.button 
          className="px-16 py-6 bg-[#4A5D23] text-white text-xl font-bold tracking-widest uppercase hover:bg-[#8B4513] transition-all duration-500 rounded-full shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Conclusion;
