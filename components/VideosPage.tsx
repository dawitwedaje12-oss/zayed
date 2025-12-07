
import React from 'react';

// Placeholder data for videos
const VIDEOS = [
    {
        id: 1,
        title: "Perfume store",
        category: "Allure Essence",
        duration: "TikTok",
        views: "Viral",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKPxfDh/",
        isBrand: true
    },
    {
        id: 2,
        title: "Delivery Company",
        category: "Mela Express",
        duration: "TikTok",
        views: "5.8K",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKP7uxk/",
        isBrand: true
    },
    {
        id: 3,
        title: "Jewellery Shop",
        category: "Tsegaye Jewelry",
        duration: "TikTok",
        views: "2.4K",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKPuHkY/",
        isBrand: true
    },
    {
        id: 4,
        title: "Packers and Movers",
        category: "Mela Packers",
        duration: "TikTok",
        views: "980",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKqB73X/",
        isBrand: true
    },
    {
        id: 5,
        title: "Realstate Company",
        category: "Prime Realstate",
        duration: "TikTok",
        views: "125K",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKqQkke/",
        isBrand: true
    },
    {
        id: 6,
        title: "Real-estate Company",
        category: "Nor sheger Properties",
        duration: "TikTok",
        views: "3.1K",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKq9wyr/",
        isBrand: true
    },
    {
        id: 7,
        title: "Clothe Store",
        category: "Ark Fashion",
        duration: "TikTok",
        views: "4.2K",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKqaAgv/",
        isBrand: true
    },
    {
        id: 8,
        title: "Yegna Trading Showcase",
        category: "Social Content",
        duration: "TikTok",
        views: "Trending",
        icon: "fa-tiktok",
        link: "https://vm.tiktok.com/ZMAKVQdm2/",
        isBrand: true,
        image: "https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&w=800&q=80"
    }
];

const VideosPage: React.FC = () => {
    return (
        <section className="pt-32 pb-24 bg-navy-dark min-h-screen relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-20 w-64 h-64 bg-navy-medium rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="inline-block px-5 py-2 rounded-full border border-gold/20 bg-gold-dim text-gold text-sm font-semibold mb-6">
                        Portfolio
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
                        Our Past <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">Videos</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A curated collection of our most impactful motion graphics, commercials, and brand storytelling projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VIDEOS.map((video, idx) => {
                        const CardTag = video.link ? 'a' : 'div';
                        // @ts-ignore - Dynamic prop spreading for tag type
                        const cardProps = video.link ? {
                            href: video.link,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};

                        return (
                            <CardTag 
                                key={idx} 
                                id={`video-${video.id}`}
                                {...cardProps}
                                className="group bg-navy-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-gold/30 animate-fade-in block cursor-pointer" 
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                {/* Video Thumbnail Placeholder */}
                                <div className="relative h-56 bg-gradient-to-br from-navy-light to-navy-medium overflow-hidden">
                                    {/* Abstract Pattern or Image */}
                                    {/* @ts-ignore */}
                                    {video.image ? (
                                        <img 
                                            // @ts-ignore
                                            src={video.image} 
                                            alt={video.title} 
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        />
                                    ) : (
                                        <div className="absolute inset-0 opacity-10" style={{
                                            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}></div>
                                    )}
                                    
                                    {!video.image && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-gold group-hover:border-gold transition-all duration-300 z-10 scale-90 group-hover:scale-100">
                                                <i className={`fas ${video.link ? 'fa-external-link-alt' : 'fa-play'} text-white/80 group-hover:text-navy-dark ml-1 text-xl transition-colors`}></i>
                                            </div>
                                        </div>
                                    )}

                                    {video.image && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                                <i className={`fas ${video.link ? 'fa-external-link-alt' : 'fa-play'} text-navy-dark ml-1 text-xl`}></i>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Overlay Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${video.image ? 'from-navy-dark/90 via-navy-dark/20 to-transparent' : 'from-navy-dark/90 via-transparent to-transparent'}`}></div>
                                    
                                    {/* Video Info Overlay */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-xs font-mono font-bold backdrop-blur-sm border border-white/5 z-20">
                                        {video.duration}
                                    </div>
                                    <div className="absolute top-4 left-4 bg-gold/90 px-3 py-1 rounded-full text-navy-dark text-xs font-bold uppercase tracking-wide shadow-lg z-20">
                                        {video.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors line-clamp-2">
                                        {video.title}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between text-gray-400 text-sm mt-4 border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-2">
                                            {/* @ts-ignore - Property check */}
                                            <i className={`${video.isBrand ? 'fab' : 'fas'} ${video.icon} text-gold/70`}></i>
                                            <span>Agurafi Studios</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-eye"></i>
                                            <span>{video.views}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardTag>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-400 mb-6">Want to see what we can create for your brand?</p>
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="px-8 py-3 rounded-full font-bold text-navy-dark bg-gradient-to-r from-gold to-gold-light shadow-lg hover:shadow-gold/30 transition-transform hover:-translate-y-1"
                    >
                        Start a Project
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideosPage;
