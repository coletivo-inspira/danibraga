import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils';

gsap.registerPlugin(ScrollTrigger);

const Animations = (() => {
  const REVEAL_SELECTOR = '[data-reveal], .reveal, .reveal--up, .reveal--left, .reveal--right, .reveal--scale';
  const PARALLAX_SELECTOR = '[data-parallax]';

  function init() {
    if (prefersReducedMotion()) {
      document.querySelectorAll(REVEAL_SELECTOR).forEach(el => el.classList.add('is-visible'));
      return;
    }

    initReveal();
    initParallax();
    initStagger();
    initCounters();
  }

  function initReveal() {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);
    elements.forEach(el => {
      let y = 0, x = 0, scale = 1;
      const htmlEl = el as HTMLElement;
      
      if (el.classList.contains('reveal--left') || htmlEl.dataset.revealDir === 'left') {
        x = -50;
      } else if (el.classList.contains('reveal--right') || htmlEl.dataset.revealDir === 'right') {
        x = 50;
      } else if (el.classList.contains('reveal--scale')) {
        scale = 0.9;
      } else {
        y = 40;
      }

      gsap.fromTo(el, 
        { autoAlpha: 0, x, y, scale },
        {
          autoAlpha: 1, x: 0, y: 0, scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }

  function initStagger() {
    const containers = document.querySelectorAll('[data-stagger]');
    containers.forEach(container => {
      const children = Array.from(container.children);
      const delay = parseFloat((container as HTMLElement).dataset.staggerDelay || '0.1');

      gsap.fromTo(children,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: delay,
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }

  function initParallax() {
    const els = document.querySelectorAll(PARALLAX_SELECTOR);
    els.forEach(el => {
      const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.3');
      
      gsap.to(el, {
        yPercent: speed * 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(el => {
      const target = parseInt((el as HTMLElement).dataset.count || '0', 10);
      const suffix = (el as HTMLElement).dataset.countSuffix || '';
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: target,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        onUpdate: function() {
          el.innerHTML = Math.round(obj.val) + suffix;
        }
      });
    });
  }

  return { init, initCounters };
})();

export default Animations;
