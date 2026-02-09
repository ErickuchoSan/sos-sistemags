import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyUs.css';

const reasons = [
    {
        icon: '⚡',
        title: 'Rápidos y Confiables',
        description: 'Entendemos el valor de tu tiempo. Ofrecemos diagnósticos rápidos y soluciones eficientes.',
    },
    {
        icon: '🛠️',
        title: 'Profesionales Expertos',
        description: 'Técnicos certificados con años de experiencia en reparación de todo tipo de dispositivos.',
    },
    {
        icon: '💾',
        title: 'Recuperamos tus Datos',
        description: 'Rescatamos información que parece perdida de discos duros, memorias y dispositivos dañados.',
    },
    {
        icon: '🔒',
        title: 'Garantía Total',
        description: 'Todos nuestros servicios incluyen garantía. Tu satisfacción es nuestra prioridad.',
    },
];

export default function WhyUs() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="por-que" className="why-us section">
            <div className="container">
                <div
                    ref={headerRef}
                    className={`why-us-header ${headerVisible ? 'reveal active' : 'reveal'}`}
                >
                    <span className="why-us-label">⭐ ¿Por Qué Elegirnos?</span>
                    <h2 className="why-us-title">
                        Nuestro <span className="text-gradient-gold">Compromiso</span> Contigo
                    </h2>
                    <p className="why-us-description">
                        Nos distinguimos por ofrecer un servicio excepcional respaldado por años de experiencia.
                    </p>
                </div>

                <div className="why-us-grid">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReasonCard({ reason, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`reason-card ${isVisible ? 'reveal active' : 'reveal'}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <span className="reason-number">0{index + 1}</span>
            <div className="reason-icon">{reason.icon}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-text">{reason.description}</p>
        </div>
    );
}
