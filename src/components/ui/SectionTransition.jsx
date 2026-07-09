import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 72,
    scale: 0.985,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

const SectionTransition = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      className="section-shell"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionVariants}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
};

export default SectionTransition;
