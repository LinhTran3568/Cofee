import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Conclusion = () => {
  const { title, message, summary, bridge, quotes, buttonText } = presentationData.conclusion;
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="min-h-screen py-32 px-8 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
      <motion.div 
        className="max-w-6xl relative z-10 glass-panel-light p-10 md:p-20 lg:p-24 rounded-[2rem] shadow-[0_30px_70px_rgba(59,39,24,0.16)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="mb-6 text-xs md:text-sm uppercase tracking-[0.32em] text-[#4A5D23] font-semibold">
          {title}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B4513] leading-tight mb-16 tracking-tight font-serif italic text-left">
          "{message}"
        </h2>

        <p className="text-xl md:text-2xl text-[#2C1E16] leading-relaxed font-medium text-justify mb-8">
          {summary}
        </p>

        <div className="rounded-2xl border border-[#4A5D23]/15 bg-white/50 p-6 mb-12 text-left">
          <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed">{bridge}</p>
        </div>
        
        <div className="space-y-6 mb-16 text-justify">
          {quotes.map((quote, idx) => (
            <p key={idx} className="text-xl md:text-2xl text-[#2C1E16] font-medium border-l-4 border-[#4A5D23] pl-6 py-2">
              {quote}
            </p>
          ))}
        </div>
        
        <motion.button 
          onClick={scrollToTop}
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
