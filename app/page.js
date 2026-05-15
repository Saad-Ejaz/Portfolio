import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SocialPresence from '@/components/SocialPresence';
import Collaborations from '@/components/Collaborations';
import Services from '@/components/Services';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <AboutSection />
      <SocialPresence />
      <Collaborations />
      <Services />
      <ContactFooter />
    </main>
  );
}
