import React, { useState, useEffect } from "react";
import { Shield, Mail, MapPin, Eye, Lock, FileText, CheckCircle, AlertTriangle, Users, Database, Globe, Calendar } from "lucide-react";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('privacy');
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

  const sections = [
    { id: 'privacy', title: 'Privacy Policy', icon: Eye },
    { id: 'terms', title: 'Terms & Conditions', icon: FileText },
    { id: 'data', title: 'Data Protection', icon: Database }
  ];

  const privacyPoints = [
    {
      icon: Users,
      title: "Personal Information",
      description: "We collect only essential information like name, email, and phone number when you register or contact us.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Your information is encrypted and stored securely. We use industry-standard security measures to protect your data.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Third-Party Sharing",
      description: "We never sell or share your personal information with third parties without your explicit consent.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const termsPoints = [
    {
      icon: AlertTriangle,
      title: "Liability Disclaimer",
      description: "Participants engage in activities at their own risk. Recreo Inn is not liable for personal injuries or lost items.",
      type: "warning"
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "We maintain high safety standards and provide safety briefings for all activities. Follow all safety guidelines.",
      type: "success"
    },
    {
      icon: Eye,
      title: "Media Usage",
      description: "Photos and videos taken during events may be used for marketing purposes unless you opt out.",
      type: "info"
    }
  ];

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
              className={`w-${8 + (i % 4) * 4} h-${8 + (i % 4) * 4} bg-gradient-to-r from-purple-400 to-cyan-400 ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-full'
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
              <pattern id="privacyGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#privacyGrid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <div className="text-center py-20 px-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
            <Shield className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              PRIVACY
            </span>
            <br />
            <span className="text-white font-light">& TERMS</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your trust is paramount. Here's how we protect your privacy and ensure transparency.
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
            <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-medium text-white">Last Updated: July 2025</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white scale-105'
                      : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-20">
          {/* Privacy Policy Section */}
          {activeSection === 'privacy' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">How We Protect Your Privacy</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We believe in complete transparency about how your data is collected, used, and protected.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {privacyPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${point.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 bg-gradient-to-r ${point.gradient} bg-clip-text text-transparent`} />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{point.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Additional Privacy Details */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Detailed Privacy Information</h3>
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Information We Collect</h4>
                    <ul className="space-y-2">
                      <li>• Contact information (name, email, phone)</li>
                      <li>• Event registration details</li>
                      <li>• Communication preferences</li>
                      <li>• Service usage analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">How We Use Your Data</h4>
                    <ul className="space-y-2">
                      <li>• Event registration and communication</li>
                      <li>• Service improvement and personalization</li>
                      <li>• Safety and security purposes</li>
                      <li>• Marketing (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Terms & Conditions Section */}
          {activeSection === 'terms' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Terms & Conditions</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Please read these terms carefully before using our services and facilities.
                </p>
              </div>

              <div className="space-y-6">
                {termsPoints.map((term, index) => {
                  const Icon = term.icon;
                  const colors = {
                    warning: 'from-yellow-500 to-orange-500',
                    success: 'from-green-500 to-emerald-500',
                    info: 'from-blue-500 to-cyan-500'
                  };

                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors[term.type]} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 bg-gradient-to-r ${colors[term.type]} bg-clip-text text-transparent`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{term.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{term.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Terms */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Additional Terms</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p>All participants must follow safety guidelines and staff instructions at all times.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p>Age restrictions apply to certain activities. Valid ID may be required.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p>Recreo Inn reserves the right to refuse service or remove disruptive individuals.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p>Cancellation policies apply to advance bookings and special events.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Protection Section */}
          {activeSection === 'data' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Data Protection & Security</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  We implement robust security measures to protect your personal information.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <Lock className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Encryption & Security</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All data transmission is encrypted using industry-standard SSL/TLS protocols. Your information is stored on secure servers with restricted access.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• 256-bit SSL encryption</li>
                    <li>• Secure server infrastructure</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls and monitoring</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <Database className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Data Retention</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We retain your data only as long as necessary for the purposes outlined in our privacy policy or as required by law.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Contact info: Retained while account is active</li>
                    <li>• Event data: 2 years for service improvement</li>
                    <li>• Marketing data: Until you unsubscribe</li>
                    <li>• Legal requirements: As mandated by law</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Questions About Our Policies?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                  <a
                    href="mailto:info@recreolb.com"
                    className="text-purple-300 hover:text-purple-200 transition-colors text-lg"
                  >
                    info@recreolb.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-cyan-300 text-lg">Naccache, Lebanon</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
              <p className="text-green-300 text-sm text-center">
                ✓ We're committed to transparency and will respond to all privacy inquiries within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Privacy;