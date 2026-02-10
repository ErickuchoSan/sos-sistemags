import './Footer.css';

const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#por-que', label: '¿Por qué elegirnos?' },
    { href: '#contacto', label: 'Contacto' },
];

const services = [
    'Equipos de Cómputo',
    'Celulares y Smartphones',
    'Tablets e iPads',
    "Mac's y Apple",
    'Consolas de Videojuegos',
    'Software y Formateo',
    'Redes e Instalaciones',
    'Recuperación de Datos',
    'Video-vigilancia',
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/Logo-SOS.jpeg" alt="SOS SistemAGS" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="footer-logo-name">SistemAGS</span>
                                <span className="footer-logo-slogan">SOMOS LA SOLUCIÓN</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Tu aliado tecnológico en Aguascalientes. Expertos en reparación y
                            mantenimiento de equipos de cómputo, celulares, tablets y dispositivos Apple.
                        </p>
                        <div className="footer-social">
                            <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/524499281035" className="footer-social-link" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-section-title">Enlaces Rápidos</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="footer-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-section-title">Servicios</h4>
                        <ul className="footer-links">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href="#servicios" className="footer-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-section-title">Contacto</h4>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                Cto. Merlot 102, Pozo Bravo,<br />
                                20126 Aguascalientes, Ags.
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                <a href="mailto:sistemasabores@outlook.com">
                                    sistemasabores@outlook.com
                                </a>
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                Lun - Vie: 9:00 - 19:00
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} <a href="#inicio">SOS SistemAGS</a>. Todos los derechos reservados.
                    </p>
                    <div className="footer-legal">
                        <a href="#" className="footer-legal-link">Privacidad</a>
                        <a href="#" className="footer-legal-link">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
