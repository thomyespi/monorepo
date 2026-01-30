"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { es } from '../locales/es';
import { en } from '../locales/en';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string) => string;
    tData: <T>(path: string) => T;
}

const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    };

    const getTranslation = (path: string): unknown => {
        const keys = path.split('.');
        let current: unknown = translations[language];

        for (const key of keys) {
            if (current === null || typeof current !== 'object' || !(key in current)) {
                console.warn(`Translation key not found: ${path}`);
                return path;
            }
            current = (current as Record<string, unknown>)[key];
        }

        return current;
    };

    const t = (path: string): string => {
        const result = getTranslation(path);
        return typeof result === 'string' ? result : path;
    };

    const tData = <T extends unknown>(path: string): T => {
        return getTranslation(path) as T;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, tData }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
