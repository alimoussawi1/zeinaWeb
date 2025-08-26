
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Privacy from "./components/Privacy";
import Partner from "./components/Partner";
import ScrollToTop from "./components/ScrollToTop";
import DefaultLayout from "./layouts/DeaultLayout";
import News from "./components/News";
import React, { useState, useEffect } from 'react';
import recreoLogo from "./assets/recreo.png"
import Gallery from "./components/Gallery";
import RegistrationForm from "./components/BookingSession";
import ServicesSection from "./components/Services";
import Insights from "./components/Insights";
import TherapyProcessFlow from "./components/AboutUs";
import About from "./components/About";
import zeinalogo from "./assets/zeina.png"
import ConditionsMarquee from "./components/Bubbles";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#f5f1ea] to-[#f2ede4] overflow-hidden">
      {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
          <defs>
            <pattern id="organic-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M50,20 C80,10 120,30 150,50 C170,70 160,100 140,120 C120,140 90,135 70,120 C50,105 30,80 35,60 C40,40 50,20 50,20 Z" fill="currentColor" opacity="0.3" />
              <path d="M30,80 C60,85 90,105 110,130 C130,155 125,185 105,200 C85,215 55,210 35,195 C15,180 5,150 10,130 C15,110 30,90 30,80 Z" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)" className="text-[#8B9A6B]" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#8B9A6B]/20 to-[#7A8A5A]/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-gradient-to-tr from-[#C8B99C]/30 to-[#B5A888]/20 blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full bg-gradient-to-bl from-[#8B9A6B]/15 to-transparent blur-md animate-pulse delay-500"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8  pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12 lg:gap-20">

          {/* Left Side - Professional Photo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Photo Container with Elegant Border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B9A6B]/20 to-[#7A8A5A]/10 blur-sm transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-2 rounded-full bg-white shadow-2xl">
                  <img
                    src={zeinalogo}
                    alt="Zeina Laham - Professional Psychologist"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                {/* Decorative Ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-[#8B9A6B]/30 animate-pulse"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg border border-[#8B9A6B]/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <div className="text-xs font-semibold text-[#8B9A6B]"> Clinical Psychologist</div>
                {/* <div className="text-xs text-gray-600">TLLP</div> */}
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-light text-[#8B7355] leading-tight font-baloo">
                Zeina Laham
              </h1>
            </div>


            {/* Professional Title */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-px bg-[#8B9A6B]"></div>
                <p className="text-sm font-semibold tracking-widest text-[#8B9A6B] uppercase">
                  Licensed Clinical Psychologist - TLLP
                </p>
                <div className="w-12 h-px bg-[#8B9A6B]"></div>
              </div>

              <p className="text-lg text-[#7A8A5A] font-medium tracking-wide">
                Mission
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Taking the first step toward support can feel overwhelming. I provide compassionate, culturally sensitive therapy to help you navigate life’s challenges and build a more fulfilling future. Through evidence-based techniques and a warm, client-centered approach, I create a safe space for healing, growth, and self-discovery.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Humanistic', 'Cognitive Behavioral Therapy', 'Trauma-Informeed Care', 'Person-Centered Therapy'].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/80 rounded-full text-sm text-[#8B9A6B] font-medium shadow-sm border border-[#8B9A6B]/20 hover:bg-[#8B9A6B]/10 transition-colors duration-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button
                className="group bg-[#8B9A6B] hover:bg-[#7A8A5A] text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() =>
                  window.open(
                    "https://calendly.com/zeina-acp/30min?month=2025-08",
                    "_blank"
                  )
                }
              >
                <span className="flex items-center gap-3">
                  Schedule a Consultation
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>


              <p className="text-sm text-gray-500 mt-3">
                Schedule a <span className="font-bold"> FREE</span> 15 mins consultation call
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-2">

        <h2 className="text-2xl sm:text-3xl font-light text-[#8B7355]">
          What we <em className="italic">Treat</em>
        </h2>

      </div>
      <div >
        <ConditionsMarquee />

      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 200" className="w-full h-20 fill-white/50">
          <path d="M0,100 C300,50 600,150 1200,100 L1200,200 L0,200 Z" />
        </svg>
      </div>
    </section>
  );
};


function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/login");
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      x: -200,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: 200,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <div className="flex flex-col min-h-screen ">

      <ScrollToTop />
      {/* Main content area */}
      <div className={`flex-grow`}>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <HeroSection />
                  </motion.div>

                </DefaultLayout>

              }
            />
            <Route
              path="/services"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <ServicesSection />
                  </motion.div>

                </DefaultLayout>

              }
            />
            <Route
              path="/insights"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Insights />
                  </motion.div>

                </DefaultLayout>

              }
            />

            <Route
              path="/activities"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Partner />
                  </motion.div>
                </DefaultLayout>
              }
            />
            <Route
              path="/gallery"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Gallery />
                  </motion.div>
                </DefaultLayout>
              }
            />


            <Route
              path="/about-us"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <About />
                  </motion.div>
                </DefaultLayout>
              }

            />

            <Route
              path="/book-session"
              element={
                <DefaultLayout>


                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <RegistrationForm />
                  </motion.div>
                </DefaultLayout>
              }
            />

            <Route
              path="/privacy"
              element={
                <DefaultLayout>


                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Privacy />
                  </motion.div>
                </DefaultLayout>
              }
            />

            <Route
              path="/about-us"
              element={
                <DefaultLayout>
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <News />

                  </motion.div>
                </DefaultLayout>
              }
            />













          </Routes>
        </AnimatePresence>




      </div>


    </div>
  );
}

export default App;
