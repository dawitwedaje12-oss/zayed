import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Construct email body
        const subject = `New Inquiry from Agurafi Website: ${formState.service || 'General'}`;
        const body = `Name: ${formState.firstName} ${formState.lastName}
Email: ${formState.email}
Company: ${formState.company}
Service Interest: ${formState.service}

Message:
${formState.message}`;

        // Create mailto link
        const mailtoLink = `mailto:agurafidigetalmarketing@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success state UI
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                service: '',
                message: ''
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-navy-medium/30 relative">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <span className="inline-block px-5 py-2 rounded-full border border-gold/20 bg-gold-dim text-gold text-sm font-semibold mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Let's Start Your <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Transformation</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Ready to elevate your digital presence? Contact us to discuss how Agurafi can drive exceptional results for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Connect With Our Team</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our digital marketing experts are ready to understand your unique challenges and craft a tailored strategy that delivers measurable growth and ROI.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: 'fa-envelope', title: 'Email Us', desc: 'Get a response within 24 hours', link: 'mailto:agurafidigetalmarketing@gmail.com', linkText: 'agurafidigetalmarketing@gmail.com' },
                                { icon: 'fa-phone', title: 'Call Us', desc: 'Mon-Fri from 9am to 6pm', link: 'tel:+251953464729', linkText: '+251 953 464 729' },
                                { icon: 'fa-map-marker-alt', title: 'Visit Us', desc: 'Schedule an in-person consultation', link: 'https://maps.google.com/?q=9°00\'25.6"N+38°46\'11.8"E', linkText: 'Bole Dembel 9°00\'25.6"N 38°46\'11.8"E' }
                            ].map((method, idx) => (
                                <div key={idx} className="flex gap-5 p-6 bg-navy-card/50 border border-white/5 rounded-2xl hover:border-gold/30 hover:bg-navy-card/80 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-xl">
                                        <i className={`fas ${method.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{method.title}</h4>
                                        <p className="text-gray-400 text-sm mb-1">{method.desc}</p>
                                        <a 
                                            href={method.link} 
                                            target={method.icon === 'fa-map-marker-alt' ? '_blank' : undefined}
                                            rel={method.icon === 'fa-map-marker-alt' ? 'noopener noreferrer' : undefined}
                                            className="text-gold font-medium hover:text-gold-light transition-colors break-all"
                                        >
                                            {method.linkText}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {['fa-linkedin-in', 'fa-twitter', 'fa-instagram', 'fa-facebook-f'].map((icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-navy-card border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy-dark hover:-translate-y-1 transition-all duration-300">
                                    <i className={`fab ${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-navy-card backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold mb-2">Schedule Your Consultation</h3>
                            <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        required
                                        value={formState.firstName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-gray-600"
                                        placeholder="John" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        required
                                        value={formState.lastName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-gray-600"
                                        placeholder="Doe" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-gray-600"
                                    placeholder="john@company.com" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    value={formState.company}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-gray-600"
                                    placeholder="Company Name" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Interest</label>
                                <select 
                                    id="service"
                                    value={formState.service}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all text-gray-300"
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="Digital Strategy">Digital Strategy</option>
                                    <option value="Performance Marketing">Performance Marketing</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Content Marketing">Content Marketing</option>
                                    <option value="Video Production">Video Production</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                                <textarea 
                                    id="message" 
                                    rows={4} 
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-3 bg-navy-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-gray-600 resize-none"
                                    placeholder="Tell us about your goals..." 
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting || isSubmitted}
                                className={`w-full py-4 rounded-xl font-bold text-navy-dark transition-all transform hover:-translate-y-1 shadow-lg ${
                                    isSubmitted 
                                        ? 'bg-green-500 text-white cursor-default' 
                                        : 'bg-gradient-to-r from-gold to-gold-light hover:shadow-gold/30'
                                }`}
                            >
                                {isSubmitting ? (
                                    <span><i className="fas fa-spinner fa-spin mr-2"></i> Opening Email Client...</span>
                                ) : isSubmitted ? (
                                    <span><i className="fas fa-check mr-2"></i> Ready to Send!</span>
                                ) : (
                                    <span><i className="fas fa-paper-plane mr-2"></i> Send Message</span>
                                )}
                            </button>
                            
                            <p className="text-center text-xs text-gray-500">
                                This will open your default email client to send the message.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;