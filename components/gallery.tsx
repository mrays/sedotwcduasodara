'use client';

import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Pekerjaan Sedot WC',
      src: '/galeri/gallery1.jpeg',
    },
    {
      id: 2,
      title: 'Armada Kami',
      src: '/galeri/gallery2.jpeg',
    },
    {
      id: 3,
      title: 'Perbaikan Saluran',
      src: '/galeri/gallery3.jpeg',
    },
    {
      id: 4,
      title: 'Tim Profesional',
      src: '/galeri/gallery1.jpeg',
    },
    {
      id: 5,
      title: 'Peralatan Modern',
      src: '/galeri/gallery2.jpeg',
    },
    {
      id: 6,
      title: 'Hasil Kerja Kami',
      src: '/galeri/gallery3.jpeg',
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
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white dark:from-black to-gray-50 dark:to-zinc-950">
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
            Galeri Pekerjaan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi lengkap hasil kerja profesional kami untuk kepercayaan Anda.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
            Lihat Semua Galeri
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
