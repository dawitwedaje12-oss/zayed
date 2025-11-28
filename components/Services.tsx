import React from 'react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
    {
        icon: "fa-bullseye",
        title: "Performance Marketing",
        description: "Data-driven campaigns that deliver measurable results and maximize ROI through targeted advertising and conversion optimization."
    },
    {
        icon: "fa-chart-line",
        title: "Digital Strategy",
        description: "Comprehensive digital roadmaps that align with your business objectives and drive sustainable growth across all channels."
    },
    {
        icon: "fa-users",
        title: "Social Media Marketing",
        description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions across platforms."
    },
    {
        icon: "fa-pen-nib",
        title: "Content Marketing",
        description: "Compelling storytelling and valuable content creation that attracts, engages, and retains your target audience."
    },
    {
        icon: "fa-search",
        title: "SEO Optimization",
        description: "Technical and content-focused strategies to improve visibility, drive organic traffic, and rank higher in search results."
    },
    {
        icon: "fa-laptop-code",
        title: "Web Development",
        description: "High-performance, visually stunning websites designed to provide exceptional user experiences and drive conversions."
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-navy-medium/30 relative">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <span className="inline-block px-5 py-2 rounded-full border border-gold/20 bg-gold-dim text-gold text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Comprehensive <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Digital Solutions</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We offer end-to-end digital marketing services designed to drive growth and maximize ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="group relative bg-navy-card backdrop-blur-sm rounded-2xl p-10 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-navy-dark hover:border-gold/30 hover:shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-2xl mb-6 mx-auto transition-transform group-hover:scale-110 group-hover:rotate-3">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-4 text-center group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;