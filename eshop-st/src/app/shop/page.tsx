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
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Premium Navbar */}
            <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                            ST
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase italic hidden md:block">
                            Soluciones Tecnológicas
                        </span>
                    </div>

                    <div className="flex-1 max-w-xl relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar materiales, iluminación, protección..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-3 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl transition-all group"
                        >
                            <ShoppingCart className="text-gray-600 group-hover:text-primary transition-colors" size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => router.push("/login")}
                            className="p-3 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl transition-all group text-gray-600 hover:text-red-600"
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
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Categorías</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-3",
                                        selectedCategory === cat
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "text-gray-600 hover:bg-white hover:shadow-sm"
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

                    <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                        <h4 className="font-bold text-primary mb-2">Soporte Técnico</h4>
                        <p className="text-xs text-primary/70 leading-relaxed font-medium">¿Dudas con la instalación? Contactanos por WhatsApp.</p>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-none">{selectedCategory}</h2>
                            <p className="text-gray-500 font-medium mt-1">{filteredProducts.length} productos encontrados</p>
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
                                    className="bg-white rounded-4xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                                >
                                    <div className="aspect-5/4 relative overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-black uppercase tracking-wider text-primary">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                                        <div className="flex items-center justify-between mt-4">
                                            <span className="text-2xl font-black text-gray-900">${product.price.toLocaleString()}</span>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="p-3 bg-gray-50 hover:bg-primary text-gray-400 hover:text-white rounded-2xl transition-all shadow-sm hover:shadow-primary/30 active:scale-90"
                                            >
                                                <Plus size={20} />
                                            </button>
                                        </div>
                                    </div>
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
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-60 flex flex-col"
                        >
                            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                                        <ShoppingCart size={20} />
                                    </div>
                                    <h2 className="text-xl font-black tracking-tighter uppercase">Tu Carrito</h2>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="p-2 hover:bg-white rounded-xl transition-colors text-gray-400 hover:text-gray-900"
                                >
                                    <LogOut className="rotate-180" size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                        <ShoppingCart size={64} className="mb-4" />
                                        <p className="font-bold text-lg">Tu carrito está vacío</p>
                                        <p className="text-sm">¡Comenzá a equipar tu obra!</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex gap-4 items-center group">
                                            <div className="w-20 h-20 bg-gray-100 rounded-2xl shrink-0 overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm text-gray-900 leading-tight mb-1">{item.name}</h4>
                                                <p className="text-sm font-black text-primary">${item.price.toLocaleString()}</p>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-lg flex items-center justify-center transition-all">
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-lg flex items-center justify-center transition-all">
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-3 text-gray-300 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            <div className="p-8 bg-gray-50/50 border-t border-gray-100 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-500 font-medium">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-2xl font-black text-gray-900">
                                        <span>Total</span>
                                        <span>${cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all">
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
