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
    dimensions,
    relations,
    roleTitle,
    roles,
    roleQuote,
    deepDiveTitle,
    deepDiveSubtitle,
    deepDiveIntroTitle,
    deepDiveIntroTheory,
    deepDiveIntroApply,
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

      <div className="max-w-7xl w-full mb-5">
        <p className="text-lg md:text-xl text-[#5C4033] font-medium">{actorsIntro}</p>
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
            <p className="text-sm uppercase tracking-[0.2em] text-[#8B4513] font-semibold mb-3">{actor.benefit}</p>
            <p className="text-[#5C4033] leading-relaxed">{actor.expression}</p>
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
            <div key={item} className="rounded-2xl bg-white/55 border border-white/50 p-5 text-[#4A3219] leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel-light p-8 rounded-2xl max-w-7xl w-full mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#2C1E16] mb-3">{deepDiveTitle}</h3>
        <p className="text-lg text-[#4A5D23] font-semibold mb-6">{deepDiveSubtitle}</p>
        <p className="text-xl font-bold text-[#8B4513] mb-4">{deepDiveIntroTitle}</p>
        <p className="text-lg text-[#2C1E16] leading-relaxed text-justify mb-4">{deepDiveIntroTheory}</p>
        <p className="text-lg text-[#5C4033] font-medium">{deepDiveIntroApply}</p>
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
              <p className="text-lg text-[#5C4033] leading-relaxed">{relations.theory}</p>
              <p className="text-lg text-[#2C1E16] font-medium leading-relaxed">
                <span className="text-[#4A5D23] font-bold block mb-2">Tính thống nhất (Cùng cần nhau):</span>
                {relations.unity}
              </p>
              <div className="h-[1px] w-full bg-[#2C1E16]/10"></div>
              <p className="text-lg text-[#2C1E16] font-medium leading-relaxed">
                <span className="text-[#8B4513] font-bold block mb-2">Tính mâu thuẫn (Tranh chấp phần bánh lợi nhuận):</span>
                {relations.conflict}
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
              <div className="rounded-2xl border-l-4 border-[#4A5D23] bg-white/45 px-5 py-4">
                <p className="text-lg text-[#2C1E16] font-medium italic leading-relaxed">{roleQuote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
