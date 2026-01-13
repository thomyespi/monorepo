"use client";

import { motion } from "framer-motion";
import config from "@/content/config.json";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
    const section = config.sections.find(s => s.id === "testimonials") as { id: string, title: string, items: { name: string, role: string, text: string }[] } | undefined;

    return (
        <section id="testimonials" className="py-24 bg-gray-50 transition-colors">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{section?.title}</h2>
                    <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: config.theme.primary }} />
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className="pb-12"
                >
                    {section?.items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 relative">
                                <Quote
                                    className="absolute top-8 right-8 text-gray-100 w-16 h-16 -z-0"
                                    strokeWidth={4}
                                />
                                <p className="text-xl md:text-2xl italic mb-8 relative z-10" style={{ color: '#374151' }}>
                                    "{item.text}"
                                </p>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                        style={{ backgroundColor: config.theme.primary }}
                                    >
                                        {item.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold" style={{ color: '#111827' }}>{item.name}</h4>
                                        <p className="text-sm" style={{ color: '#6b7280' }}>{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
