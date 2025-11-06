import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0d12] text-white" aria-label="Solar Blaze Media Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Non-blocking overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0d12]/60 via-[#0a0d12]/40 to-[#0a0d12]/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,196,204,0.18),transparent)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center sm:px-8 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs tracking-wide text-cyan-200 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" /> Growth-Focused • South Africa
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Solar Blaze Media
          <span className="block bg-gradient-to-r from-[#ff3b3b] via-red-500 to-cyan-400 bg-clip-text text-transparent">
            Data-Driven Facebook & Social Ads
          </span>
          for Local & Commercial Brands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg"
        >
          We build predictable lead systems that turn attention into revenue. Strategy, creative, and optimization—engineered for ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#ff3b3b] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/25 transition-transform hover:-translate-y-0.5 hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-base font-semibold text-cyan-100 backdrop-blur transition-colors hover:border-cyan-400/70 hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: 'ROI+', v: '3.8x Avg. ROAS' },
            { k: 'Leads', v: '10k+ Generated' },
            { k: 'Ad Spend', v: 'R30M+ Managed' },
            { k: 'Clients', v: 'SA Nationwide' },
          ].map((item) => (
            <div key={item.k} className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-left backdrop-blur-sm">
              <div className="text-xs uppercase tracking-widest text-neutral-400">{item.k}</div>
              <div className="mt-1 text-sm font-semibold text-white">{item.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
