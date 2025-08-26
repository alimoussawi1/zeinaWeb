import React, { useState, useRef, useLayoutEffect } from "react";

export default function TherapyProcessFlow() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const containerRef = useRef(null);
    const cardRefs = useRef({});
    const [lines, setLines] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    const steps = [
        { id: 1, title: "Initial Inquiry", description: "Reach out to schedule your first session", position: "top-left" },
        { id: 2, title: "Booking Your Appointment", description: "Select a time that works best for you", position: "top-center" },
        { id: 3, title: "Intake & Assessment", description: "Sharing about yourself and goals with your therapist", position: "top-right" },
        { id: 4, title: "Clarifying Your Needs", description: "Identify what you want to focus on in therapy", position: "mid-right" },
        { id: 5, title: "Personalized Plan", description: "Collaborate on strategies tailored to you", position: "bottom-right" },
        { id: 6, title: "Therapeutic Process", description: "Engage in ongoing sessions and explore progress", position: "bottom-center" },
        { id: 7, title: "Adjust & Adapt", description: "Your therapist helps refine approaches as needed", position: "bottom-left" },
        { id: 8, title: "Continued Support", description: "Build trust, practice skills, and trust the process towards growth", position: "mid-left", active: true },
    ];

    const getStepPosition = (position) => {
        switch (position) {
            case "top-left": return "col-start-1 row-start-1";
            case "top-center": return "col-start-2 row-start-1";
            case "top-right": return "col-start-3 row-start-1";
            case "mid-right": return "col-start-3 row-start-2";
            case "bottom-right": return "col-start-3 row-start-3";
            case "bottom-center": return "col-start-2 row-start-3";
            case "bottom-left": return "col-start-1 row-start-3";
            case "mid-left": return "col-start-1 row-start-2";
            case "center": return "col-start-2 row-start-2";
            default: return "";
        }
    };

    const connections = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 6 },
        { from: 6, to: 7 },
        { from: 7, to: 8 },
    ];

    // Mobile connections (sequential 1->2->3->4->5)
    const mobileConnections = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
    ];

    useLayoutEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const compute = () => {
            const root = containerRef.current;
            if (!root) return;
            const rootBox = root.getBoundingClientRect();
            const boxOf = (id) => cardRefs.current[id]?.getBoundingClientRect();
            const newLines = [];

            const currentConnections = isMobile ? mobileConnections : connections;

            for (const c of currentConnections) {
                const a = boxOf(c.from);
                const b = boxOf(c.to);
                if (!a || !b) continue;

                const aCenterX = a.left + a.width / 2;
                const bCenterX = b.left + b.width / 2;
                const aCenterY = a.top + a.height / 2;
                const bCenterY = b.top + b.height / 2;

                let x1, y1, x2, y2;

                if (isMobile) {
                    // For mobile, always connect from bottom of first card to top of next card
                    x1 = aCenterX - rootBox.left;
                    y1 = (a.bottom - rootBox.top);
                    x2 = bCenterX - rootBox.left;
                    y2 = (b.top - rootBox.top);
                } else {
                    if (Math.abs(aCenterY - bCenterY) < Math.abs(aCenterX - bCenterX)) {
                        // Horizontal
                        x1 = aCenterX - rootBox.left;
                        y1 = aCenterY - rootBox.top;
                        x2 = bCenterX - rootBox.left;
                        y2 = bCenterY - rootBox.top;
                    } else {
                        // Vertical
                        x1 = aCenterX - rootBox.left;
                        y1 = aCenterY - rootBox.top;
                        x2 = bCenterX - rootBox.left;
                        y2 = bCenterY - rootBox.top;
                    }
                }

                newLines.push({ x1, y1, x2, y2 });
            }
            setLines(newLines);
        };

        compute();
        window.addEventListener("resize", compute);
        const ro = new ResizeObserver(compute);
        if (containerRef.current) ro.observe(containerRef.current);
        Object.values(cardRefs.current).forEach((el) => el && ro.observe(el));

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("resize", compute);
            ro.disconnect();
        };
    }, [isMobile]);

    // Mobile layout component
    const MobileLayout = () => (
        <div className="flex flex-col items-center space-y-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-light text-[#8B7355] mb-8 text-center">
                What to <em className="italic">Expect</em>
            </h2>

            {steps.slice(0, 5).map((step, index) => (
                <div key={step.id} className="relative w-full">
                    <div
                        ref={(el) => (cardRefs.current[step.id] = el)}
                        className="relative flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                    >
                        <div
                            className={`w-full bg-white rounded-lg p-6 shadow-sm border transition-all duration-300 ${hoveredStep === step.id ? "shadow-md border-[#8B9A6B]/30" : "border-gray-100"
                                }`}
                        >
                            <h3 className="font-semibold text-[#8B7355] text-lg mb-3 leading-tight">
                                {step.id}. {step.title}
                            </h3>
                            <p className="text-[#7A8A5A] text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>

                    {/* Arrow pointing down (except for last item) */}
                    {index < 4 && (
                        <div className="flex justify-center my-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#8B7355]">
                                <path
                                    fill="currentColor"
                                    d="M12 2L12 20M12 20L18 14M12 20L6 14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    // Desktop layout component
    const DesktopLayout = () => (
        <div
            ref={containerRef}
            className="relative grid grid-cols-3 grid-rows-3 gap-8 max-w-5xl mx-auto place-items-center"
        >
            {/* SVG connectors */}
            <svg
                className="pointer-events-none absolute inset-0"
                width="100%"
                height="100%"
                viewBox={`0 0 ${containerRef.current?.clientWidth || 0} ${containerRef.current?.clientHeight || 0}`}
                preserveAspectRatio="none"
            >
                {lines.map((l, i) => (
                    <line
                        key={i}
                        x1={l.x1}
                        y1={l.y1}
                        x2={l.x2}
                        y2={l.y2}
                        stroke="#8B7355"
                        strokeWidth="3"
                        markerEnd="url(#arrowhead)"
                    />
                ))}
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="5"
                        refY="5"
                        orient="auto"
                        fill="#8B7355"
                    >
                        <path d="M0,0 L10,5 L0,10 z" />
                    </marker>
                </defs>
            </svg>

            {/* Steps */}
            {steps.map((step) => (
                <div
                    key={step.id}
                    ref={(el) => (cardRefs.current[step.id] = el)}
                    className={`${getStepPosition(step.position)} relative flex flex-col items-center text-center group cursor-pointer transition-all duration-300`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    <div
                        className={`w-full max-w-[260px] bg-white rounded-lg p-6 shadow-sm border transition-all duration-300 ${hoveredStep === step.id ? "shadow-md border-[#8B9A6B]/30" : "border-gray-100"
                            }`}
                    >
                        <h3 className="font-semibold text-[#8B7355] text-lg mb-3 leading-tight">
                            {step.id}. {step.title}
                        </h3>
                        <p className="text-[#7A8A5A] text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}

            {/* Center label */}
            <div className={`${getStepPosition("center")} flex items-center justify-center text-center`}>
                <h2 className="text-2xl sm:text-3xl font-light text-[#8B7355]">
                    What to <em className="italic">Expect</em>
                </h2>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f6f4f0] py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {isMobile ? <MobileLayout /> : <DesktopLayout />}
            </div>
        </div>
    );
}