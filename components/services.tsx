'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Sedot WC',
      description: 'Penyedotan WC profesional untuk rumah, kantor, dan industri. Cepat dan tuntas.',
      image: '/layanan%20kami/sedot%20wc.png',
    },
    {
      id: 7,
      title: 'Penyedotan Septictank',
      description: 'Penyedotan lengkap septic tank dengan perawatan berkala.',
      image: '/layanan%20kami/sedot%20septitank.png',
    },
    {
      id: 3,
      title: 'Sedot Lumpur',
      description: 'Pembersihan lumpur dari kolam, parit, dan area kloset lainnya.',
      image: '/layanan%20kami/sedot%20lumpur.png',
    },
    {
      id: 4,
      title: 'Wastafel Mampet',
      description: 'Pembersihan dan perbaikan wastafel yang tersumbat dengan efisien.',
      image: '/layanan%20kami/westafel%20mampet.png',
    },
    {
      id: 5,
      title: 'Closet Mampet',
      description: 'Khusus mengatasi closet (toilet) yang tersumbat dengan teknologi terkini.',
      image: '/layanan%20kami/closet%20mampet.png',
    },
    {
      id: 6,
      title: 'Saluran Air Mampet',
      description: 'Pembersihan saluran air yang tersumbat dan tidak lancar.',
      image: '/layanan%20kami/saluran%20air%20mampet.png',
    },
    {
      id: 8,
      title: 'Cuci Tangki Air',
      description: 'Pembersihan dan desinfeksi tangki air untuk menjaga kualitas air.',
      image: '/layanan%20kami/sedot%20wc.png',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section id="layanan" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 dark:from-zinc-950 to-white dark:to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan penyedotan dan pembersihan profesional untuk memenuhi kebutuhan Anda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            return (
              <motion.div key={service.id} variants={item}>
                <Card className="h-full overflow-hidden hover:shadow-lg hover:border-green-600 transition-all duration-300 cursor-pointer group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex flex-col">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-6 pb-6 pt-3">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
