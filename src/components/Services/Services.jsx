import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

const services = [
    {
        id: 1,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Equipos de Cómputo',
        description: 'Venta, actualización y reparación de equipos de cómputo de escritorio y laptops. Trabajamos con todas las marcas.',
    },
    {
        id: 2,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        title: 'Celulares y Smartphones',
        description: 'Reparación de celulares, iPhones y smartphones de todas las marcas. Cambio de pantalla, batería y más.',
    },
    {
        id: 3,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
            </svg>
        ),
        title: 'Tablets e iPads',
        description: 'Servicio especializado para tablets Android e iPads. Reparación de pantalla, software y hardware.',
    },
    {
        id: 4,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
        ),
        title: 'Mac\'s y Apple',
        description: 'Expertos en productos Apple. Reparación y mantenimiento de MacBooks, iMacs y todos los productos del ecosistema Apple.',
    },
    {
        id: 5,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'Recuperación de Datos',
        description: 'Recuperación de información borrada accidentalmente o debido a problemas con el equipo. Sujeto a diagnóstico.',
    },
    {
        id: 6,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
        title: 'Video-vigilancia',
        description: 'Instalación de sistemas de cámaras de seguridad y video-vigilancia para hogares y negocios.',
    },
];

export default function Services() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="servicios" className="services section">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`services-header ${headerVisible ? 'reveal active' : 'reveal'}`}
                >
                    <span className="services-label">💼 Nuestros Servicios</span>
                    <h2 className="services-title">
                        Soluciones <span className="text-gradient-blue">Tecnológicas</span> Completas
                    </h2>
                    <p className="services-description">
                        Ofrecemos una amplia gama de servicios para mantener tus dispositivos funcionando perfectamente.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`service-card ${isVisible ? 'reveal active' : 'reveal'}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="service-icon">
                {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#contacto" className="service-link">
                Más información
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </a>
        </div>
    );
}
