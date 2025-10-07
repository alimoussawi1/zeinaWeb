import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Award,
    BookOpen,
    Target,
    Users,
    Mail,
    MapPin,
    User,
} from "lucide-react";

/** Collapsible Section wrapper */
function Section({ id, title, icon: Icon, children, expandedSections, toggle }) {
    const isExpanded = expandedSections[id];
    return (
        <div className="bg-white rounded-lg shadow-sm border border-[#8B9A6B]/20 mb-6 overflow-hidden">
            <button
                onClick={() => toggle(id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f8f5f0] transition-colors duration-200"
            >
                <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-[#8B9A6B]" />
                    <h2 className="text-xl font-semibold text-[#8B7355]">{title}</h2>
                </div>
                {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-[#7A8A5A]" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-[#7A8A5A]" />
                )}
            </button>

            {isExpanded && (
                <div className="px-6 pb-6 border-t border-[#8B9A6B]/10">
                    <div className="pt-4">{children}</div>
                </div>
            )}
        </div>
    );
}

export default function Insights() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (sectionId) =>
        setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f5f0] via-[#f5f1ea] to-[#f2ede4] relative">
            {/* Organic Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
                    <defs>
                        <pattern
                            id="organic-pattern"
                            x="0"
                            y="0"
                            width="200"
                            height="200"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M50,20 C80,10 120,30 150,50 C170,70 160,100 140,120 C120,140 90,135 70,120 C50,105 30,80 35,60 C40,40 50,20 50,20 Z"
                                fill="currentColor"
                                opacity="0.3"
                            />
                            <path
                                d="M30,80 C60,85 90,105 110,130 C130,155 125,185 105,200 C85,215 55,210 35,195 C15,180 5,150 10,130 C15,110 30,90 30,80 Z"
                                fill="currentColor"
                                opacity="0.2"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#organic-pattern)"
                        className="text-[#8B9A6B]"
                    />
                </svg>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">

                    <h1 className="text-5xl lg:text-6xl font-light text-[#8B7355] leading-tight font-baloo mb-4">
                        Professional Insights
                    </h1>


                </div>

                {/* Introduction */}
                <div className="bg-[#8B9A6B] backdrop-blur-sm rounded-lg shadow-sm border border-[#8B9A6B]/20 p-6 mb-8">
                    <p className="text-white leading-relaxed mb-4 text-lg">
                        My professional journey is built on continuous learning, evidence-based
                        practice, and a commitment to providing the highest quality mental
                        health care.
                    </p>
                    <div className="flex justify-center">


                        <p className="text-white leading-relaxed italic">
                            Explore my professional development, certifications, and expertise
                            that inform my therapeutic approach.
                        </p>
                    </div>
                </div>
                {/* Skills */}
                <Section
                    id="skills"
                    title="Skills"
                    icon={Target}
                    expandedSections={expandedSections}
                    toggle={toggleSection}
                >
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-[#8B9A6B]/10 to-[#7A8A5A]/5 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-[#8B7355] mb-6 flex items-center">
                                <div className="w-3 h-3 bg-[#8B9A6B] rounded-full mr-3" />
                                Core Professional Skills
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Language Skills */}
                                <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                                    <h4 className="font-semibold text-[#8B7355] mb-4 flex items-center">
                                        <Users className="h-5 w-5 text-[#8B9A6B] mr-2" />
                                        Language Proficiency
                                    </h4>
                                    <div className="space-y-3">
                                        {["English", "Arabic"].map((lang) => (
                                            <div
                                                key={lang}
                                                className="flex items-center justify-between"
                                            >
                                                <span className="text-[#7A8A5A] font-medium">
                                                    {lang}
                                                </span>
                                                <div className="flex space-x-1">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <div
                                                            key={i}
                                                            className="w-3 h-3 bg-[#8B9A6B] rounded-full"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <p className="text-xs text-[#7A8A5A] mt-3">
                                            Bilingual fluency enables culturally sensitive therapy for
                                            diverse populations
                                        </p>
                                    </div>
                                </div>

                                {/* Assessment Tools */}
                                <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                                    <h4 className="font-semibold text-[#8B7355] mb-4 flex items-center">
                                        <Target className="h-5 w-5 text-[#8B9A6B] mr-2" />
                                        Psychological Assessment Tools
                                    </h4>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                test: "WISC-V",
                                                desc: "Wechsler Intelligence Scale for Children",
                                            },
                                            {
                                                test: "WAIS-V",
                                                desc: "Wechsler Adult Intelligence Scale",
                                            },
                                            {
                                                test: "MMPI-3",
                                                desc: "Minnesota Multiphasic Personality Inventory",
                                            },
                                            {
                                                test: "WIAT-IV",
                                                desc: "Wechsler Individual Achievement Test",
                                            },
                                        ].map((assessment, index) => (
                                            <div
                                                key={index}
                                                className="border-l-4 border-[#8B9A6B] pl-3"
                                            >
                                                <div className="font-medium text-[#8B7355] text-sm">
                                                    {assessment.test}
                                                </div>
                                                <div className="text-xs text-[#7A8A5A]">
                                                    {assessment.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-[#8B9A6B]/10 rounded-lg p-4 text-center">
                                <div className="w-12 h-12 bg-[#8B9A6B] rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-[#8B7355] mb-2">
                                    Clinical Assessment
                                </h4>
                                <p className="text-xs text-[#7A8A5A]">
                                    Comprehensive psychological evaluation using standardized
                                    instruments
                                </p>
                            </div>

                            <div className="bg-[#C8B99C]/20 rounded-lg p-4 text-center">
                                <div className="w-12 h-12 bg-[#C8B99C] rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Users className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-[#8B7355] mb-2">
                                    Cultural Competency
                                </h4>
                                <p className="text-xs text-[#7A8A5A]">
                                    Bilingual therapy services with cultural sensitivity
                                </p>
                            </div>

                            <div className="bg-[#7A8A5A]/15 rounded-lg p-4 text-center">
                                <div className="w-12 h-12 bg-[#7A8A5A] rounded-full flex items-center justify-center mx-auto mb-3">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-[#8B7355] mb-2">
                                    Evidence-Based Practice
                                </h4>
                                <p className="text-xs text-[#7A8A5A]">
                                    Integration of research with clinical expertise
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                            <h4 className="font-semibold text-[#8B7355] mb-4">
                                Specialized Competencies
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-[#8B7355] mb-2">
                                        Assessment & Testing:
                                    </h5>
                                    <ul className="space-y-1 text-sm text-[#7A8A5A]">
                                        <li>• Intelligence testing (child & adult)</li>
                                        <li>• Personality assessment</li>
                                        <li>• Achievement testing</li>
                                        <li>• Diagnostic evaluation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-[#8B7355] mb-2">
                                        Cross-Cultural Skills:
                                    </h5>
                                    <ul className="space-y-1 text-sm text-[#7A8A5A]">
                                        <li>• Bilingual therapeutic communication</li>
                                        <li>• Cultural adaptation of interventions</li>
                                        <li>• Immigrant & refugee populations</li>
                                        <li>• Culturally responsive treatment planning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                {/* Professional Association Memberships */}
                <Section
                    id="memberships"
                    title="Professional Association Memberships"
                    icon={Users}
                    expandedSections={expandedSections}
                    toggle={toggleSection}
                >
                    <div className="space-y-6">
                        <div className="bg-white/60 rounded-lg p-6 border border-[#8B9A6B]/10">
                            <h4 className="font-semibold text-[#8B7355] mb-6 flex items-center">
                                <div className="w-3 h-3 bg-[#8B9A6B] rounded-full mr-3" />
                                Current Memberships
                            </h4>

                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-[#8B9A6B]/10 to-[#7A8A5A]/5 rounded-lg p-5">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#8B9A6B] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Award className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-semibold text-[#8B7355] text-lg">
                                                    Psi Chi International Honor Society in Psychology
                                                </h5>
                                                <span className="text-sm font-medium text-[#8B9A6B] bg-white/80 px-3 py-1 rounded-full">
                                                    May 2025
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#7A8A5A] mb-3">
                                                Member of the prestigious international honor society
                                                recognizing academic excellence in psychology
                                            </p>
                                            <div className="bg-white/60 rounded-lg p-3 border border-[#8B9A6B]/10">
                                                <p className="text-xs text-[#7A8A5A] flex items-center">
                                                    <span className="w-2 h-2 bg-[#8B9A6B] rounded-full mr-2" />
                                                    <strong>
                                                        Certified member of the Association of College
                                                        Honor Societies (ACHS)
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                                <h4 className="font-semibold text-[#8B7355] mb-4 flex items-center">
                                    <div className="w-3 h-3 bg-[#C8B99C] rounded-full mr-3" />
                                    Membership Benefits
                                </h4>
                                <ul className="space-y-2 text-sm text-[#7A8A5A]">
                                    {[
                                        "Access to cutting-edge psychological research",
                                        "Professional networking opportunities",
                                        "Continuing education resources",
                                        "Career development support",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-1 h-1 bg-[#8B9A6B] rounded-full mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                                <h4 className="font-semibold text-[#8B7355] mb-4 flex items-center">
                                    <div className="w-3 h-3 bg-[#7A8A5A] rounded-full mr-3" />
                                    Professional Recognition
                                </h4>
                                <ul className="space-y-2 text-sm text-[#7A8A5A]">
                                    {[
                                        "Academic excellence recognition",
                                        "Commitment to ethical practice",
                                        "Leadership in psychology field",
                                        "Dedication to lifelong learning",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <span className="w-1 h-1 bg-[#8B9A6B] rounded-full mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#8B9A6B]/10 to-[#7A8A5A]/5 rounded-lg p-5">
                            <h4 className="font-semibold text-[#8B7355] mb-3">
                                Professional Commitment
                            </h4>
                            <p className="text-sm text-[#7A8A5A] leading-relaxed">
                                Membership in Psi Chi represents a commitment to excellence in
                                psychological science and practice. This prestigious honor
                                society membership demonstrates dedication to advancing the
                                field of psychology through ethical practice, scholarly
                                achievement, and service to the community. As a certified member
                                of ACHS, this affiliation ensures adherence to the highest
                                standards of professional development and integrity.
                            </p>
                        </div>
                    </div>
                </Section>


                {/* Professional Development */}
                <Section
                    id="development"
                    title="Professional Development"
                    icon={Target}
                    expandedSections={expandedSections}
                    toggle={toggleSection}
                >
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-[#8B9A6B]/10 to-[#7A8A5A]/5 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-[#8B7355] flex items-center">
                                    <div className="w-3 h-3 bg-[#8B9A6B] rounded-full mr-3" />
                                    Selected Continuing Education
                                </h3>
                                <div className="text-xs text-[#7A8A5A] italic">
                                    Complete CE transcript available upon request
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {[
                                    {
                                        title: "Human Sex Trafficking Presentation",
                                        sponsor:
                                            "Dr. Johanna Buzolits",
                                        date: "06/17/2025",

                                    },
                                    {
                                        title: "Implicit Bias Continuing Education Presentation",
                                        sponsor: "Dr. Taylor",
                                        date: "10/04/2024",

                                    },
                                    {
                                        title:
                                            "Certificate of Continual Education in Social Work/Child and Trauma Training",
                                        sponsor: "Michigan Public Health Institute (MPHI)",
                                        date: "10/17/2024",

                                    },
                                    {
                                        title:
                                            "Understanding the Confidentiality Requirements of VOCA, FVPSA, and VAWA",
                                        sponsor: "Michigan Victim Advocacy Network",
                                        date: "08/26/2024",

                                    },
                                    {
                                        title: "Crisis Prevention Intervention",
                                        sponsor: "CPI",
                                        date: "September 2022",

                                    },
                                    {
                                        title: "Adult and Pediatric First Aid/CPR/AED",
                                        sponsor: "American Red Cross",
                                        date: "Feb 2022",

                                    },
                                    {
                                        title:
                                            "Registered Behavioral Technician (RBT) Training",
                                        sponsor:
                                            "Rethink Behavioral Health Management Software",
                                        date: "March 2022",

                                    },
                                    {
                                        title: "Quality Behavioral Safety Training",
                                        sponsor: "QBS, provider of Safety-Care",
                                        date: "March 2022",

                                    },
                                    {
                                        title:
                                            "Responsible Conduct of Research and Scholarship (RCRS) Training",
                                        sponsor: "Program for Research & Scholarship",
                                        date: "",

                                    },
                                ].map((dev, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/60 p-4 rounded-lg border border-[#8B9A6B]/10"
                                    >
                                        <div className="flex justify-between items-start gap-3">
                                            <div className="flex-1">
                                                <h5 className="font-semibold text-[#8B7355] mb-1">
                                                    {dev.title}
                                                </h5>
                                                <p className="text-sm text-[#7A8A5A] mb-1">
                                                    {dev.sponsor}
                                                </p>
                                                <div className="flex gap-4 text-xs text-[#8B9A6B]">
                                                    {dev.date && <span>Date: {dev.date}</span>}
                                                    {dev.hours && <span>Duration: {dev.hours}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                            <h4 className="font-semibold text-[#8B7355] mb-3">
                                Professional Growth Areas
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h5 className="font-medium text-[#8B7355] mb-2">
                                        Research & Ethics:
                                    </h5>
                                    <ul className="space-y-1 text-sm text-[#7A8A5A]">
                                        <li>• Responsible conduct of research</li>
                                        <li>• Implicit bias awareness</li>
                                        <li>• Confidentiality requirements</li>
                                        <li>• Professional ethics</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-[#8B7355] mb-2">
                                        Specialized Training:
                                    </h5>
                                    <ul className="space-y-1 text-sm text-[#7A8A5A]">
                                        <li>• Crisis prevention & intervention</li>
                                        <li>• Behavioral health techniques</li>
                                        <li>• First aid & emergency response</li>
                                        <li>• Safety-care protocols</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Certifications & Trainings */}
                <Section
                    id="certifications"
                    title="Certifications & Trainings"
                    icon={Award}
                    expandedSections={expandedSections}
                    toggle={toggleSection}
                >
                    <div className="space-y-6">
                        <div className="bg-white/60 rounded-lg p-5 border border-[#8B9A6B]/10">
                            <h4 className="font-semibold text-[#8B7355] mb-4 flex items-center">
                                <Award className="h-5 w-5 text-[#8B9A6B] mr-2" />
                                Recent Certifications (2024-2025)
                            </h4>
                            <div className="grid gap-3 max-h-96 overflow-y-auto">
                                {[
                                    {
                                        title: "Positive Psychology Certificate ",
                                        org: "Harvard Medical School and Harvard Health Publishing",
                                        date: "09/27/2025"
                                    },
                                    {
                                        title:
                                            "Mandated Reporting for Confidential Victim Service Providers at DVS-Funded Organizers",
                                        org: "MSHSS",
                                        date: "06/12/2025",
                                    },
                                    {
                                        title: "Trauma Across the Lifespan",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title: "Concrete Resources for Survivors/NSPT",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title:
                                            "Creating a Shared Understanding of Domestic Violence/NSPT",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title:
                                            "Creating a Shared Understanding of Sexual Violence/NSPT",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title:
                                            "Social Norms, Rape Culture, and the Glorification of Violence/NSPT",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title: "Being an Advocate/NSPT",
                                        org: "MIVAN",
                                        date: "06/02/2025",
                                    },
                                    {
                                        title:
                                            "Intersectionality, Privilege, and Allyship/NSPT",
                                        org: "MIVAN",
                                        date: "05/29/2025",
                                    },
                                    {
                                        title: "QPR Suicide Prevention Training",
                                        org: "QPR Institute",
                                        date: "05/29/2025",
                                    },
                                    {
                                        title:
                                            "Help for the Helpers: Vicarious Trauma, Burnout, Compassion Fatigue, and Self-care/NSPT",
                                        org: "MIVAN",
                                        date: "05/15/2025",
                                    },
                                    {
                                        title: "Adult Trauma Training",
                                        org:
                                            "Arab Community Center for Economic and Social Services (ACCESS)",
                                        date: "03/10/2025",
                                    },
                                    {
                                        title:
                                            "Veterans/Military and Older Adults Trauma Training",
                                        org:
                                            "Arab Community Center for Economic and Social Services (ACCESS)",
                                        date: "03/03/2025",
                                    },
                                    {
                                        title: "Sextortion Training",
                                        org: "FBI's Victim Services Division",
                                        date: "01/27/2025",
                                    },
                                    {
                                        title:
                                            "Trauma Systems Therapy for Refugees (TST-R) Training",
                                        org: "Boston's Children Hospital",
                                        date: "11/21/2024",
                                    },
                                    {
                                        title: "The Columbia-Suicide Severity Rating Scale",
                                        org: "Detroit Wayne Integrated Health Network",
                                        date: "10/17/2024",
                                    },
                                    {
                                        title: "Children and Trauma/NSPT",
                                        org: "MIVAN",
                                        date: "10/17/2024",
                                    },
                                ].map((cert, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#f8f5f0] p-3 rounded-lg border-l-4 border-[#8B9A6B]"
                                    >
                                        <div className="flex justify-between items-start gap-3">
                                            <div className="flex-1">
                                                <h5 className="font-medium text-[#8B7355] text-sm leading-tight mb-1">
                                                    {cert.title}
                                                </h5>
                                                <p className="text-xs text-[#7A8A5A]">{cert.org}</p>
                                            </div>
                                            <div className="text-xs font-semibold text-[#8B9A6B] whitespace-nowrap">
                                                {cert.date}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 p-3 bg-[#8B9A6B]/10 rounded-lg">
                                <p className="text-sm text-[#7A8A5A] text-center">
                                    <span className="font-semibold">40+ Certifications</span> in
                                    specialized areas including trauma, crisis intervention, victim
                                    advocacy, and cultural competency
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#C8B99C]/20 to-[#B5A888]/10 rounded-lg p-5">
                            <h4 className="font-semibold text-[#8B7355] mb-3">
                                Core Certification Areas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Trauma & PTSD",
                                    "Suicide Prevention",
                                    "Victim Advocacy",
                                    "Cultural Competency",
                                    "Crisis Intervention",
                                    "Child Protection",
                                    "LGBTQ+ Services",
                                    "Domestic Violence",
                                    "Sexual Violence",
                                ].map((area, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white/60 rounded-full text-xs text-[#8B9A6B] font-medium border border-[#8B9A6B]/20"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>





            </div>
        </div>
    );
}
