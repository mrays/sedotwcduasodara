'use client';

import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Pekerjaan Sedot WC',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc.jpeg',
    },
    {
      id: 2,
      title: 'Armada Kami',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc1%20(1).jpg',
    },
    {
      id: 3,
      title: 'Perbaikan Saluran',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc1%20(2).jpg',
    },
    {
      id: 4,
      title: 'Tim Profesional',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc1%20(3).jpg',
    },
    {
      id: 5,
      title: 'Peralatan Modern',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc1%20(5).jpeg',
    },
    {
      id: 6,
      title: 'Hasil Kerja Kami',
      src: 'https://file.buatweb.cloud/supendi/imgfarisa/swc1%20(2).jpeg',
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 gap-3"
        >
          <span className="text-sm font-extrabold text-blue-700 tracking-[0.15em] uppercase">
            GALERI
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Galeri Pekerjaan Kami
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl font-medium mt-1">
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
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{image.title}</p>
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
          className="flex justify-center mt-12"
        >
          <button className="bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-700 hover:bg-blue-50 px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20">
            Lihat Semua Galeri &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
