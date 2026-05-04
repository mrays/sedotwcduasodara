'use client';

import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    location: 'Jakarta',
    quote: '"Pelayanan cepat, petugas ramah dan hasilnya bersih, WC langsung lancar tanpa bau. Recommended!"',
    avatar: '/avatars/avatar_andi.png',
    stars: 5,
  },
  {
    id: 2,
    name: 'Siti Aisyah',
    location: 'Bekasi',
    quote: '"Sudah langganan di sini, selalu on time dan harganya terjangkau. Mantap!"',
    avatar: '/avatars/avatar_siti.png',
    stars: 5,
  },
  {
    id: 3,
    name: 'Budi Santoso',
    location: 'Tangerang',
    quote: '"Armada lengkap dan tenaga kerja profesional. Untuk proyek besar sangat membantu."',
    avatar: '/avatars/avatar_budi.png',
    stars: 5,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 gap-3"
        >
          <span className="text-sm font-extrabold text-blue-700 tracking-[0.15em] uppercase">
            TESTIMONI
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Apa Kata Pelanggan Kami?
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-5 sm:gap-6 hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1.5">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed flex-grow text-[15px] font-medium">
                {testimonial.quote}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover bg-slate-100"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="font-extrabold text-slate-900">{testimonial.name}</span>
                  <span className="text-sm text-slate-500 font-medium">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
