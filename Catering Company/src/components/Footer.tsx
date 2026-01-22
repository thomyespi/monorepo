import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-brand-cream py-12 border-t border-brand-forest/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Catering Company Logo"
                            width={140}
                            height={45}
                            className="h-10 w-auto brightness-0"
                        />
                    </div>
                    <span className="text-brand-gray text-sm font-medium" suppressHydrationWarning>
                        © {new Date().getFullYear()} Catering Company S.A.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
