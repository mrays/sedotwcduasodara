'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/config/site';

const FooterSedotWC = () => {
  const year = new Date().getFullYear();

  const links = {
    layanan: ['Sedot WC', 'Sedot Limbah', 'Sedot Lumpur', 'Cuci Tangki Air'],
    informasi: ['Tentang Kami', 'Blog', 'FAQ', 'Kontak'],
    lainnya: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Sitemap']
  };

  return (
    <footer className="bg-white relative overflow-hidden text-slate-700 border-t border-slate-200">
      {/* Top Section */}
      <div className="container px-4 sm:px-6 mx-auto pt-14 pb-6 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">
                {siteConfig.name}
              </h2>
              <p className="text-sm text-slate-500 mt-1">Sedot WC</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Layanan penyedotan WC profesional, cepat, dan terpercaya tersedia 24 jam setiap hari untuk memenuhi kebutuhan Anda.
            </p>
          </motion.div>

          {/* Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 text-base mb-4">Layanan</h3>
            <ul className="text-sm space-y-2">
              {links.layanan.map((item, idx) => (
                <li key={idx}>
                    <a href="#" className="text-slate-600 hover:text-green-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 text-base mb-4">Informasi</h3>
            <ul className="text-sm space-y-2">
              {links.informasi.map((item, idx) => (
                <li key={idx}>
                    <a href="#" className="text-slate-600 hover:text-green-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-slate-900 text-base mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.phone}`} className="text-slate-600 hover:text-green-600 transition-colors">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:${siteConfig.phoneSecondary}`} className="text-slate-600 hover:text-green-600 transition-colors">
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600 transition-colors break-all">
                  {siteConfig.website}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">
                  {siteConfig.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">
                  24 Jam / 7 Hari
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-slate-200" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {year} {siteConfig.name}. Semua hak dilindungi.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-600 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-green-600 transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSedotWC;
