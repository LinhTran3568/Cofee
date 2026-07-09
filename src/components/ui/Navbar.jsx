import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Mở đầu' },
  { id: 'story', label: 'Câu chuyện' },
  { id: 'concept', label: 'Khái niệm' },
  { id: 'valuechain', label: 'Chuỗi giá trị' },
  { id: 'causes', label: 'Nguyên nhân' },
  { id: 'state', label: 'Nhà nước' },
  { id: 'conclusion', label: 'Kết luận' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const currentSection = sections.find(s => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (currentSection) setActive(currentSection.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="text-[#2C1E16] font-serif font-bold text-xl tracking-tight hover:text-[#4A5D23] transition-colors"
        >
          Chuỗi Cà Phê VN
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                active === s.id
                  ? 'text-white'
                  : 'text-[#2C1E16] hover:text-[#4A5D23]'
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-[#4A5D23] rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
