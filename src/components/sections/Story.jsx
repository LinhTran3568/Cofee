import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Story = () => {
  const { farmer, retail } = presentationData.story;

  return (
    <motion.section 
      className="min-h-screen flex flex-col lg:flex-row relative z-10 max-w-7xl mx-auto py-20 px-8 gap-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 1.5 }}
    >
      {/* Farmer Side */}
      <div className="flex-1 flex flex-col justify-center group">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-panel-light p-8 md:p-12 rounded-3xl h-full flex flex-col"
        >
          <div className="text-[#8B4513] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Người Sản Xuất</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1E16] mb-6 font-serif leading-tight">{farmer.name}</h2>
          
          <div className="w-full h-64 rounded-2xl overflow-hidden mb-8">
            <img src={farmer.image} alt="Raw Coffee Beans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <p className="text-xl text-[#4A3219] font-medium leading-relaxed mt-auto text-justify">{farmer.description}</p>
        </motion.div>
      </div>

      {/* Retail Side */}
      <div className="flex-1 flex flex-col justify-center group">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="glass-panel-light p-8 md:p-12 rounded-3xl h-full flex flex-col"
        >
          <div className="text-[#4A5D23] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Chuỗi Bán Lẻ</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C1E16] mb-6 font-serif leading-tight">{retail.name}</h2>
          
          <div className="w-full h-64 rounded-2xl overflow-hidden mb-8">
            <img src={retail.image} alt="Premium Coffee Cup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <p className="text-xl text-[#4A3219] font-medium leading-relaxed mt-auto text-justify">{retail.description}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Story;
