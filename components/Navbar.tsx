
import React, { useState, useEffect, useContext } from 'react';
import { NavItem } from '../types';
import { NavigationContext } from '../NavigationContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const { currentPage, navigateTo } = useContext(NavigationContext);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (currentPage === 'home') {
                // Simple Scroll Spy for Home Page
                const sections = ['home', 'about', 'services', 'contact'];
                let current = 'home';
                
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If section top is within the upper third of the viewport
                        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                            current = section;
                        }
                    }
                }
                setActiveSection(current);
            } else {
                setActiveSection('');
            }
        };

        const handleBeforeInstallPrompt = (e: any) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            console.log('Install prompt captured');
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, [currentPage]);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        
        // We've used the prompt, and can't use it again, discard it
        setDeferredPrompt(null);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (target === 'home') {
            navigateTo('home');
        } else if (target === 'services') {
            navigateTo('services');
        } else if (target === 'about' || target === 'contact') {
            navigateTo('home', target);
        }
    };

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gold-dim ${
                isScrolled ? 'bg-navy-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-navy-dark/90 backdrop-blur-sm py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-full">
                {/* Logo */}
                <a 
                    href="#" 
                    onClick={(e) => handleNavClick(e, 'home')}
                    className="flex items-center gap-3 no-underline group"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center text-navy-dark font-bold text-lg group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-gold/20">
                        A
                    </div>
                    <div className="text-2xl font-bold text-white tracking-tight">
                        agura<span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">fi</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8">
                    <a 
                        href="#home"
                        onClick={(e) => handleNavClick(e, 'home')}
                        className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                            currentPage === 'home' && activeSection === 'home' ? 'text-gold' : 'text-white/80'
                        }`}
                    >
                        Home
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                            currentPage === 'home' && activeSection === 'home' ? 'w-full' : 'w-0 hover:w-full'
                        }`}></span>
                    </a>
                    <a 
                        href="#about"
                        onClick={(e) => handleNavClick(e, 'about')}
                        className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                            currentPage === 'home' && activeSection === 'about' ? 'text-gold' : 'text-white/80'
                        }`}
                    >
                        About
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                            currentPage === 'home' && activeSection === 'about' ? 'w-full' : 'w-0 hover:w-full'
                        }`}></span>
                    </a>
                    <a 
                        href="#services"
                        onClick={(e) => handleNavClick(e, 'services')}
                        className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                            currentPage === 'services' || (currentPage === 'home' && activeSection === 'services') ? 'text-gold' : 'text-white/80'
                        }`}
                    >
                        Services
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                            currentPage === 'services' || (currentPage === 'home' && activeSection === 'services') ? 'w-full' : 'w-0 hover:w-full'
                        }`}></span>
                    </a>
                    <a 
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                            currentPage === 'home' && activeSection === 'contact' ? 'text-gold' : 'text-white/80'
                        }`}
                    >
                        Contact
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 ${
                            currentPage === 'home' && activeSection === 'contact' ? 'w-full' : 'w-0 hover:w-full'
                        }`}></span>
                    </a>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex gap-4 items-center">
                    {deferredPrompt && (
                        <button 
                            onClick={handleInstallClick}
                            className="px-4 py-2.5 rounded-lg font-bold text-sm bg-white text-navy-dark hover:bg-gold transition-all duration-300 flex items-center gap-2 animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.5)] border-2 border-gold"
                        >
                            <i className="fas fa-download"></i>
                            Install App
                        </button>
                    )}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="lg:hidden text-2xl text-white hover:text-gold transition-colors"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-navy-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl lg:hidden animate-fade-in">
                    <a 
                        href="#home" 
                        onClick={(e) => handleNavClick(e, 'home')}
                        className={`text-lg font-medium py-2 border-b border-white/5 ${currentPage === 'home' && activeSection === 'home' ? 'text-gold' : 'text-white'}`}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        onClick={(e) => handleNavClick(e, 'about')}
                        className={`text-lg font-medium py-2 border-b border-white/5 ${currentPage === 'home' && activeSection === 'about' ? 'text-gold' : 'text-white'}`}
                    >
                        About
                    </a>
                    <a 
                        href="#services" 
                        onClick={(e) => handleNavClick(e, 'services')}
                        className={`text-lg font-medium py-2 border-b border-white/5 ${currentPage === 'services' ? 'text-gold' : 'text-white'}`}
                    >
                        Services
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className={`text-lg font-medium py-2 border-b border-white/5 ${currentPage === 'home' && activeSection === 'contact' ? 'text-gold' : 'text-white'}`}
                    >
                        Contact
                    </a>
                    <div className="flex flex-col gap-3 mt-4">
                        {deferredPrompt && (
                            <button 
                                onClick={handleInstallClick}
                                className="w-full text-center py-3 rounded-lg bg-white text-navy-dark font-bold hover:bg-gold transition-all flex items-center justify-center gap-2 animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.5)] border-2 border-gold"
                            >
                                <i className="fas fa-download"></i>
                                Install App
                            </button>
                        )}
                        <a 
                            href="#contact" 
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="w-full text-center py-3 rounded-lg bg-gradient-to-br from-gold to-gold-light text-navy-dark font-bold shadow-lg shadow-gold/20"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
