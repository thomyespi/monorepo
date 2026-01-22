import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import fs from 'node:fs';
import path from 'node:path';

export default function Home() {
  // Read the public/clients directory
  const clientsDir = path.join(process.cwd(), 'public', 'clients');
  let logos: string[] = [];

  try {
    if (fs.existsSync(clientsDir)) {
      logos = fs.readdirSync(clientsDir).filter(file =>
        /\.(png|jpg|jpeg|svg|webp)$/i.test(file)
      );
    }
  } catch (error) {
    console.error('Error reading clients directory:', error);
  }

  return (
    <main className="relative min-h-screen bg-brand-cream">
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <Clients logos={logos} />
      <Contact />
      <Footer />
    </main>
  );
}

