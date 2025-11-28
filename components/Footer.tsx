import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-dark border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded flex items-center justify-center text-navy-dark font-bold text-sm">A</div>
                            <span className="text-xl font-bold text-white">agura<span className="text-gold">fi</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Transforming businesses through data-driven digital marketing strategies that deliver measurable growth and exceptional ROI.
                        </p>
                        <div className="flex gap-3">
                            {['fa-linkedin-in', 'fa-twitter', 'fa-instagram', 'fa-facebook-f'].map((icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy-dark transition-all duration-300">
                                    <i className={`fab ${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            {['Digital Strategy', 'Performance Marketing', 'Social Media Marketing', 'Content Marketing', 'Brand Consulting'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Contact', 'Careers', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Agurafi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;