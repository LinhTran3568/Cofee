import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Concept = () => {
  const { title, subtitle, definition, dimensions, relations, roleTitle, roles } = presentationData.concept;

  return (
    <section className="min-h-screen py-32 px-8 lg:px-24 relative z-10 flex flex-col justify-center">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-[#2C1E16] mb-4 tracking-tight font-serif">{title}</h2>
        <p className="text-xl md:text-2xl text-[#4A5D23] font-bold mb-8 uppercase tracking-widest">{subtitle}</p>
        <div className="glass-panel-light p-8 rounded-2xl border-l-8 border-l-[#8B4513]">
          <p className="text-xl md:text-2xl text-[#2C1E16] font-medium leading-relaxed italic text-justify">
            "{definition}"
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full">
        {/* Dimensions */}
        <div className="space-y-8">
          {dimensions.map((dim, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="glass-panel-light p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-[#4A5D23] mb-4 border-b border-[#4A5D23]/20 pb-4">{dim.title}</h3>
              <p className="text-lg text-[#2C1E16] font-medium leading-relaxed text-justify">{dim.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Relations & Roles */}
        <div className="space-y-8">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass-panel-light p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6 border-b border-[#8B4513]/20 pb-4">Thống Nhất & Mâu Thuẫn</h3>
            <div className="space-y-6 text-justify">
              <p className="text-lg text-[#2C1E16] font-medium leading-relaxed">
                <span className="text-[#4A5D23] font-bold block mb-2">{relations.unity.split(':')[0]}:</span> 
                {relations.unity.split(':')[1]}
              </p>
              <div className="h-[1px] w-full bg-[#2C1E16]/10"></div>
              <p className="text-lg text-[#2C1E16] font-medium leading-relaxed">
                <span className="text-[#8B4513] font-bold block mb-2">{relations.conflict.split(':')[0]}:</span> 
                {relations.conflict.split(':')[1]}
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="glass-panel-light p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#4A5D23] mb-6 border-b border-[#4A5D23]/20 pb-4">{roleTitle}</h3>
            <div className="space-y-6 text-justify">
              {roles.map((role, idx) => (
                <p key={idx} className="text-lg text-[#2C1E16] font-medium leading-relaxed">
                  <span className="text-[#8B4513] font-bold">{role.title}:</span> {role.desc}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
