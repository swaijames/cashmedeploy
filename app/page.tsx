
import { testimonials } from '../constant';
import Hero from '../components/Hero';
import JoinSection from "../components/JoinSection";
import FeatureSection1 from '../components/FeatureSection1';
import StatsSection from '../components/StatsSection';
import HowItsWork from '../components/HowItsWork';
import ScrollToTopButton from '../components/ScrollToTopButton';
import FeatureSection2 from '../components/FeatureSection2';
import ServiceSection from '../components/ServiceSection';
import ValueGood from '../components/ValueGood';
import TestimonialSection from '../components/TestimonialSection';
import OurPartners from '../components/OurPartners';
import OurTeam from '../components/OurTeam';
import Script from "next/script";

export default function Home() {
  return (
    <section>
      <Hero />
      <JoinSection />
      <FeatureSection1 />
      <StatsSection />
      <div id="how-its-work">
        <HowItsWork />
      </div>
      <FeatureSection2 />
      <ServiceSection />
      <ValueGood />
      <TestimonialSection testimonials={testimonials} />
      <OurPartners />
      <OurTeam />
      <ScrollToTopButton />
      <Script
        id="pixel-chaty"
        src="https://cdn.chaty.app/pixel.js?id=YWPQELSx"
        strategy="lazyOnload"
      />

    </section>
  );
}
