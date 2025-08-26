import ConditionsMarquee from "./Bubbles";

const ServicesSection = () => {
    const specialties = [
        {
            number: 1,
            title: "Anxiety",
            description: "Comprehensive support for managing anxiety disorders, panic attacks, and overwhelming worry through evidence-based therapeutic approaches."
        },
        {
            number: 2,
            title: "Depression",
            description: "Compassionate treatment for depression, helping you rediscover happiness, motivation, and a sense of purpose in your daily life."
        },
        {
            number: 3,
            title: "Life Transitions",
            description: "Guidance through major life changes such as career shifts, relationship changes, loss, or other significant transitions."
        },
        {
            number: 4,
            title: "Trauma and PTSD",
            description: "Specialized trauma-informed care to help you process challenging experiences and develop healthy coping strategies."
        }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#f5f1ea] to-[#f2ede4] overflow-hidden py-20">
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
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-5xl lg:text-6xl font-light text-[#8B7355] leading-tight font-baloo">
                            Individual Therapy
                        </h2>

                        <div className="flex items-center justify-center space-x-3">
                            <div className="w-16 h-px bg-[#8B9A6B]"></div>
                            <p className="text-sm font-semibold tracking-widest text-[#8B9A6B] uppercase">
                                Specialties
                            </p>
                            <div className="w-16 h-px bg-[#8B9A6B]"></div>
                        </div>

                        <p className="text-lg text-[#7A8A5A] font-medium tracking-wide max-w-3xl mx-auto">
                            Personalized therapeutic support tailored to your unique needs and goals
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="group">
                            {/* Circle with Number */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B9A6B] to-[#7A8A5A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-xl font-bold">
                                            {specialty.number}
                                        </span>
                                    </div>
                                    <div className="absolute -inset-2 rounded-full border-2 border-[#8B9A6B]/30 animate-pulse"></div>
                                </div>
                            </div>

                            {/* Service Box */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#8B9A6B]/20 hover:shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 h-[250px] ">
                                <div className="text-center space-y-4">
                                    <h3 className="text-xl font-semibold text-[#8B7355] mb-3">
                                        {specialty.title}
                                    </h3>

                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        {specialty.description}
                                    </p>

                                    <div className="pt-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-[#8B9A6B] to-[#7A8A5A] rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


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

export default ServicesSection;