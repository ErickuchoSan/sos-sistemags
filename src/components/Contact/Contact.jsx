import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Dirección',
        value: 'Cto. Merlot 102, Pozo Bravo, 20126 Aguascalientes, Ags., México',
        href: 'https://maps.google.com/?q=Cto.+Merlot+102,+Pozo+Bravo,+20126+Aguascalientes',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'sistemasabores@outlook.com',
        href: 'mailto:sistemasabores@outlook.com',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: 'Horario',
        value: 'Lunes a Viernes: 9:00 - 19:00',
    },
];

export default function Contact() {
    const [infoRef, infoVisible] = useScrollReveal();
    const [formRef, formVisible] = useScrollReveal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        const whatsappMessage = `Hola! Me interesa un servicio.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
        window.open(`https://wa.me/524499281035?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    return (
        <section id="contacto" className="contact section">
            <div className="container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div
                        ref={infoRef}
                        className={`contact-info ${infoVisible ? 'reveal active' : 'reveal'}`}
                    >
                        <span className="contact-label">📞 Contáctanos</span>
                        <h2 className="contact-title">
                            ¿Necesitas <span className="text-gradient-blue">Ayuda</span>?
                        </h2>
                        <p className="contact-text">
                            Estamos aquí para resolver todos tus problemas tecnológicos.
                            Contáctanos y recibe atención personalizada.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-item-icon">
                                        {item.icon}
                                    </div>
                                    <div className="contact-item-content">
                                        <div className="contact-item-label">{item.label}</div>
                                        <div className="contact-item-value">
                                            {item.href ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                item.value
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="contact-social">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Facebook"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/524499281035"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="WhatsApp"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>

                        {/* Map */}
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.3041!2d-102.3193!3d21.8853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDUzJzA3LjEiTiAxMDLCsDE5JzA5LjUiVw!5e0!3m2!1ses!2smx!4v1234567890"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación SOS SistemAGS"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        ref={formRef}
                        className={`contact-form-wrapper ${formVisible ? 'reveal active' : 'reveal'}`}
                    >
                        <h3 className="contact-form-title">Envíanos un Mensaje</h3>
                        <p className="contact-form-subtitle">
                            Cuéntanos sobre tu problema y te contactaremos lo antes posible.
                        </p>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Nombre completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Tu nombre"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Correo electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        placeholder="(449) 123-4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="service">Servicio de interés</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="form-input"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="computadoras">Equipos de Cómputo</option>
                                        <option value="celulares">Celulares / Smartphones</option>
                                        <option value="tablets">Tablets / iPads</option>
                                        <option value="mac">Mac's / Apple</option>
                                        <option value="consolas">Consolas de Videojuegos</option>
                                        <option value="software">Software y Formateo</option>
                                        <option value="redes">Redes e Instalaciones</option>
                                        <option value="datos">Recuperación de Datos</option>
                                        <option value="vigilancia">Video-vigilancia</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Describe tu problema o consulta..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-gold form-submit">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
