'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, Users, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

const HeroNew = () => {
  const handleWhatsApp = () => {
    window.open(
      `${siteConfig.links.whatsapp}&text=${encodeURIComponent('Halo, saya membutuhkan layanan sedot WC')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background-baru.png"
          alt="Armada Sedot WC"
          aria-hidden="true"
          className="w-full h-full object-cover object-[75%_center] lg:object-right"
        />
        {/* Soft gradient to ensure text readability if the image has dark spots on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-white/50 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-2xl flex flex-col gap-5 lg:gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block text-sm lg:text-base font-bold text-blue-600 tracking-wider uppercase">
              JASA SEDOT WC PROFESIONAL
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 leading-[1.15]"
          >
            WC Mampet?<br />
            <span className="text-blue-600 block mt-2">
              Kami Siap Mengatasi!
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-medium mt-2"
          >
            Layanan sedot WC cepat, bersih, dan profesional.
            Siap melayani 24 jam untuk rumah, kantor, restoran,
            hingga industri.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button 
              className="inline-flex items-center justify-center gap-2.5 bg-[#0e5bc5] hover:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1 text-base min-w-[200px]" 
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 fill-current" />
              {siteConfig.phone}
            </button>
            <button 
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50 text-[#0e5bc5] border-2 border-blue-200 px-8 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1 text-base min-w-[200px]" 
              onClick={handleWhatsApp}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat WhatsApp
            </button>
          </motion.div>

          {/* Feature Badges - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-row flex-wrap items-center gap-6 md:gap-10 mt-6 pt-2"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#0e5bc5]">
                <Clock className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-slate-800 leading-snug">24 Jam</span>
                <span className="text-[12px] text-slate-500 font-medium">Siap Melayani</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-[#0e5bc5]">
                <Users className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-slate-800 leading-snug">Tim Profesional</span>
                <span className="text-[12px] text-slate-500 font-medium">&amp; Berpengalaman</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-[#0e5bc5]">
                <Shield className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-slate-800 leading-snug">Peralatan Modern</span>
                <span className="text-[12px] text-slate-500 font-medium">&amp; Higienis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
