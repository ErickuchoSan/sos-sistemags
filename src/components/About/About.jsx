import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        text: 'Diagnóstico Gratuito',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        text: 'Servicio Rápido',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        text: 'Garantía en Servicios',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        text: 'Atención Personalizada',
    },
];

export default function About() {
    const [imageRef, imageVisible] = useScrollReveal();
    const [contentRef, contentVisible] = useScrollReveal();

    return (
        <section id="nosotros" className="about section">
            <div className="container">
                <div className="about-grid">
                    {/* Image Side */}
                    <div
                        ref={imageRef}
                        className={`about-image-wrapper ${imageVisible ? 'reveal active' : 'reveal'}`}
                    >
                        <div className="about-image-container">
                            <div className="about-image">
                                <div className="about-image-content">
                                    <img src="/Logo-SOS.jpeg" alt="SOS SistemAGS" className="about-image-logo-img" />
                                </div>
                            </div>
                        </div>
                        <div className="about-badge">
                            <span className="about-badge-icon">🏆</span>
                            <span className="about-badge-text">Garantía de<br />Confianza</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div
                        ref={contentRef}
                        className={`about-content ${contentVisible ? 'reveal active' : 'reveal'}`}
                    >
                        <span className="about-label">🏢 Acerca de Nosotros</span>
                        <h2 className="about-title">
                            Tu <span className="text-gradient-gold">Aliado Tecnológico</span> en Aguascalientes
                        </h2>
                        <p className="about-text">
                            En <strong>SOS SistemAGS</strong> nos especializamos en brindar soluciones tecnológicas
                            integrales. Contamos con años de experiencia en reparación y mantenimiento de
                            equipos de cómputo, celulares, tablets y dispositivos Apple.
                        </p>
                        <p className="about-text">
                            Nuestro compromiso es ofrecer un servicio de calidad, con precios justos y
                            garantía en todos nuestros trabajos. <strong>Somos la Solución</strong> que
                            necesitas para mantener tus dispositivos funcionando perfectamente.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div key={index} className="about-feature">
                                    <div className="about-feature-icon">
                                        {feature.icon}
                                    </div>
                                    <span className="about-feature-text">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="about-cta">
                            <a href="#contacto" className="btn btn-primary">
                                Contáctanos Ahora
                            </a>
                            <a href="#servicios" className="btn btn-secondary">
                                Ver Servicios
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
