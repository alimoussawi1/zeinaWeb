import React, { useState, useEffect } from "react";
import { Heart, Target, Sparkles, Palette, Star, Users, ArrowRight, Mail, MapPin } from "lucide-react";

const AboutUs = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Updated about information for Recreo event brand
    const aboutInfo = [
        {
            title: "About Recreo",
            description: "Recreo is a Lebanese event brand dedicated to crafting interactive and playful experiences tailored for youth. From vibrant color fights to epic foam storms and themed gatherings, we create dynamic moments that foster joy, connection, and community spirit. Our indoor and outdoor events are built on a foundation of creativity, safety, and originality—designed to energize and inspire every participant.",
            icon: Heart,
            gradient: "from-purple-500 to-pink-500"
        },

        {
            title: "Our Mission",
            description: "Our mission is to create unforgettable moments that bring people together through innovative and engaging entertainment experiences. We strive to transform ordinary gatherings into extraordinary celebrations, fostering community bonds and spreading joy throughout Lebanon.",
            icon: Target,
            gradient: "from-pink-500 to-orange-500"
        },
        {
            title: "Our Values",
            description: "We value creativity, community, and connection. Safety and inclusivity are at the heart of our operations, ensuring every participant feels welcome and secure. We believe in the power of play to unite people across all backgrounds and ages, creating shared memories that last a lifetime.",
            icon: Sparkles,
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            title: "Our Experiences",
            description: "From high-energy color fights that paint the town in joy to refreshing foam storms that cool down summer events, we specialize in unique interactive entertainment. Our family festivals combine multiple activities to create comprehensive celebration experiences that cater to every age group and interest.",
            icon: Palette,
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Why Choose Recreo",
            description: "Recreo is more than just an entertainment center – it's a vibrant hub where families and friends create unforgettable memories. From thrilling attractions and engaging activities to professionally organized events and birthday gatherings, our space is designed for joy, excitement, and togetherness. Whether you're planning a private celebration or a public festival, our experienced team ensures a safe, seamless, and colorful experience every time.",
            icon: Star,
            gradient: "from-yellow-500 to-orange-500"
        }

    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `translateY(${scrollY * 0.1 * (i % 3)}px)`,
                            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    >
                        <div
                            className={`w-${6 + (i % 5) * 2} h-${6 + (i % 5) * 2} bg-gradient-to-r from-purple-400 to-cyan-400 ${i % 4 === 0 ? 'rounded-full' :
                                i % 4 === 1 ? 'rounded-lg rotate-45' :
                                    i % 4 === 2 ? 'rounded-full' :
                                        'rounded-lg rotate-12'
                                } blur-sm`}
                        />
                    </div>
                ))}

                {/* Mouse follower */}
                <div
                    className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl pointer-events-none transition-all duration-700"
                    style={{
                        left: mousePos.x - 160,
                        top: mousePos.y - 160,
                    }}
                />

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="aboutGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#aboutGrid)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 min-h-screen">
                {/* Header Section */}
                <div className="text-center py-20 px-6">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
                        <Users className="w-14 h-14 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            ABOUT
                        </span>
                        <br />
                        <span className="text-white font-light">RECREO</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Where creativity meets community, and every event becomes an unforgettable celebration of joy, color, and connection.
                    </p>

                    <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        <span className="text-sm font-medium text-white">Crafting Memories Since 2020</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pb-20">
                    {/* About Cards Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                        {aboutInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-8 h-8 bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {info.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Highlight Section */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                What Makes Us <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Special</span>
                            </h2>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                We don't just organize events - we create magical experiences that bring people together and leave lasting impressions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Palette className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Creative Excellence</h3>
                                <p className="text-gray-400 text-sm">Innovative concepts that push the boundaries of traditional entertainment</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Community Focus</h3>
                                <p className="text-gray-400 text-sm">Building stronger communities through shared joyful experiences</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Safety First</h3>
                                <p className="text-gray-400 text-sm">Professional standards ensuring every event is both fun and secure</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="text-white">Ready to Create </span>
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Magic?</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let us transform your next event into an unforgettable experience filled with color, joy, and connection.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full font-bold text-lg text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <Mail className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm">info@recreolb.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <MapPin className="w-4 h-4 text-cyan-400" />
                                    <span className="text-sm">Naccache, Lebanon</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                            <p className="text-green-300 text-sm">
                                ✓ Professional event planning • ✓ Safety certified • ✓ Custom experiences • ✓ All ages welcome
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(180deg); }
                }
            `}</style>
        </div>
    );
};

export default AboutUs;