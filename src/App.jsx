import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/ui/Navbar';
import FallingBeans from './components/ui/FallingBeans';
import PageTransition from './components/ui/PageTransition';
import Hero from './components/sections/Hero';
import Story from './components/sections/Story';
import Concept from './components/sections/Concept';
import ValueChain from './components/sections/ValueChain';
import Causes from './components/sections/Causes';
import StateRole from './components/sections/StateRole';
import Conclusion from './components/sections/Conclusion';

function App() {
  return (
    <div className="bg-parallax min-h-screen text-[#2C1E16] font-sans selection:bg-[#4A5D23] selection:text-white">
      {/* Frosted glass overlay for readability */}
      <div className="fixed inset-0 bg-white/65 pointer-events-none z-0"></div>

      {/* Falling coffee beans particle effect */}
      <FallingBeans count={20} />

      {/* Navigation */}
      <Navbar />

      {/* Sections — each has its own id for nav */}
      <AnimatePresence>
        <PageTransition>
          <main className="relative z-10 pt-0">
            <section id="hero"><Hero /></section>
            <section id="story"><Story /></section>
            <section id="concept"><Concept /></section>
            <section id="valuechain"><ValueChain /></section>
            <section id="causes"><Causes /></section>
            <section id="state"><StateRole /></section>
            <section id="conclusion"><Conclusion /></section>
          </main>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
