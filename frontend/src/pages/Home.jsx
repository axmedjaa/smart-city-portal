import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      <div data-aos="fade-up">
        <FeaturesSection />
      </div>

      <div data-aos="fade-right">
        <HowItWorks />
      </div>

      <div data-aos="zoom-in">
        <StatsSection />
      </div>

      <div data-aos="fade-left">
        <WhyChooseUs />
      </div>

      <div data-aos="fade-up">
        <CTASection />
      </div>
    </main>
  );
};

export default Home;