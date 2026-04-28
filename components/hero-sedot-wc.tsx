'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const HeroNew = () => {
  const [mounted, setMounted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array gambar slideshow - sesuaikan dengan nama file di folder public/
  const slides = [
    '/hero-1.png',
    '/hero-2.png',
    '/hero-3.png',
  ];

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleWhatsApp = () => {
    window.open(
      `${siteConfig.links.whatsapp}&text=${encodeURIComponent('Saya membutuhkan layanan sedot WC')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCall = () => {
    window.location.href = 'tel:085691135601';
  };

  const scrollToServices = () => {
    const element = document.getElementById('layanan');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Sedot WC{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Dua Sodara
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-700 mb-4"
          >
            Bersih, Cepat, Profesional
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
          >
            Kami adalah layanan penyedotan WC profesional terpercaya yang siap melayani kebutuhan Anda 24 jam setiap hari. Dengan tim berpengalaman dan peralatan modern, kami menjamin kepuasan pelanggan 100%.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold cursor-pointer gap-2"
              onClick={handleWhatsApp}
            >
              <MessageSquare className="w-5 h-5" />
              Hubungi Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold cursor-pointer gap-2"
              onClick={scrollToServices}
            >
              Lihat Layanan
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 px-6 py-3 rounded-full"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 font-semibold">24 Jam Siap Melayani</span>
          </motion.div>

          {/* Hero Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-14 md:mt-16 relative h-[240px] sm:h-72 md:h-96 lg:h-[500px] w-full rounded-xl sm:rounded-2xl border border-green-100 overflow-hidden shadow-lg bg-white"
          >
            {/* Slides */}
            {slides.map((slide, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0 p-3 sm:p-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: idx === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-contain sm:object-cover object-center"
                  loading="lazy"
                />
              </motion.div>
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Navigation Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-white w-6 sm:w-8'
                      : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-green-400">100%</div>
              <p className="text-slate-500 text-sm">Kepuasan Pelanggan</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">10+</div>
              <p className="text-slate-500 text-sm">Tahun Pengalaman</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">1000+</div>
              <p className="text-slate-500 text-sm">Pelanggan Puas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
