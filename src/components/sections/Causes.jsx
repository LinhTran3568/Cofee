import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Causes = () => {
  const { title, subtitle, items } = presentationData.causes;

  return (
    <section className="min-h-screen py-32 px-8 lg:px-24 relative z-10 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex-1 max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2C1E16] mb-8 tracking-tight font-serif">{title}</h2>
          <div className="glass-panel-light p-8 rounded-2xl border-l-8 border-l-[#4A5D23]">
            <p className="text-xl md:text-2xl text-[#2C1E16] font-medium leading-relaxed italic">{subtitle}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 h-72 rounded-3xl overflow-hidden shadow-xl"
        >
          <img src="/assets/farmer.png" alt="Dak Lak Coffee Farmer" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.15 }}
            className="p-10 group relative overflow-hidden glass-panel-light rounded-3xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-serif font-bold text-[#4A5D23]/10 group-hover:text-[#8B4513]/10 transition-colors duration-500 pointer-events-none">
              0{index + 1}
            </div>
            <h3 className="text-2xl font-bold text-[#8B4513] mb-4 relative z-10">{item.title}</h3>
            <p className="text-lg text-[#2C1E16] font-medium leading-relaxed relative z-10 text-justify">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Causes;
