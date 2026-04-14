"use client";

import React, { createContext, useContext } from 'react';
import { es } from '../locales/es';

interface LanguageContextType {
    t: (path: string) => string;
    tData: <T>(path: string) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getTranslation = (path: string): unknown => {
    const keys = path.split('.');
    let current: unknown = es;
    for (const key of keys) {
        if (current === null || typeof current !== 'object' || !(key in current)) {
            return path;
        }
        current = (current as Record<string, unknown>)[key];
    }
    return current;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const t = (path: string): string => {
        const result = getTranslation(path);
        return typeof result === 'string' ? result : path;
    };

    const tData = <T extends unknown>(path: string): T => {
        return getTranslation(path) as T;
    };

    return (
        <LanguageContext.Provider value={{ t, tData }}>
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
