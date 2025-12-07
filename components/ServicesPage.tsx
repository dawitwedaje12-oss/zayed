import React from 'react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
    {
        icon: "fa-users",
        title: "Social Media Marketing",
        description: "Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions across platforms."
    },
    {
        icon: "fa-chart-line",
        title: "Digital Strategy",
        description: "Comprehensive digital roadmaps that align with your business objectives and drive sustainable growth across all channels."
    },
    {
        icon: "fa-bullseye",
        title: "Performance Marketing",
        description: "Data-driven campaigns that deliver measurable results and maximize ROI through targeted advertising and conversion optimization."
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

const ServicesPage: React.FC = () => {
    return (
        <section className="pt-32 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-medium rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="inline-block px-5 py-2 rounded-full border border-gold/20 bg-gold-dim text-gold text-sm font-semibold mb-6">
                        Our Expertise
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
                        Our <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We provide a full spectrum of digital marketing services designed to elevate your brand and drive sustainable business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="group relative bg-navy-card backdrop-blur-md rounded-2xl p-10 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-navy-dark hover:border-gold/30 hover:shadow-2xl animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-2xl mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-gold/10">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">{service.description}</p>
                            
                            <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                <span>Learn More</span>
                                <i className="fas fa-arrow-right ml-2"></i>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-navy-medium to-navy-card border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Every business is unique. Contact us to discuss your specific goals and challenges, and we'll craft a tailored strategy just for you.
                        </p>
                        <button 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="px-10 py-4 rounded-full font-bold text-navy-dark bg-gradient-to-r from-gold to-gold-light shadow-lg hover:shadow-gold/30 transition-transform hover:-translate-y-1"
                        >
                            Talk to an Expert
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;