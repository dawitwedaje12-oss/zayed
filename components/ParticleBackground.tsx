import React, { useEffect, useState } from 'react';

interface Particle {
    id: number;
    size: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
}

const ParticleBackground: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const particleCount = 50;
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                size: Math.random() * 5 + 1,
                left: Math.random() * 100,
                top: Math.random() * 100,
                delay: Math.random() * 15,
                duration: Math.random() * 10 + 15,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute bg-white/10 rounded-full animate-float"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;