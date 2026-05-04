'use client';

import { motion, Variants } from 'framer-motion';
import { siteConfig } from '@/config/site';

const services = [
  {
    id: 1,
    title: 'Sedot WC Rumah',
    description: 'Layanan sedot WC untuk rumah tinggal, cepat dan bersih.',
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg scale-110">
        {/* Drop shadow */}
        <ellipse cx="60" cy="85" rx="40" ry="6" fill="black" opacity="0.1"/>
        
        {/* House body */}
        <rect x="25" y="45" width="70" height="35" fill="#e2e8f0"/>
        <rect x="25" y="45" width="35" height="35" fill="#f1f5f9"/>
        
        {/* Roof */}
        <polygon points="15,48 60,15 105,48" fill="#1e40af"/>
        <polygon points="15,48 60,15 60,48" fill="#2563eb"/>
        
        {/* Chimney */}
        <rect x="35" y="25" width="10" height="15" fill="#1e40af"/>
        <rect x="33" y="22" width="14" height="4" fill="#0f172a"/>
        
        {/* Door */}
        <rect x="49" y="60" width="22" height="20" rx="2" fill="#1e3a8a"/>
        <circle cx="67" cy="70" r="2" fill="#fbbf24"/>
        
        {/* Windows */}
        <rect x="32" y="52" width="12" height="14" rx="1" fill="#60a5fa"/>
        <rect x="76" y="52" width="12" height="14" rx="1" fill="#3b82f6"/>
        
        {/* Trees */}
        <rect x="18" y="70" width="4" height="10" fill="#78350f"/>
        <ellipse cx="20" cy="62" rx="6" ry="10" fill="#22c55e"/>
        <rect x="98" y="70" width="4" height="10" fill="#78350f"/>
        <ellipse cx="100" cy="62" rx="6" ry="10" fill="#16a34a"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Sedot WC Kantor & Gedung',
    description: 'Solusi WC mampet untuk perkantoran, ruko, dan gedung.',
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg scale-110">
        {/* Drop shadow */}
        <ellipse cx="60" cy="85" rx="45" ry="6" fill="black" opacity="0.1"/>
        
        {/* Building main */}
        <rect x="35" y="20" width="50" height="60" fill="#e2e8f0"/>
        <rect x="35" y="20" width="25" height="60" fill="#f1f5f9"/>
        
        {/* Roof details */}
        <rect x="33" y="16" width="54" height="4" fill="#94a3b8"/>
        
        {/* Building windows grid */}
        {[0,1,2,3].map(row => [0,1,2].map(col => (
          <rect
            key={`${row}-${col}`}
            x={42 + col * 14}
            y={28 + row * 12}
            width="8"
            height="8"
            rx="1"
            fill={col === 0 ? "#60a5fa" : "#3b82f6"}
          />
        )))}
        
        {/* Door */}
        <rect x="52" y="66" width="16" height="14" rx="1" fill="#1e3a8a"/>
        
        {/* Side building */}
        <rect x="15" y="45" width="20" height="35" fill="#cbd5e1"/>
        <rect x="85" y="35" width="20" height="45" fill="#94a3b8"/>
        
        {/* Side windows */}
        {[0,1].map(row => (
          <rect key={`s1-${row}`} x="21" y={52 + row * 12} width="8" height="8" rx="1" fill="#60a5fa"/>
        ))}
        {[0,1,2].map(row => (
          <rect key={`s2-${row}`} x="91" y={42 + row * 12} width="8" height="8" rx="1" fill="#3b82f6"/>
        ))}
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sedot WC Restoran',
    description: 'Layanan khusus untuk restoran, kafe, dan tempat usaha kuliner.',
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg scale-110">
        {/* Drop shadow */}
        <ellipse cx="60" cy="85" rx="45" ry="6" fill="black" opacity="0.1"/>
        
        {/* Building */}
        <rect x="20" y="35" width="80" height="45" fill="#fef3c7"/>
        <rect x="20" y="35" width="40" height="45" fill="#fffbeb"/>
        
        {/* Sign board */}
        <rect x="25" y="22" width="70" height="13" rx="2" fill="#d97706"/>
        <rect x="27" y="24" width="66" height="9" rx="1" fill="#f59e0b"/>
        
        {/* Awning */}
        <path d="M15,35 Q20,45 25,35 Q30,45 35,35 Q40,45 45,35 Q50,45 55,35 Q60,45 65,35 Q70,45 75,35 Q80,45 85,35 Q90,45 95,35 Q100,45 105,35 L100,25 L20,25 Z" fill="#ef4444"/>
        <path d="M15,35 Q20,45 25,35 L20,25 Z" fill="#dc2626"/>
        <path d="M35,35 Q40,45 45,35 L40,25 L30,25 Z" fill="#dc2626"/>
        <path d="M55,35 Q60,45 65,35 L60,25 L50,25 Z" fill="#dc2626"/>
        <path d="M75,35 Q80,45 85,35 L80,25 L70,25 Z" fill="#dc2626"/>
        <path d="M95,35 Q100,45 105,35 L100,25 L90,25 Z" fill="#dc2626"/>
        
        {/* Window */}
        <rect x="28" y="50" width="24" height="18" rx="1" fill="#93c5fd"/>
        <line x1="40" y1="50" x2="40" y2="68" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="28" y1="59" x2="52" y2="59" stroke="#f59e0b" strokeWidth="2"/>
        
        {/* Right window */}
        <rect x="68" y="50" width="24" height="18" rx="1" fill="#60a5fa"/>
        <line x1="80" y1="50" x2="80" y2="68" stroke="#d97706" strokeWidth="2"/>
        <line x1="68" y1="59" x2="92" y2="59" stroke="#d97706" strokeWidth="2"/>
        
        {/* Door (Center) */}
        <rect x="52" y="48" width="16" height="32" fill="#78350f"/>
        <rect x="54" y="50" width="12" height="14" fill="#fde68a"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Sedot WC Industri',
    description: 'Menangani limbah industri dengan armada dan kapasitas besar.',
    icon: (
      <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg scale-110">
        {/* Drop shadow */}
        <ellipse cx="60" cy="85" rx="50" ry="6" fill="black" opacity="0.1"/>
        
        {/* Main factory building */}
        <rect x="20" y="50" width="80" height="30" fill="#64748b"/>
        <rect x="20" y="50" width="40" height="30" fill="#94a3b8"/>
        
        {/* Factory roof zigzag */}
        <polygon points="20,50 35,35 50,50" fill="#475569"/>
        <polygon points="20,50 35,35 35,50" fill="#64748b"/>
        
        <polygon points="50,50 65,35 80,50" fill="#475569"/>
        <polygon points="50,50 65,35 65,50" fill="#64748b"/>
        
        <polygon points="80,50 95,35 110,50" fill="#334155"/>
        <polygon points="80,50 95,35 95,50" fill="#475569"/>
        
        {/* Base extension */}
        <rect x="95" y="50" width="15" height="30" fill="#475569"/>
        
        {/* Chimneys */}
        <rect x="30" y="15" width="8" height="20" rx="1" fill="#cbd5e1"/>
        <rect x="45" y="20" width="8" height="15" rx="1" fill="#cbd5e1"/>
        <rect x="28" y="15" width="12" height="3" fill="#94a3b8"/>
        <rect x="43" y="20" width="12" height="3" fill="#94a3b8"/>
        
        {/* Windows factory */}
        {[0,1,2,3].map(col => (
          <rect key={col} x="28" y="60" width="12" height="12" rx="1" fill="#38bdf8" transform={`translate(${col * 16}, 0)`} />
        ))}
        
        {/* Industrial pipes/tanks */}
        <rect x="5" y="55" width="15" height="25" rx="2" fill="#1d4ed8"/>
        <rect x="5" y="55" width="7" height="25" rx="2" fill="#3b82f6"/>
        <rect x="8" y="50" width="8" height="5" fill="#1e3a8a"/>
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  const handleWhatsApp = () => {
    window.open(
      `${siteConfig.links.whatsapp}&text=${encodeURIComponent('Halo, saya ingin mengetahui lebih lanjut tentang layanan sedot WC')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="layanan" className="py-14 sm:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 gap-3"
        >
          <span className="text-sm font-extrabold text-blue-700 tracking-[0.15em] uppercase">
            LAYANAN KAMI
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Layanan Sedot WC Terlengkap
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl font-medium mt-1">
            Kami menyediakan berbagai layanan untuk kebutuhan Anda
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item} 
              className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 text-center border border-slate-100 flex flex-col items-center gap-3 sm:gap-5 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-full max-w-[100px] sm:max-w-[140px] aspect-square flex items-center justify-center mb-1 sm:mb-2">
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <h3 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-4"
        >
          <a 
            id="services-cta-button"
            href={`${siteConfig.links.whatsapp}&text=${encodeURIComponent('Halo, saya ingin mengetahui lebih lanjut tentang layanan sedot WC')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-700 hover:bg-blue-50 px-10 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/20"
          >
            Lihat Semua Layanan &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
