import React from 'react';
import { motion } from 'framer-motion';
import { presentationData } from '../../data/content';

const Concept = () => {
  const {
    title,
    subtitle,
    definition,
    overview,
    actorsIntro,
    actors,
    nature,
    roleTitle,
    roles,
    roleQuote,
  } = presentationData.concept;

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
        <div className="glass-panel-light p-8 rounded-2xl border-l-8 border-l-[#8B4513] space-y-4">
          <p className="text-xl md:text-2xl text-[#2C1E16] font-medium leading-relaxed italic text-justify">
            "{definition}"
          </p>
          <p className="text-lg text-[#5C4033] leading-relaxed text-justify">{overview}</p>
        </div>
      </motion.div>

      <div className="max-w-7xl w-full mb-8 text-center md:text-left">
        <div className="inline-block bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 shadow-sm">
          <p className="text-lg md:text-xl text-[#8B4513] font-bold">{actorsIntro}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl w-full mb-12">
        {actors.map((actor, idx) => (
          <motion.div
            key={actor.subject}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="glass-panel-light p-6 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-[#2C1E16] mb-3">{actor.subject}</h3>
            <p className="text-base uppercase tracking-[0.2em] text-[#8B4513] font-semibold mb-3">{actor.benefit}</p>
            <p className="text-lg text-[#5C4033] leading-relaxed">{actor.expression}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel-light p-8 rounded-2xl max-w-7xl w-full mb-12"
      >
        <h3 className="text-2xl font-bold text-[#8B4513] mb-4">{nature.title}</h3>
        <p className="text-lg italic text-[#2C1E16] mb-5">{nature.quote}</p>
        <div className="space-y-4 mb-6">
          {nature.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-[#2C1E16] leading-relaxed text-justify">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {nature.items.map((item) => (
            <div key={item} className="rounded-2xl bg-white/55 border border-white/50 p-5 text-lg text-[#4A3219] leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="glass-panel-light p-8 rounded-2xl max-w-7xl w-full"
      >
        <h3 className="text-2xl font-bold text-[#4A5D23] mb-6 border-b border-[#4A5D23]/20 pb-4">{roleTitle}</h3>
        <div className="space-y-6 text-justify">
          {roles.map((role, idx) => (
            <p key={idx} className="text-lg text-[#2C1E16] font-medium leading-relaxed">
              <span className="text-[#8B4513] font-bold">{role.title}:</span> {role.desc}
            </p>
          ))}
          <div className="rounded-2xl border-l-4 border-[#4A5D23] bg-white/45 px-5 py-4">
            <p className="text-lg text-[#2C1E16] font-medium italic leading-relaxed">{roleQuote}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Concept;
