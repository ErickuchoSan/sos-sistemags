import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#por-que', label: '¿Por qué elegirnos?' },
    { href: '#contacto', label: 'Contacto' },
];

// Sun icon for light mode
const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

// Moon icon for dark mode
const MoonIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isScrolled } = useScrollPosition();
    const { theme, toggleTheme } = useTheme();

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

                <div className="header-actions">
                    {/* Theme toggle */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile overlay */}
                <div
                    className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    {/* Logo en menú móvil */}
                    <div className="nav-header">
                        <img src="/Logo-SOS.jpeg" alt="SOS SistemAGS" className="nav-logo" />
                        <span className="nav-brand">SistemAGS</span>
                    </div>

                    <div className="nav-divider"></div>

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

                    <div className="nav-divider"></div>

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
