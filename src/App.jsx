import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutResults from './components/AboutResults';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#090c10] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#090c10]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-[#ff3b3b] to-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-white">Solar Blaze Media</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#case-studies" className="hover:text-white">Results</a>
            <a href="#contact" className="rounded-md bg-[#ff3b3b] px-4 py-2 font-semibold text-white shadow-red-500/20 hover:shadow-lg">Get a Free Quote</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <AboutResults />
        <CaseStudies />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#090c10] py-10 text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Solar Blaze Media. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
