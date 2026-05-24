import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTABand from '@/components/CTABand';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <Projects />
        <Services />
        <Process />
        <CTABand />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
