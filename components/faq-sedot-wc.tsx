'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { siteConfig } from '@/config/site';

const FAQSedotWC = () => {
  const faqs = [
    {
      question: 'Apakah Anda melayani 24 jam?',
      answer: 'Ya, kami melayani 24 jam setiap hari tanpa henti. Anda dapat menghubungi kami kapan saja baik siang maupun malam.',
    },
    {
      question: 'Bagaimana cara menghubungi Anda?',
      answer: 'Anda dapat menghubungi kami melalui WhatsApp, telepon, atau mengisi formulir kontak di website. Nomor kami adalah 087784003407.',
    },
    {
      question: 'Berapa harga layanan sedot WC?',
      answer: 'Harga kami kompetitif dan terjangkau. Untuk harga spesifik, silakan hubungi kami langsung karena harga dapat berbeda tergantung jenis dan lokasi pekerjaan.',
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk pekerjaan?',
      answer: 'Waktu pekerjaan bervariasi tergantung tingkat kesulitan dan jenis pekerjaan. Rata-rata pekerjaan sedot WC memerlukan waktu 30 menit hingga 2 jam.',
    },
    {
      question: 'Apakah Anda menjamin kepuasan pelanggan?',
      answer: 'Ya, kami menjamin kepuasan 100% kepada semua pelanggan kami. Jika ada masalah, kami siap melakukan perbaikan tanpa biaya tambahan.',
    },
    {
      question: 'Apakah tim Anda bersertifikat?',
      answer: 'Ya, semua tim kami berpengalaman dan terlatih secara profesional dalam menangani berbagai jenis pekerjaan penyedotan dan pembersihan.',
    },
    {
      question: 'Apakah Anda melayani area di luar kota?',
      answer: 'Kami melayani area yang luas. Untuk informasi lebih lanjut mengenai area layanan, silakan hubungi kami melalui telepon atau WhatsApp.',
    },
    {
      question: 'Apa yang harus saya lakukan sebelum tim datang?',
      answer: 'Pastikan area di sekitar WC atau septictank mudah diakses. Jika ada barang yang perlu dipindahkan, sebaiknya pindahkan terlebih dahulu untuk mempercepat proses pekerjaan.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban atas pertanyaan umum tentang layanan kami.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={item}>
                <AccordionItem
                  value={`item-${idx}`}
                  className="border border-gray-200 dark:border-zinc-800 rounded-lg px-6 bg-gray-50 dark:bg-zinc-900 transition-all hover:shadow-md"
                >
                  <AccordionTrigger className="py-4 text-left text-base font-semibold text-foreground hover:text-green-600 dark:hover:text-green-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Masih memiliki pertanyaan?
          </p>
          <button
            onClick={() => window.open(siteConfig.links.whatsapp, '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
          >
            Hubungi Kami Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSedotWC;
