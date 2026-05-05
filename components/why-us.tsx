'use client';

import { motion, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Clock, CheckCircle, Zap, Tag } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: '24 Jam Non Stop',
      description: 'Layanan tersedia kapan saja, 24 jam setiap hari untuk kemudahan Anda.',
    },
    {
      icon: CheckCircle,
      title: 'Profesional & Berpengalaman',
      description: 'Tim ahli kami memiliki pengalaman bertahun-tahun di bidangnya.',
    },
    {
      icon: Zap,
      title: 'Armada Lengkap',
      description: 'Peralatan modern dan lengkap untuk menangani berbagai kebutuhan.',
    },
    {
      icon: Tag,
      title: 'Harga Terjangkau',
      description: 'Harga kompetitif dengan kualitas layanan terbaik di kelasnya.',
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
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
    <section className="py-14 sm:py-20 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Keunggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengapa Anda harus memilih Sedot WC Dua Sodara sebagai mitra layanan Anda?
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={item}>
                <Card className="p-6 sm:p-8 h-full hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-zinc-900 border-0">
                  <div className="mb-6 inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
