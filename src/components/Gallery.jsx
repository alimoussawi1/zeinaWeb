import React, { useState, useEffect } from "react";
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

// Import your images from assets
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";

const Gallery = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState({});

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

    // Gallery images from your assets folder
    const galleryImages = [
        {
            id: 1,
            src: image1,
            alt: "Color Fight Festival",
            title: "Epic Color Battles",
            description: "Participants covered in vibrant colors during our signature color fight event"
        },
        {
            id: 2,
            src: image2,
            alt: "Foam Storm Event",
            title: "Foam Storm Fun",
            description: "Kids enjoying our refreshing foam storm experience"
        },
        {
            id: 3,
            src: image3,
            alt: "Family Festival",
            title: "Family Celebrations",
            description: "Families bonding through interactive entertainment and activities"
        },
        {
            id: 4,
            src: image4,
            alt: "Community Event",
            title: "Community Gatherings",
            description: "Bringing neighborhoods together through joyful shared experiences"
        },
        {
            id: 5,
            src: image5,
            alt: "Interactive Games",
            title: "Interactive Entertainment",
            description: "Engaging activities that spark creativity and laughter for all ages"
        },
        {
            id: 6,
            src: image6,
            alt: "Outdoor Events",
            title: "Outdoor Adventures",
            description: "Taking the fun outdoors with exciting open-air celebrations"
        },
        {
            id: 7,
            src: image7,
            alt: "Special Occasions",
            title: "Custom Celebrations",
            description: "Tailored events for birthdays, corporate gatherings, and special moments"
        },
    ];

    const handleImageLoad = (imageId) => {
        setImageLoaded(prev => ({ ...prev, [imageId]: true }));
    };

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction) => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % galleryImages.length;
        } else {
            newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
        }

        setSelectedImage(galleryImages[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateImage('next');
            if (e.key === 'ArrowLeft') navigateImage('prev');
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `translateY(${scrollY * 0.1 * (i % 3)}px)`,
                            animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    >
                        <div
                            className={`w-${6 + (i % 4) * 2} h-${6 + (i % 4) * 2} bg-gradient-to-r from-purple-400 to-cyan-400 ${i % 3 === 0 ? 'rounded-full' :
                                i % 3 === 1 ? 'rounded-lg rotate-45' :
                                    'rounded-full'
                                } blur-sm`}
                        />
                    </div>
                ))}

                {/* Mouse follower */}
                <div
                    className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-500"
                    style={{
                        left: mousePos.x - 128,
                        top: mousePos.y - 128,
                    }}
                />

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="galleryGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#galleryGrid)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 min-h-screen">
                {/* Header */}
                <div className="text-center py-20 px-6">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
                        <Camera className="w-14 h-14 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            GALLERY
                        </span>
                        <br />
                        <span className="text-white font-light">MOMENTS</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Capturing the joy, laughter, and vibrant memories from our incredible events across Lebanon.
                    </p>

                    <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
                        <Heart className="w-4 h-4 mr-2 text-pink-400" />
                        <span className="text-sm font-medium text-white">Memories That Last Forever</span>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="max-w-7xl mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' :
                                    index === 3 ? 'lg:col-span-2' :
                                        ''
                                    }`}
                                style={{
                                    aspectRatio: index === 0 ? '16/12' : index === 3 ? '16/9' : '1/1',
                                    animationDelay: `${index * 0.1}s`
                                }}
                                onClick={() => openLightbox(image)}
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onLoad={() => handleImageLoad(image.id)}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white mb-2">{image.title}</h3>
                                    <p className="text-gray-300 text-sm">{image.description}</p>
                                </div>

                                {/* Zoom Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="w-5 h-5 text-white" />
                                </div>

                                {/* Loading State */}
                                {!imageLoaded[image.id] && (
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-lg flex items-center justify-center">
                                        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">500+</div>
                                <div className="text-gray-300 text-sm">Events Organized</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                                <div className="text-gray-300 text-sm">Happy Participants</div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold text-white mb-2">100%</div>
                                <div className="text-gray-300 text-sm">Smile Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => navigateImage('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => navigateImage('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-xl"
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                            <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-300">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </div>
    );
};

export default Gallery;
