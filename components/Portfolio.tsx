import React from 'react';
import { PortfolioItem } from '../types';

const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        category: "E-commerce",
        title: "Luxury Fashion Brand Digital Transformation",
        description: "Revamped digital presence and implemented data-driven marketing strategies resulting in 245% revenue growth.",
        stats: [
            { value: "245%", label: "Revenue Growth" },
            { value: "3.2x", label: "ROI" }
        ]
    },
    {
        category: "SaaS",
        title: "B2B SaaS Platform User Acquisition",
        description: "Developed targeted acquisition strategy that increased qualified leads by 320% in 6 months.",
        stats: [
            { value: "320%", label: "Lead Growth" },
            { value: "5.8x", label: "ROI" }
        ]
    },
    {
        category: "B2B",
        title: "Enterprise Software Market Expansion",
        description: "Strategic positioning and ABM approach that secured 12 enterprise clients in 9 months.",
        stats: [
            { value: "12", label: "Enterprise Clients" },
            { value: "$4.2M", label: "Pipeline Generated" }
        ]
    }
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Featured <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Case Studies</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Explore how we've transformed brands and driven exceptional results across industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_ITEMS.map((item, idx) => (
                        <div key={idx} className="group bg-navy-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-gold/30">
                            {/* Abstract Image Placeholder */}
                            <div className="h-60 bg-gradient-to-br from-gold to-gold-light relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/80 to-gold-light/80 opacity-90"></div>
                                {/* Pattern */}
                                <div className="absolute inset-0 opacity-20" style={{
                                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}></div>
                                <div className="absolute bottom-4 right-4 text-navy-dark/20 text-6xl transform group-hover:scale-110 transition-transform duration-500">
                                    <i className="fas fa-arrow-up-right-dots"></i>
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-gold-dim text-gold text-xs font-bold mb-4 tracking-wider uppercase">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-gold transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                                
                                <div className="flex gap-6 pt-6 border-t border-white/5">
                                    {item.stats.map((stat, sIdx) => (
                                        <div key={sIdx} className="flex flex-col">
                                            <span className="text-2xl font-bold text-white leading-none">{stat.value}</span>
                                            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;