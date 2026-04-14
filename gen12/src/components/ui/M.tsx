"use client";

/**
 * M — Motion wrapper condicional
 * Desktop: renderiza Framer Motion con animaciones completas
 * Mobile:  renderiza elemento HTML nativo puro (cero overhead)
 */

import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { CSSProperties, ReactNode, ElementType } from "react";

type Tag = "div" | "section" | "span" | "h1" | "h2" | "h3" | "h4" | "p" | "ul" | "li" | "a";

interface MProps extends MotionProps {
    tag?: Tag;
    mobile: boolean;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    id?: string;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const motionElements: Record<Tag, ReturnType<typeof motion.create>> = {
    div:     motion.div,
    section: motion.section,
    span:    motion.span,
    h1:      motion.h1,
    h2:      motion.h2,
    h3:      motion.h3,
    h4:      motion.h4,
    p:       motion.p,
    ul:      motion.ul,
    li:      motion.li,
    a:       motion.a,
};

export function M({
    tag = "div",
    mobile,
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    whileHover,
    whileTap,
    className,
    style,
    children,
    id,
    href,
    target,
    rel,
    onClick,
}: MProps) {
    const htmlProps: Record<string, unknown> = { className, style, id, onClick };
    if (href !== undefined) htmlProps.href = href;
    if (target !== undefined) htmlProps.target = target;
    if (rel !== undefined) htmlProps.rel = rel;

    if (mobile) {
        const Tag = tag as ElementType;
        return <Tag {...htmlProps}>{children}</Tag>;
    }

    const MotionTag = motionElements[tag];
    return (
        <MotionTag
            {...htmlProps}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            whileHover={whileHover}
            whileTap={whileTap}
        >
            {children}
        </MotionTag>
    );
}
