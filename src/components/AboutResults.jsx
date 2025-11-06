import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Average ROAS', value: '3.8x' },
  { label: 'Qualified Leads', value: '10,000+' },
  { label: 'Ad Spend Managed', value: 'R30M+' },
  { label: 'Industries Served', value: '20+' },
];

const AboutResults = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0e13] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_10%_10%,rgba(255,59,59,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Mission & Expertise</h2>
            <p className="mt-4 text-neutral-300">
              We help South African businesses acquire customers at scale through intelligent social advertising. Our approach blends creative direction with rigorous data, so every Rand spent is an investment toward measurable growth.
            </p>
            <p className="mt-3 text-neutral-300">
              From local service providers to national commercial brands, we install systems that predictably generate leads and sales, backed by transparent reporting and continuous improvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold">Results that compound</h3>
            <p className="mt-2 text-sm text-neutral-300">A snapshot of performance across our portfolio.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <div className="text-2xl font-extrabold text-cyan-300">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-400">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutResults;
