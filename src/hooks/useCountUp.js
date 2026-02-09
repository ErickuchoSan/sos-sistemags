import { useState, useEffect, useRef } from 'react';

/**
 * Hook para animar un número de 0 al valor objetivo cuando entra en viewport
 * @param {number} end - Valor final
 * @param {number} duration - Duración en ms (default: 2000)
 * @param {string} suffix - Sufijo opcional (+, %, etc.)
 */
export function useCountUp(end, duration = 2000, suffix = '') {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let startTime = null;
                    const startValue = 0;
                    
                    const animate = (currentTime) => {
                        if (!startTime) startTime = currentTime;
                        const progress = Math.min((currentTime - startTime) / duration, 1);
                        
                        // Easing function (easeOutQuart for smooth deceleration)
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
                        
                        setCount(currentValue);
                        
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const displayValue = `${count}${suffix}`;
    
    return [ref, displayValue];
}

export default useCountUp;
