"use client";

import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    disableFormatting?: boolean;
}

const AnimatedNumber = ({ value, duration = 2000, disableFormatting = false }: AnimatedNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
    });

    const displayValue = useTransform(springValue, (latest) => {
        const floored = Math.floor(latest);
        return disableFormatting ? floored.toString() : floored.toLocaleString();
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return displayValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest;
            }
        });
    }, [displayValue]);

    return <span ref={ref}>0</span>;
};

export default AnimatedNumber;
