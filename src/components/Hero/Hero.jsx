import { useCountUp } from '../../hooks/useCountUp';
import './Hero.css';

// Particle component for floating effects
function Particle({ index }) {
    const style = {
        '--tx': `${(Math.random() - 0.5) * 200}px`,
        '--ty': `${-300 - Math.random() * 200}px`,
        left: `${10 + Math.random() * 80}%`,
        bottom: `${-20}px`,
        animationDelay: `${index * 0.8}s`,
        animationDuration: `${4 + Math.random() * 3}s`,
    };
    return <div className="hero-particle" style={style} />;
}

// Animated stat component
function AnimatedStat({ value, suffix, label }) {
    const [ref, displayValue] = useCountUp(value, 2000, suffix);
    return (
        <div className="hero-stat" ref={ref}>
            <div className="hero-stat-value">{displayValue}</div>
            <div className="hero-stat-label">{label}</div>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="inicio" className="hero">
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="hero-gradient-orb hero-orb-1"></div>
                <div className="hero-gradient-orb hero-orb-2"></div>
                <div className="hero-gradient-orb hero-orb-3"></div>
                <div className="hero-grid"></div>
                {/* Floating Particles */}
                <div className="hero-particles">
                    {[...Array(12)].map((_, i) => (
                        <Particle key={i} index={i} />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    Expertos en tecnología en Aguascalientes
                </div>

                <h1 className="hero-title">
                    <span className="hero-title-line">Reparación y Venta de</span>
                    <span className="hero-title-line">
                        <span className="text-gradient-blue">Equipos de Cómputo</span>
                    </span>
                    <span className="hero-title-line">
                        <span className="hero-title-accent text-gradient-gold">Garantía de Confianza</span>
                    </span>
                </h1>

                <p className="hero-description">
                    Somos la solución para tu equipo de cómputo, celulares, iPhones, tablets,
                    iPads y Mac's. Servicio profesional garantizado en Aguascalientes.
                </p>

                <div className="hero-cta">
                    <a href="#servicios" className="btn btn-primary btn-glow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                        Ver Servicios
                    </a>
                    <a href="#contacto" className="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        Contáctanos
                    </a>
                </div>

                {/* Animated Stats */}
                <div className="hero-stats">
                    <AnimatedStat value={10} suffix="+" label="Años de Experiencia" />
                    <AnimatedStat value={1000} suffix="+" label="Clientes Satisfechos" />
                    <AnimatedStat value={100} suffix="%" label="Servicio Garantizado" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <span className="hero-scroll-text">Scroll</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    );
}

