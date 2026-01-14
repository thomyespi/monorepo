"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ShoppingCart,
    User,
    LogOut,
    Plus,
    Minus,
    Trash2,
    Filter,
    Zap,
    Box,
    Lightbulb,
    ShieldCheck
} from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className={className}
        >
            <div style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
}

// Mock data for ST products
const PRODUCTS = [
    { id: 1, name: "Interruptor Termomagnético 2x32A", category: "Industria", price: 4500, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400" },
    { id: 2, name: "Panel LED 60x60 48W", category: "Iluminación", price: 8900, image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=400" },
    { id: 3, name: "Cable Unipolar 2.5mm 100m", category: "Materiales", price: 15400, image: "/products/cable.png" },
    { id: 4, name: "Diferencial Tetrapolar 40A", category: "Protección", price: 12800, image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=400" },
    { id: 5, name: "Caja de Paso Estanca 150x150", category: "Instalación", price: 2100, image: "/products/caja.png" },
    { id: 6, name: "Spot Embutir LED 7W Warm", category: "Iluminación", price: 1200, image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=400" },
];

export default function ShopPage() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [cart, setCart] = useState<{ id: number; name: string; price: number; image: string; quantity: number }[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const categories = ["Todas", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === "Todas" || p.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory]);

    const addToCart = (product: typeof PRODUCTS[0]) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
        });

        // High-tech confetti effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#a67c52', '#0a1120', '#d4b89a'],
            ticks: 200,
            gravity: 1.2,
            scalar: 0.8,
            shapes: ['circle']
        });

        setIsCartOpen(true);
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="min-h-screen bg-background flex flex-col text-foreground">
            {/* Premium Navbar */}
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/20">
                            ST
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase italic hidden md:block text-[#1a365d]">
                            Soluciones Tecnológicas
                        </span>
                    </div>

                    <div className="flex-1 max-w-xl relative group">
                        <div className={cn(
                            "absolute inset-0 bg-primary/10 blur-xl rounded-2xl transition-opacity duration-300",
                            search ? "opacity-100" : "opacity-0"
                        )} />
                        <div className="relative">
                            <Search className={cn(
                                "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                                search ? "text-primary animate-pulse" : "text-foreground/40"
                            )} size={20} />
                            <input
                                type="text"
                                placeholder="Buscar materiales, iluminación, protección..."
                                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all relative z-10 text-foreground placeholder:text-foreground/30 shadow-inner"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {search && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-10"
                                >
                                    <span className="text-[10px] font-black text-primary tracking-widest uppercase">Escaneando...</span>
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-3 bg-gray-100 hover:bg-white rounded-2xl transition-all group shadow-sm border border-transparent hover:border-gray-200"
                        >
                            <ShoppingCart className="text-foreground/60 group-hover:text-primary transition-colors" size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => router.push("/login")}
                            className="p-3 bg-gray-100 hover:bg-white rounded-2xl transition-all group text-foreground/40 hover:text-red-600 shadow-sm border border-transparent hover:border-gray-200"
                        >
                            <LogOut size={22} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
                {/* Sidebar Filters */}
                <aside className="hidden lg:block space-y-8">
                    <div>
                        <h3 className="text-xs font-black text-foreground/30 uppercase tracking-widest mb-6">Categorías</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "w-full text-left px-4 py-3 rounded-2xl text-sm font-black transition-all flex items-center gap-3",
                                        selectedCategory === cat
                                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                                            : "text-foreground/40 hover:bg-white hover:text-primary hover:shadow-lg"
                                    )}
                                >
                                    {cat === "Todas" && <Box size={18} />}
                                    {cat === "Industria" && <Zap size={18} />}
                                    {cat === "Iluminación" && <Lightbulb size={18} />}
                                    {cat === "Protección" && <ShieldCheck size={18} />}
                                    {cat === "Materiales" && <Filter size={18} />}
                                    {cat === "Instalación" && <Box size={18} />}
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20">
                        <h4 className="font-bold text-primary mb-2">Soporte Técnico</h4>
                        <p className="text-xs text-primary/70 leading-relaxed font-medium">¿Dudas con la instalación? Contactanos por WhatsApp.</p>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="space-y-8">
                    {/* Flash Sale Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative overflow-hidden bg-primary rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-primary/20"
                    >
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/30">Oferta Relámpago</span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none uppercase text-white">Hasta 40% OFF en Iluminación</h2>
                                <p className="text-white/80 font-medium max-w-sm">Renová tu empresa con lo último en tecnología LED industrial. Solo por hoy.</p>
                            </div>
                            <div className="flex gap-4">
                                {[
                                    { label: 'HORAS', value: timeLeft.hours },
                                    { label: 'MINS', value: timeLeft.minutes },
                                    { label: 'SEGS', value: timeLeft.seconds }
                                ].map((unit, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black mb-2 text-white shadow-xl">
                                            {unit.value.toString().padStart(2, '0')}
                                        </div>
                                        <span className="text-[10px] font-black tracking-widest opacity-60 uppercase text-white">{unit.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase leading-none">{selectedCategory}</h2>
                            <p className="text-foreground/40 font-bold mt-1">{filteredProducts.length} productos encontrados</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <TiltCard className="bg-white rounded-4xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group h-full">
                                        <div className="aspect-5/4 relative overflow-hidden bg-gray-50">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 shadow-lg rounded-full text-[10px] font-black uppercase tracking-wider text-primary">
                                                {product.category}
                                            </div>
                                            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                                <button className="px-6 py-2 bg-white text-primary rounded-xl font-black text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl">
                                                    Vista Rápida
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex flex-col">
                                                    <span className="text-2xl font-black text-foreground">${product.price.toLocaleString()}</span>
                                                    <span className="text-[10px] text-accent font-black">ENTREGA INMEDIATA</span>
                                                </div>
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="p-3 bg-gray-100 hover:bg-primary text-foreground/20 hover:text-white rounded-2xl transition-all shadow-sm hover:shadow-primary/30 active:scale-90"
                                                >
                                                    <Plus size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 px-4"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-white/5 shadow-2xl z-60 flex flex-col text-foreground"
                        >
                            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                        <ShoppingCart size={20} />
                                    </div>
                                    <h2 className="text-xl font-black tracking-tighter uppercase text-white">Tu Carrito</h2>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 hover:bg-slate-800 rounded-xl transition-colors text-foreground/40 hover:text-white"
                                >
                                    <LogOut className="rotate-180" size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                                        <ShoppingCart size={64} className="mb-4" />
                                        <p className="font-bold text-lg">Tu carrito está vacío</p>
                                        <p className="text-sm">¡Comenzá a equipar tu obra!</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex gap-4 items-center group">
                                            <div className="w-20 h-20 bg-slate-900 rounded-2xl shrink-0 overflow-hidden border border-white/5">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm text-white leading-tight mb-1">{item.name}</h4>
                                                <p className="text-sm font-black text-primary">${item.price.toLocaleString()}</p>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 bg-slate-900 hover:bg-slate-800 border border-white/5 rounded-lg flex items-center justify-center transition-all">
                                                        <Minus size={14} className="text-foreground/60" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center text-white">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 bg-slate-900 hover:bg-slate-800 border border-white/5 rounded-lg flex items-center justify-center transition-all">
                                                        <Plus size={14} className="text-foreground/60" />
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-3 text-foreground/20 hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="p-8 bg-slate-900/50 border-t border-white/5 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-foreground/40 font-medium">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-2xl font-black text-white">
                                        <span>Total</span>
                                        <span className="text-primary">${cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all">
                                    Finalizar Pedido (Demo)
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
