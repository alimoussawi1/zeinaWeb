// AboutWelcome.jsx
import React from "react";
import { Quote, HeartHandshake, Sparkles } from "lucide-react";
import imageSrc from "../assets/chair.jpeg"

export default function AboutWelcome({

    imageAlt = "Therapy setting",
    className = "",
}) {
    return (
        <section
            className={`relative overflow-hidden rounded-3xl border border-[#8B9A6B]/20 bg-gradient-to-br from-[#f8f5f0] via-[#f5f1ea] to-[#f2ede4] ${className}`}
        >
            {/* soft organic backdrop */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <svg viewBox="0 0 1200 800" className="h-full w-full">
                    <defs>
                        <pattern id="organic" x="0" y="0" width="220" height="220" patternUnits="userSpaceOnUse">
                            <path d="M50,20 C80,10 120,30 150,50 C170,70 160,100 140,120 C120,140 90,135 70,120 C50,105 30,80 35,60 Z" fill="#8B9A6B" />
                            <path d="M30,80 C60,85 90,105 110,130 C130,155 125,185 105,200 C85,215 55,210 35,195 Z" fill="#8B7355" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#organic)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 sm:px-8 md:grid-cols-2 md:py-14">
                {/* Text */}
                <div className="flex flex-col justify-center">
                    {/* chips */}

                    <h2 className="text-3xl leading-tight text-[#8B7355] sm:text-4xl">
                        <span className="italic font-light">Creating space</span>{" "}
                        for you to feel <span className="font-semibold">heard</span>,{" "}
                        <span className="font-semibold">seen</span>, and{" "}
                        <span className="font-semibold">valued</span>—one step at a time!
                    </h2>

                    <div className="mt-6 rounded-2xl border border-[#8B9A6B]/20 bg-white/80 p-5 shadow-sm">
                        <Quote className="mb-3 h-5 w-5 text-[#8B9A6B]" />
                        <p className="mb-3 text-[#7A8A5A]">
                            I’m glad you’re here! Reaching out for support is never easy, and I want to
                            acknowledge the courage it takes. My role is to walk alongside you as you move
                            toward a healthier, more balanced state of well-being.
                        </p>
                        <p className="mb-3 text-[#7A8A5A]">
                            With years of experience in the mental and behavioral health field, I take a
                            non-medicinal approach that emphasizes alternative psychotherapy practices,
                            which always focuses on healing and growth.
                        </p>
                        <p className="mb-3 text-[#7A8A5A]">
                            I’ve had the privilege of working with individuals from diverse backgrounds,
                            each with unique challenges and strengths. This has deepened my ability to
                            provide care that is both effective and culturally sensitive. With the duality of existing
                            in various cultural environments, I understand the importance of
                            honoring each person’s story, experiences, and identity.
                        </p>
                        <p className="text-[#7A8A5A]">
                            Together, we will create a space that respects your background, empowers your
                            choices, and supports your journey. I look forward to getting to know you and
                            being part of your path to well-being!
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex items-center justify-center">
                    <div className="relative w-full max-w-[520px]">
                        <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-[#8B9A6B]/20" />
                        <div className="absolute -right-6 -bottom-6 h-10 w-10 rounded-full bg-[#C8B99C]/30" />

                        <div className="overflow-hidden rounded-3xl border border-[#8B9A6B]/30 bg-white shadow-md">
                            {imageSrc ? (
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="h-full w-full object-cover sm:h-[520px] md:h-[800px]"
                                />
                            ) : (
                                <div className="flex h-[360px] w-full items-center justify-center bg-[#f8f5f0] text-sm text-[#8B7355] sm:h-[420px]">
                                    (Insert image)
                                </div>
                            )}
                        </div>

                        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#8B9A6B]/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
