import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real integration, POST to your backend or CRM here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0e13] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s build your growth engine</h2>
          <p className="mt-3 text-neutral-300">Tell us about your goals. We’ll come back with a clear plan and pricing.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-300">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-neutral-400 focus:border-cyan-400 focus:outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-300">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-neutral-400 focus:border-cyan-400 focus:outline-none" placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="company" className="block text-sm text-neutral-300">Company</label>
                <input id="company" name="company" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-neutral-400 focus:border-cyan-400 focus:outline-none" placeholder="Business name" />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm text-neutral-300">Project goals</label>
                <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-neutral-400 focus:border-cyan-400 focus:outline-none" placeholder="Tell us what success looks like"></textarea>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-[#ff3b3b] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/25 transition-transform hover:-translate-y-0.5 hover:shadow-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#0b0e13]">
                  Request Free Quote
                </button>
                <p className="text-sm text-neutral-400">Or email us directly at <a href="mailto:hello@solarblazemedia.co.za" className="text-cyan-300 underline underline-offset-4">hello@solarblazemedia.co.za</a></p>
              </div>
              {submitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-cyan-300">
                  Thanks! We’ll get back to you shortly.
                </motion.p>
              )}
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
                <Mail size={16} /> Response within 1 business day
              </div>
              <h3 className="text-xl font-bold">What you’ll get</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Custom strategy & pricing</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> ROAS-focused roadmap</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> Clear next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
