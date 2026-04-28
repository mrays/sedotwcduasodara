'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

const CTABanner = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.links.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-green-50 via-white to-green-50 border-y border-green-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Butuh Sedot WC Sekarang?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang juga dan dapatkan layanan profesional dalam waktu singkat. Tim kami siap melayani Anda 24/7.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 font-semibold cursor-pointer gap-2"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50 font-semibold cursor-pointer gap-2"
              onClick={() => window.location.href = `tel:${siteConfig.phone}`}
            >
              <Phone className="w-5 h-5" />
              Hubungi {siteConfig.phone}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
