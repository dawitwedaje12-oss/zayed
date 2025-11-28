import React, { useEffect, useState, useRef, useContext } from 'react';
import ParticleBackground from './ParticleBackground';
import { StatItem } from '../types';
import { NavigationContext } from '../NavigationContext';

const STATS: StatItem[] = [
    { value: '245%', label: 'Average ROI', numericValue: 245, suffix: '%' },
    { value: '30+', label: 'Clients Served', numericValue: 30, suffix: '+' },
    { value: '98%', label: 'Client Retention', numericValue: 98, suffix: '%' },
];

// Helper hook for counting up animation
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        const timer = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(timer);
    }, [end, duration, start]);

    return count;
};

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { navigateTo } = useContext(NavigationContext);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="relative h-screen min-h-[800px] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            <ParticleBackground />

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute text-2xl opacity-10 animate-[spin_20s_linear_infinite]" style={{ top: '15%', left: '10%' }}>🚀</div>
                <div className="absolute text-2xl opacity-10 animate-[bounce_8s_infinite]" style={{ top: '25%', right: '15%' }}>📈</div>
                <div className="absolute text-2xl opacity-10 animate-[pulse_5s_infinite]" style={{ bottom: '30%', left: '20%' }}>💡</div>
                <div className="absolute text-2xl opacity-10 animate-[float_18s_infinite]" style={{ bottom: '20%', right: '25%' }}>🎯</div>
                <div className="absolute text-2xl opacity-10 animate-[spin_15s_linear_infinite]" style={{ top: '60%', left: '80%' }}>✨</div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="mb-8 p-4 relative inline-block">
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.2em] md:tracking-[0.15em] bg-gradient-to-br from-gold via-gold-light to-gold bg-clip-text text-transparent animate-glow leading-tight select-none">
                        AGURAFI
                    </h1>
                    <div className="text-xl md:text-2xl tracking-[0.5em] md:tracking-[0.8em] text-white/80 uppercase mt-2 animate-slide-in">
                        Digital Marketing
                    </div>
                </div>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    Elevating brands through data-driven strategies, innovative campaigns, and measurable results in the digital landscape.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <button 
                        onClick={() => navigateTo('services')}
                        className="group relative px-8 py-4 rounded-full font-bold text-navy-dark bg-gradient-to-r from-gold to-gold-light overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,215,0,0.4)] cursor-pointer"
                    >
                        <span className="relative z-10 tracking-wider uppercase text-sm">Explore Services</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </button>
                    
                    <a href="#contact" className="group px-8 py-4 rounded-full font-bold text-white border-2 border-white/20 hover:border-gold hover:bg-gold/10 transition-all hover:-translate-y-1">
                        <span className="tracking-wider uppercase text-sm">Schedule Consultation</span>
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                    {STATS.map((stat, idx) => (
                        <CounterStat key={idx} stat={stat} isVisible={isVisible} />
                    ))}
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow text-white/50">
                <i className="fas fa-chevron-down text-xl"></i>
            </div>
        </section>
    );
};

const CounterStat: React.FC<{ stat: StatItem; isVisible: boolean }> = ({ stat, isVisible }) => {
    const count = useCounter(stat.numericValue || 0, 2000, isVisible);
    
    return (
        <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-gold mb-2">
                {stat.numericValue ? count : 0}{stat.suffix}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-gray-400">
                {stat.label}
            </div>
        </div>
    );
};

export default Hero;