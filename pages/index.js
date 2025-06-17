// app/page.js

import Header from "../components/Header";
import LightingSolutions from "../components/LightingSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ClientLogos from "../components/ClientLogos";
import PresenceNagpur from "../components/PresenceNagpur";
import AgencySection from "../components/AgencySection";
import HeroSectionWith3D from "../components/HeroSectionWith3D";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSectionWith3D /> {/* We'll update this next to add the button */}
      <section id="agency">
        <AgencySection />
      </section>
      <section id="lighting">
        <LightingSolutions />
      </section>
      <WhyChooseUs />
      <ClientLogos />
      <Testimonials />
      <section id="presence">
        <PresenceNagpur />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
