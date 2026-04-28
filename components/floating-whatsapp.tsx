'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(
      `${siteConfig.links.whatsapp}&text=${encodeURIComponent('Halo Dua Sodara Sedot WC')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 overflow-hidden rounded-full shadow-lg transition-all duration-300 cursor-pointer bg-white"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/WhatsApp_icon.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-full w-full object-cover"
        priority
      />
    </motion.button>
  );
};

export default FloatingWhatsApp;
