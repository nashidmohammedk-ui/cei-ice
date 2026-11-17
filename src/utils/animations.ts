import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLuxuryScrollAnimations = () => {
  useEffect(() => {
    // Only run if window is available
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Subtle parallax on background glows
      gsap.utils.toArray<HTMLElement>('.bg-radial-glow').forEach((el) => {
        gsap.to(el, {
          y: -40,
          opacity: 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });

      // Staggered reveal for section headings
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};
