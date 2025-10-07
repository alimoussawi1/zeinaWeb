import React from 'react';
import { Mail, Phone, Globe, Youtube, Instagram, Linkedin } from 'lucide-react';
import zeinalogo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#faf5ee] text-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 400" className="w-full h-full">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M40,30 C60,25 80,35 90,50 C95,65 85,80 70,85 C55,90 40,85 35,70 C30,55 35,40 40,30 Z" fill="#8B9A6B" opacity="0.3" />
              <circle cx="100" cy="100" r="15" fill="#8B9A6B" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">


          {/* Credentials Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-[#8B9A6B]/20 pb-2">
              Professional Credentials
            </h4>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B9A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">Clinical Psychologist </p>
                  <p className="text-gray-600 text-sm">TLLP</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#8B9A6B] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">Evidence-Based Practice</p>
                  <p className="text-gray-600 text-sm">Specialized Therapeutic Approaches</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-[#8B9A6B]/20 pb-2">
              Contact Information
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:zeina.acp@gmail.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-[#8B9A6B] transition-colors duration-300 group"
              >
                <div className="p-2 bg-[#8B9A6B]/10 rounded-lg group-hover:bg-[#8B9A6B]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#8B9A6B]" />
                </div>
                <span className="text-sm">zeina.acp@gmail.com</span>
              </a>

              <a
                href="tel:+13132662374"
                className="flex items-center space-x-3 text-gray-700 hover:text-[#8B9A6B] transition-colors duration-300 group"
              >
                <div className="p-2 bg-[#8B9A6B]/10 rounded-lg group-hover:bg-[#8B9A6B]/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#8B9A6B]" />
                </div>
                <span className="text-sm">+1 (313) 451-9568</span>
              </a>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-[#8B9A6B]/10 rounded-lg">
                  <Globe className="w-4 h-4 text-[#8B9A6B]" />
                </div>
                <span className="text-sm">Serving you from the comfort of your home</span>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-[#8B9A6B]/20 pb-2">
              Connect With Us
            </h4>

            {/* Social Media Links */}
            <div className="space-y-4">
              <p className="text-gray-600 text-sm mb-3">Follow for mental health resources:</p>

              <div className="flex flex-col space-y-3">
                <a
                  href="https://www.youtube.com/@Destresswithzee"
                  className="flex items-center space-x-3 text-gray-700 hover:text-red-600 transition-colors duration-300 group"
                  aria-label="YouTube Channel"
                >
                  <div className="p-2 bg-[#8B9A6B]/10 rounded-lg group-hover:bg-red-100 transition-colors duration-300">
                    <Youtube className="w-4 h-4 text-[#8B9A6B] group-hover:text-red-600" />
                  </div>
                  <span className="text-sm">YouTube Channel</span>
                </a>

                <a
                  href="https://www.instagram.com/destresswith.zee?igsh=YW16ZzZiYmJhN2F4&utm_source=qr"
                  className="flex items-center space-x-3 text-gray-700 hover:text-pink-600 transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <div className="p-2 bg-[#8B9A6B]/10 rounded-lg group-hover:bg-pink-100 transition-colors duration-300">
                    <Instagram className="w-4 h-4 text-[#8B9A6B] group-hover:text-pink-600" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/zeina-laham-975aa5202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <div className="p-2 bg-[#8B9A6B]/10 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <Linkedin className="w-4 h-4 text-[#8B9A6B] group-hover:text-blue-600" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <footer className="mt-16 border-t border-[#8B9A6B]/20 bg-gradient-to-b from-white to-[#f7f9f6] dark:from-neutral-900 dark:to-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            {/* top: brand + quick meta */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              {/* brand block */}
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  © 2025 <span className="font-semibold tracking-wide text-[#6f7c52]">Zeina Laham Psychology</span> PLLC . All rights reserved.
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#8B9A6B]/10 text-[#586441] px-3 py-1 text-xs font-medium">
                    <svg className="mr-1.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                    </svg>
                    Confidential mental health services
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#8B9A6B]/10 text-[#586441] px-3 py-1 text-xs font-medium">
                    <svg className="mr-1.5 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 1l3 5 5 .5-3.8 3.4L17 15l-5-2.7L7 15l.8-5.1L4 6.5 9 6l3-5z" />
                    </svg>
                    HIPAA compliant
                  </span>
                </div>
              </div>

              {/* crisis callout */}
              <div className="w-full md:w-auto">
                <div className="rounded-2xl border border-[#8B9A6B]/20 bg-white/70 backdrop-blur md:max-w-md p-4 shadow-sm dark:bg-neutral-900/60">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.6-1.13a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <p className="text-xs leading-5 text-gray-600 dark:text-gray-300 italic ">
                      If you are experiencing a mental health <span className="text-red-600 font-semibold">crisis</span>, please call your local <span className="text-red-600 italic font-semibold">emergency</span> number.
                      For non-urgent inquiries, we’ll get back to you within 48 hours.
                    </p>
                  </div>
                </div>
              </div>


            </div>


          </div>
        </footer>

      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8B9A6B]/10 rounded-full transform translate-x-16 translate-y-16"></div>
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#8B9A6B]/10 rounded-full transform -translate-x-12 -translate-y-12"></div>
    </footer>
  );
};

export default Footer;