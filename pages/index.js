// app/page.js
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LightingSolutions from "../components/LightingSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ClientLogos from "../components/ClientLogos";
import PresenceNagpur from "../components/PresenceNagpur";

import AgencySection from "../components/AgencySection";
import BillboardAd from "../components/BillboardAd";
import HeroSectionWith3D from "../components/HeroSectionWith3D";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSectionWith3D />

      <AgencySection />
      <LightingSolutions />
      <WhyChooseUs />
      <ClientLogos />
      <Testimonials />

      <PresenceNagpur />

      <Footer />
      {/* Add more sections as needed */}
    </main>
  );
}
