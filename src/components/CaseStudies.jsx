import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const cases = [
  {
    company: 'Harbour Gym Cape Town',
    result: '5.1x ROAS in 60 days',
    detail: 'Scaled from R15k to R80k monthly ad spend while reducing CPL by 34%.',
  },
  {
    company: 'Savanna Roofing Gauteng',
    result: '212 qualified leads in 90 days',
    detail: 'Geo-targeted offers and lead forms integrated to HubSpot for instant follow-up.',
  },
  {
    company: 'GreenFleet Logistics',
    result: '38% increase in B2B demos',
    detail: 'Retargeting + creative refresh delivered a lower CAC within 3 weeks.',
  },
];

const testimonials = [
  {
    name: 'Lerato M.',
    role: 'Operations Director, Savanna Roofing',
    quote:
      'The most transparent and effective agency we have worked with. Our phones ring every day and we can track everything.',
  },
  {
    name: 'Daniel P.',
    role: 'Founder, Harbour Gym',
    quote:
      'They turned our slow months into record sign-ups. Clear strategy, clean reporting, real results.',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative w-full bg-[#0a0d12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Case Studies & Testimonials</h2>
          <p className="mt-3 text-neutral-300">Real stories. Tangible outcomes. Confidence to scale.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-sm uppercase tracking-widest text-cyan-300">{c.result}</div>
              <h3 className="mt-2 text-xl font-bold">{c.company}</h3>
              <p className="mt-2 text-sm text-neutral-300">{c.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Quote className="mb-3 text-cyan-300" size={20} />
              <p className="text-neutral-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-neutral-400">— {t.name}, {t.role}</footer>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,59,59,0.18),transparent_60%)]" />
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
