'use client';

import HeroNew from '@/components/hero-sedot-wc';
import Features from '@/components/why-us';
import Services from '@/components/services';
import Testimonials from '@/components/testimonials';
import Stats from '@/components/stats';
import Gallery from '@/components/gallery';
import CTABanner from '@/components/cta-banner';
import FAQSedotWC from '@/components/faq-sedot-wc';
import ContactSedotWC from '@/components/contact-sedot-wc';
import FooterSedotWC from '@/components/footer-sedot-wc';
import Header from '@/components/header';
import FloatingWhatsApp from '@/components/floating-whatsapp';

export default function Page() {
	return (
    <div className="min-h-screen bg-white text-slate-900">
			<Header />
      <HeroNew />
      <Features />
      <Services />
      <Testimonials />
      <Stats />
      <Gallery />
      <CTABanner />
      <FAQSedotWC />
      <ContactSedotWC />
      <FooterSedotWC />
      <FloatingWhatsApp />
		</div>		
	);
}
