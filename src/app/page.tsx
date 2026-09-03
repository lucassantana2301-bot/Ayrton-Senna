import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import Timeline from "@/components/Timeline";
import CarsAndHelmets from "@/components/CarsAndHelmets";
import QuoteSlider from "@/components/QuoteSlider";
import InstitutoSenna from "@/components/InstitutoSenna";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-white selection:bg-senna-yellow selection:text-black">
      <Navbar />
      <Hero />
      <StatsCounter />
      <Timeline />
      <CarsAndHelmets />
      <QuoteSlider />
      <InstitutoSenna />
      <Footer />
    </main>
  );
}
