import React, { useContext } from 'react';
import { NavigationContext } from '../NavigationContext';

const About: React.FC = () => {
    const { navigateTo } = useContext(NavigationContext);

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16 md:mb-20">
                    <span className="inline-block px-5 py-2 rounded-full border border-gold/20 bg-gold-dim text-gold text-sm font-semibold mb-4">
                        Our Story
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Redefining <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Digital Excellence</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We combine strategic vision with technical expertise to deliver exceptional results for our clients across industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold leading-tight">
                            Driving Business Growth Through Innovation
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Agurafi was founded on the principle that digital marketing should be a strategic business function, not just a tactical afterthought. Our team of experts brings together decades of experience across marketing, technology, and data analytics to deliver transformative results.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: "fa-chess-knight",
                                    title: "Strategic Approach",
                                    desc: "We develop comprehensive strategies tailored to your unique business objectives and market position."
                                },
                                {
                                    icon: "fa-chart-bar",
                                    title: "Data-Driven Decisions",
                                    desc: "Our decisions are guided by comprehensive data analysis and market intelligence, not assumptions."
                                },
                                {
                                    icon: "fa-bolt",
                                    title: "Agile Execution",
                                    desc: "We adapt quickly to market changes and new opportunities, ensuring optimal performance at all times."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-xl">
                                        <i className={`fas ${feature.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className="text-gray-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#services" className="px-8 py-3 rounded-full bg-gradient-to-br from-gold to-gold-light text-navy-dark font-bold hover:shadow-lg hover:shadow-gold/20 transition-all hover:-translate-y-1">
                                Our Methodology
                            </a>
                            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-gold hover:text-gold transition-all hover:-translate-y-1">
                                Meet Our Team
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[500px] w-full group">
                        <div 
                            onClick={() => navigateTo('videos', 'video-0')}
                            className="absolute inset-0 rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-gold/30 hover:shadow-gold/10"
                        >
                            {/* Video Background - Using a high-quality stock video that works as a background source */}
                            <video 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                poster="https://images.unsplash.com/photo-1480506132288-68f7705954bd?auto=format&fit=crop&w=800&q=80"
                            >
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-interface-12977-large.mp4" type="video/mp4" />
                            </video>

                            {/* Dark Overlay for Readability */}
                            <div className="absolute inset-0 bg-navy-dark/70 group-hover:bg-navy-dark/60 transition-colors duration-300"></div>
                            
                            <div className="relative z-10 p-10 text-center transition-transform duration-500 group-hover:scale-105">
                                <div className="text-8xl text-gold/80 mb-4 transition-colors duration-300 group-hover:text-gold animate-float" style={{ animationDuration: '6s' }}>
                                    <i className="fas fa-play-circle"></i>
                                </div>
                                <h4 className="text-3xl font-bold text-white uppercase tracking-[0.2em] mb-2 text-shadow-lg">Future Ready</h4>
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="inline-block px-6 py-2 bg-gold text-navy-dark font-bold rounded-full uppercase text-xs tracking-widest shadow-lg">
                                        Watch Future Ready
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;