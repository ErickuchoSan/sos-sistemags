import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollReveal';
import './Header.css';

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#por-que', label: '¿Por qué elegirnos?' },
    { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isScrolled } = useScrollPosition();

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <a href="#inicio" className="logo">
                    <img src="/Logo-SOS.jpeg" alt="SOS SistemAGS" className="logo-img" />
                    <div className="logo-text">
                        <span className="logo-name">SistemAGS</span>
                        <span className="logo-slogan">SOMOS LA SOLUCIÓN</span>
                    </div>
                </a>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="nav-cta">
                        <a href="#contacto" className="btn btn-gold" onClick={handleNavClick}>
                            ¡Contáctanos!
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
