import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import FeaturedBouquets from "@/components/FeaturedBouquets";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedBouquets />
      <Testimonials />
      <About />
      <CTABanner />
      <Contact />
    </div>
  );
}
