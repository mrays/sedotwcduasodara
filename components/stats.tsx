'use client';

import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      number: 100,
      suffix: '%',
      label: 'Kepuasan Pelanggan',
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Layanan',
    },
    {
      number: 10,
      suffix: '+',
      label: 'Tahun Pengalaman',
    },
    {
      number: 1000,
      suffix: '+',
      label: 'Pelanggan',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-12"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={item} className="text-center">
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                  {stat.number}
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-slate-600 text-sm lg:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
