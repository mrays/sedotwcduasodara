'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from "sonner";
import { siteConfig } from '@/config/site';

const ContactSedotWC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Silakan isi semua kolom');
      return;
    }

    setIsSubmitting(true);

    const message = [
      'Halo, saya ingin menggunakan layanan Sedot WC Bebas Mampet.',
      '',
      `Nama: ${formData.name}`,
      `Email: ${formData.email}`,
      `No. Telepon: ${formData.phone}`,
      `Pesan: ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `${siteConfig.links.whatsapp}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    toast.success('Mengarahkan ke WhatsApp...');

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon / WhatsApp',
      content: siteConfig.phone,
      action: () => window.location.href = `tel:${siteConfig.phone}`,
    },
    {
      icon: Mail,
      title: 'Email',
      content: siteConfig.email,
      action: () => window.location.href = `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: 'Alamat',
      content: siteConfig.address,
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Buka 24 Jam Setiap Hari',
    },
  ];

  return (
    <section id="kontak" className="py-14 sm:py-20 lg:py-32 bg-gradient-to-b from-white dark:from-black to-gray-50 dark:to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"> Hubungi Kami
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau ingin menggunakan layanan kami? Hubungi kami sekarang juga dan tim profesional kami siap membantu Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <Card className="p-4 sm:p-6 bg-gray-50 dark:bg-zinc-900 border-0 hover:shadow-lg transition-shadow cursor-pointer" onClick={info.action}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                          <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-5 sm:p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nama Lengkap</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contoh@email.com"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nomor Telepon</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx-xxxx-xxxx"
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Pesan</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    rows={5}
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSedotWC;
