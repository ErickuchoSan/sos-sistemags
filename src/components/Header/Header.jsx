import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';
import './Header.css';

const navLinks = [
    { href: '#inicio', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { href: '#servicios', label: 'Servicios', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { href: '#nosotros', label: 'Nosotros', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { href: '#por-que', label: '¿Por qué elegirnos?', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { href: '#contacto', label: 'Contacto', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
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

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    {/* Botón cerrar (solo móvil) */}
                    <button className="nav-close" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Logo central (solo móvil) */}
                    <div className="nav-brand-section">
                        <img src="/Logo-SOS.jpeg" alt="SOS SistemAGS" className="nav-logo" />
                        <span className="nav-brand-name">SistemAGS</span>
                        <span className="nav-brand-slogan">SOMOS LA SOLUCIÓN</span>
                    </div>

                    {/* Links - Desktop: inline, Mobile: con iconos */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="nav-link"
                                onClick={handleNavClick}
                            >
                                <svg className="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={link.icon} />
                                </svg>
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA + Theme toggle (desktop) */}
                    <div className="nav-actions">
                        <a href="#contacto" className="btn btn-gold nav-cta-btn">
                            ¡Contáctanos!
                        </a>
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                        >
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                        </button>
                    </div>

                    {/* Footer del menú (solo móvil) */}
                    <div className="nav-footer">
                        <button
                            className="nav-theme-toggle"
                            onClick={toggleTheme}
                        >
                            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            <span>{theme === 'light' ? 'Modo oscuro' : 'Modo claro'}</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
