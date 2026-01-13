import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FloatingContact from "@/components/FloatingContact";
import config from "@/content/config.json";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white transition-colors">
      <Navbar />
      <Hero />
      <Stats />
      <Values />
      <Gallery />
      <Testimonials />

      {/* Simple Contact / Footer Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8 italic tracking-tighter">Hablemos</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Expertos en soluciones integrales. Consultanos por presupuestos personalizados.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>{config.company.email}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span>{config.company.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>{config.company.address}</span>
              </div>
            </div>
          </div>

          <form className="bg-gray-800 p-8 rounded-3xl space-y-4 border border-gray-700 shadow-2xl">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-red-500 outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-red-500 outline-none transition-colors"
            />
            <textarea
              placeholder="¿Cómo podemos ayudarte?"
              rows={4}
              className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-red-500 outline-none transition-colors"
            ></textarea>
            <button
              className="w-full py-4 rounded-xl font-bold transition-all hover:brightness-110 active:scale-[0.98] text-white shadow-xl"
              style={{ backgroundColor: config.theme.primary }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-800 bg-gray-900 dark:bg-black text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {config.company.name}. Elevando el potencial tecnológico.</p>
      </footer>

      <FloatingContact />
    </main>
  );
}
