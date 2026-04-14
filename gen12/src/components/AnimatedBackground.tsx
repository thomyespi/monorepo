import { cn } from "@/lib/utils";

export function AnimatedBackground({ className }: { className?: string }) {
    return (
        <div className={cn("fixed inset-0 -z-50 overflow-hidden bg-[#070e18]", className)}>
            {/* Dark Base Layer */}
            <div className="absolute inset-0 bg-[#070e18]" />

            {/* Static Radial Gradients — zero JS cost, GPU-composited */}
            <div
                className="absolute -top-[20%] -left-[20%] w-screen h-screen rounded-full pointer-events-none bg-orb-blue"
                style={{
                    background: 'radial-gradient(circle at center, rgba(30, 80, 180, 0.14) 0%, transparent 65%)',
                }}
            />
            <div
                className="absolute top-[20%] -right-[30%] w-screen h-screen rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.07) 0%, transparent 65%)',
                }}
            />

            {/* Fine Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(220,232,245,0.8) 1px, transparent 0)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-linear-to-b from-[#070e18]/90 via-transparent to-[#070e18]/90 pointer-events-none" />
        </div>
    );
}
