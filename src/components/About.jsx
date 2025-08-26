// About.jsx
import React from "react";
import AboutWelcome from "./AboutWelcome";
import TherapyProcessFlow from "./AboutUs";

// Optional: pass an image to AboutWelcome via props
// import heroImg from "../assets/your-image.jpg";

export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#f5f1ea] to-[#f2ede4]">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-16">
                {/* Hero / Intro */}
                <AboutWelcome
                    // imageSrc={heroImg}
                    imageAlt="Therapeutic, calming setting"
                    className="shadow-sm"
                />

                {/* What to Expect flow */}
                <section aria-labelledby="what-to-expect">
                    <h2 id="what-to-expect" className="sr-only">
                        What to Expect
                    </h2>
                    <TherapyProcessFlow />
                </section>
            </div>
        </main>
    );
}
