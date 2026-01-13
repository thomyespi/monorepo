import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-transparent text-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary/20 rotate-6">
          <ShieldCheck className="text-white" size={48} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase mb-4">
          ST E-Shop
        </h1>
        <p className="text-xl text-gray-500 max-w-lg mb-12 font-medium">
          Bienvenido a la plataforma de gestión de materiales eléctricos para profesionales y empresas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/login"
            className="px-10 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Ir al Login
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
