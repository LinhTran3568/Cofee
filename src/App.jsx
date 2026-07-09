import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import FallingBeans from './components/ui/FallingBeans';
import PageTransition from './components/ui/PageTransition';
import SectionTransition from './components/ui/SectionTransition';
import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Concept from './components/sections/Concept';
import ValueChain from './components/sections/ValueChain';
import Causes from './components/sections/Causes';
import StateRole from './components/sections/StateRole';
import Conclusion from './components/sections/Conclusion';

function App() {
  const sections = [
    { id: 'hero', component: <Hero /> },
    { id: 'story', component: <Story /> },
    { id: 'concept', component: <Concept /> },
    { id: 'valuechain', component: <ValueChain /> },
    { id: 'causes', component: <Causes /> },
    { id: 'state', component: <StateRole /> },
    { id: 'conclusion', component: <Conclusion /> },
  ];

  return (
    <div className="presentation-shell min-h-screen text-[#2C1E16] font-sans selection:bg-[#4A5D23] selection:text-white">
      <motion.div
        className="presentation-backdrop"
        animate={{
          scale: [1, 1.06, 1.02],
          x: ['0%', '-1.5%', '1%'],
          y: ['0%', '-1%', '1.5%'],
        }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <div className="presentation-overlay pointer-events-none">
        <div className="presentation-overlay-top" />
        <div className="presentation-overlay-glow" />
        <div className="presentation-overlay-grain" />
      </div>

      {/* Falling coffee beans particle effect */}
      <FallingBeans count={32} />

      {/* Navigation */}
      <Navbar />

      {/* Sections — each has its own id for nav */}
      <AnimatePresence>
        <PageTransition>
          <main className="relative z-10 pt-0 pb-20">
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                <SectionTransition id={section.id}>
                  {section.component}
                </SectionTransition>
                {index < sections.length - 1 && (
                  <div className="section-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </main>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
