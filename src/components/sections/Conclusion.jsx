import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Conclusion = () => {
  const { title, message, summary, bridge, quotes, finalWish } = presentationData.conclusion;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen py-24 px-4 md:px-8 relative z-10 flex flex-col items-center justify-center">
      <motion.div 
        className="max-w-5xl w-full mx-auto space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.div variants={item} className="text-center mb-8">
          <div className="inline-flex items-center rounded-full border border-[#8B4513]/15 bg-[#f7f0e2]/80 px-4 py-2 text-sm md:text-base font-semibold uppercase tracking-[0.28em] text-[#8B4513] mb-4">
            {title}
          </div>
        </motion.div>

        {/* Highlight Message */}
        <motion.div variants={item} className="glass-panel-light p-8 md:p-12 rounded-[2rem] text-center border-t-4 border-[#8B4513]">
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-[#8B4513] leading-tight tracking-tight font-serif italic">
            "{message}"
          </h2>
        </motion.div>

        {/* Summary & Bridge Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={item} className="glass-panel-light p-8 rounded-[2rem]">
            <p className="text-xl md:text-2xl text-[#2C1E16] leading-relaxed font-medium text-justify">
              {summary}
            </p>
          </motion.div>
          <motion.div variants={item} className="glass-panel-light p-8 rounded-[2rem] bg-white/40">
            <p className="text-xl md:text-2xl text-[#5C4033] leading-relaxed text-justify">
              {bridge}
            </p>
          </motion.div>
        </div>

        {/* Quotes */}
        <motion.div variants={item} className="glass-panel-light p-8 md:p-12 rounded-[2rem]">
          <div className="space-y-6">
            {quotes.map((quote, idx) => (
              <p key={idx} className="text-xl md:text-2xl text-[#2C1E16] font-medium border-l-4 border-[#4A5D23] pl-6 py-2 text-justify">
                {quote}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Final Wish */}
        <motion.div variants={item} className="pt-20 pb-12 text-center flex flex-col items-center">
           <div className="glass-panel-light px-10 py-6 md:px-16 md:py-8 rounded-[3rem] inline-block border-2 border-white/80">
             <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#4A5D23] italic tracking-wide whitespace-nowrap">
               {finalWish}
             </h3>
             <div className="w-32 h-[3px] bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mx-auto mt-6 rounded-full opacity-70"></div>
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Conclusion;
