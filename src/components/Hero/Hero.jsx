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
                {/* Floating Tech Icons */}
                <div className="hero-tech-icons">
                    {/* Laptop */}
                    <svg className="tech-icon tech-icon-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="2" y1="20" x2="22" y2="20" />
                    </svg>
                    {/* Phone */}
                    <svg className="tech-icon tech-icon-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                    {/* CPU Chip */}
                    <svg className="tech-icon tech-icon-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
                        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
                        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
                        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                    {/* Wrench/Tool */}
                    <svg className="tech-icon tech-icon-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    {/* Wifi */}
                    <svg className="tech-icon tech-icon-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    {/* Shield/Security */}
                    <svg className="tech-icon tech-icon-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    {/* Gamepad */}
                    <svg className="tech-icon tech-icon-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="2" y="6" width="20" height="12" rx="4" />
                        <line x1="6" y1="10" x2="6" y2="14" /><line x1="4" y1="12" x2="8" y2="12" />
                        <circle cx="15" cy="10" r="0.5" /><circle cx="18" cy="12" r="0.5" />
                    </svg>
                    {/* Camera */}
                    <svg className="tech-icon tech-icon-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                    </svg>
                    {/* Hard Drive */}
                    <svg className="tech-icon tech-icon-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <line x1="22" y1="12" x2="2" y2="12" />
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        <line x1="6" y1="16" x2="6.01" y2="16" /><line x1="10" y1="16" x2="10.01" y2="16" />
                    </svg>
                    {/* Settings/Gear */}
                    <svg className="tech-icon tech-icon-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                </div>
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

