import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const StateRole = () => {
  const {
    title,
    subtitle,
    context,
    foundationTitle,
    foundationLead,
    foundation,
    redistributionTitle,
    redistributionTheory,
    redistributionItems,
    preventive,
    resolution,
  } = presentationData.stateRole;

  return (
    <section className="min-h-screen py-32 px-8 lg:px-24 relative z-10 flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start max-w-7xl mx-auto w-full">
        <motion.div 
          className="flex-1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#2C1E16] mb-8 tracking-tight font-serif">{title}</h2>
          <div className="glass-panel-light p-8 rounded-2xl border-l-8 border-l-[#8B4513] max-w-4xl space-y-4">
            <p className="text-xl md:text-2xl text-[#2C1E16] font-medium leading-relaxed italic text-justify">{subtitle}</p>
            <p className="text-xl md:text-2xl text-[#5C4033] leading-relaxed text-justify">{context}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-80 h-64 lg:h-80 rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
        >
          <img src="/assets/state.png" alt="State Intervention" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl w-full mb-12 glass-panel-light p-8 rounded-3xl"
      >
        <h3 className="text-3xl font-bold text-[#2C1E16] mb-4">{foundationTitle}</h3>
        <p className="text-xl md:text-2xl text-[#5C4033] leading-relaxed mb-6 text-justify">{foundationLead}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {foundation.map((item, index) => (
            <div key={item} className="rounded-2xl bg-white/55 border border-white/50 p-6 md:p-8 h-full">
              <div className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-[#8B4513] mb-3">0{index + 1}</div>
              <p className="text-xl md:text-2xl text-[#4A3219] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-7xl w-full mb-12 glass-panel-light p-8 rounded-3xl"
      >
        <h3 className="text-3xl font-bold text-[#2C1E16] mb-4">{redistributionTitle}</h3>
        <p className="text-xl md:text-2xl text-[#5C4033] leading-relaxed mb-6 text-justify">{redistributionTheory}</p>
        <div className="space-y-4">
          {redistributionItems.map((item, index) => (
            <div key={item} className="rounded-2xl bg-white/55 border border-white/50 p-6">
              <div className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-[#8B4513] mb-3">0{index + 1}</div>
              <p className="text-xl md:text-2xl text-[#4A3219] leading-relaxed text-justify">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-full">
        {/* Preventive Measures */}
        <div className="flex-1 space-y-8 glass-panel-light p-8 md:p-12 rounded-3xl">
          <div className="border-b border-[#4A5D23]/30 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-[#4A5D23] mb-4">{preventive.title}</h3>
            <p className="text-xl md:text-2xl text-[#5C4033] font-medium italic">{preventive.desc}</p>
          </div>
          {preventive.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[#8B4513] text-2xl font-bold">0{index + 1}.</span>
                <h4 className="text-2xl font-bold text-[#2C1E16]">{item.title}</h4>
              </div>
              <p className="text-xl text-[#2C1E16] font-medium leading-relaxed pl-10 text-justify">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Resolution Measure */}
        <motion.div 
          className="flex-1 glass-panel-light p-8 md:p-12 rounded-3xl flex flex-col relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="border-b border-[#8B4513]/30 pb-6 mb-8 relative z-10">
            <h3 className="text-3xl font-bold text-[#8B4513]">{resolution.title}</h3>
          </div>
          <p className="text-xl md:text-2xl text-[#2C1E16] font-medium leading-relaxed text-justify relative z-10">
            {resolution.desc}
          </p>
          <div className="mt-8 space-y-4 relative z-10">
            {resolution.actions.map((action, index) => (
              <div key={action} className="flex gap-4 items-start rounded-2xl border border-[#8B4513]/10 bg-white/45 p-4">
                <span className="text-[#8B4513] text-xl font-bold">0{index + 1}</span>
                <p className="text-xl md:text-2xl text-[#2C1E16] leading-relaxed">{action}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StateRole;
