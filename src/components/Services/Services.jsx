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
        description: 'Venta, reparación, armado y mantenimiento de laptops, escritorios y todo en uno. Transferencia de archivos de PC a PC.',
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
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
                <line x1="8" y1="2" x2="8" y2="4" />
                <line x1="16" y1="2" x2="16" y2="4" />
            </svg>
        ),
        title: 'Tablets e iPads',
        description: 'Servicio especializado para tablets Android e iPads. Reparación de pantalla, software y hardware.',
    },
    {
        id: 4,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
                <path d="M6 3a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
                <path d="M18 13a7 7 0 0 1-12 0" />
                <rect x="2" y="3" width="20" height="14" rx="3" ry="3" />
                <line x1="12" y1="17" x2="12" y2="22" />
            </svg>
        ),
        title: "Mac's y Apple",
        description: 'Reparación y mantenimiento de MacBooks, iMacs y todos los productos del ecosistema Apple.',
    },
    {
        id: 5,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="4" ry="4" />
                <circle cx="9" cy="12" r="2" />
                <circle cx="15" cy="10" r="1" />
                <circle cx="17" cy="12" r="1" />
                <circle cx="15" cy="14" r="1" />
                <circle cx="13" cy="12" r="1" />
            </svg>
        ),
        title: 'Consolas de Videojuegos',
        description: 'Reparación de Xbox, PlayStation y Nintendo. Mantenimiento preventivo y correctivo de todas las consolas.',
    },
    {
        id: 6,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M7 8l3 3-3 3" />
                <line x1="13" y1="14" x2="17" y2="14" />
            </svg>
        ),
        title: 'Software y Formateo',
        description: 'Formateos, instalación de antivirus, sistemas operativos, programas y restauración de sistema.',
    },
    {
        id: 7,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="6" width="22" height="12" rx="2" />
                <path d="M1 10h22" />
                <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                <circle cx="12" cy="14" r="2" />
            </svg>
        ),
        title: 'Redes e Instalaciones',
        description: 'Instalación de redes, configuración de cyber cafés y ensamble de workstations y PC gamer.',
    },
    {
        id: 8,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'Recuperación de Datos',
        description: 'Recuperación de información, respaldo de datos y transferencia de archivos. Sujeto a diagnóstico.',
    },
    {
        id: 9,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>
        ),
        title: 'Video-vigilancia',
        description: 'Venta e instalación de cámaras de seguridad y sistemas de video-vigilancia para hogares y negocios.',
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
