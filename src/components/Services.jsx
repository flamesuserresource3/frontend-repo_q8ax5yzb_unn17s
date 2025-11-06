import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Target, LineChart } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Facebook Ad Management',
    desc: 'Full-funnel campaigns with creative testing and real-time optimization to maximize ROAS.',
    points: ['Creative strategy & design', 'A/B testing & scaling', 'Daily performance monitoring'],
  },
  {
    icon: Target,
    title: 'Lead Generation Systems',
    desc: 'High-intent funnels that convert clicks into qualified leads — integrated with your CRM.',
    points: ['Form + Messenger flows', 'CRM & email integrations', 'Offer, landing page, nurturing'],
  },
  {
    icon: LineChart,
    title: 'Marketing Strategy',
    desc: 'Data-first planning with clear KPIs, dashboards, and growth experiments that compound.',
    points: ['Audience research', 'Attribution & tracking', 'Monthly insights & roadmaps'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0a0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Services built for outcomes</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">Simple, scalable packages that focus on growth — not vanity metrics.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/20">Start a project</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-red-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(0,196,204,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
