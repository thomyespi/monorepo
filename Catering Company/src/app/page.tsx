import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-cream">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

