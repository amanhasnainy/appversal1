import React, { useEffect, useMemo, useRef, useState } from 'react';

const Services = () => {
  // Add animation styles
  const style = `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideTitleLeft {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-15px);
      }
    }

    /* Smooth easing curve */
    .smooth-ease {
      transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* Title - always visible */
    .service-title {
      opacity: 1;
    }

    /* Description - slides in with 120ms delay */
    .service-description {
      opacity: 0;
      transform: translateX(-60px);
      transition: all 800ms cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: 120ms;
    }

    .group:hover .service-description {
      opacity: 1;
      transform: translateX(0);
    }

    /* Icon - slides in with 240ms delay */
    .service-icon {
      opacity: 0;
      transform: translateX(-60px);
      transition: all 800ms cubic-bezier(0.22, 1, 0.36, 1);
      transition-delay: 240ms;
    }

    .group:hover .service-icon {
      opacity: 1;
      transform: translateX(0);
    }

    /* Card background transition */
    .service-card-wrapper {
      transition: all 600ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* Mobile: stack cards vertically, hide descriptions, and reduce sizes */
    @media (max-width: 768px) {
      .services-rail-wrapper {
        position: static !important;
        left: auto !important;
        right: auto !important;
        margin: 0 auto !important;
        overflow: visible !important;
        width: 100%;
        padding: 0 1rem;
      }
      .services-rail-wrapper .flex {
        transform: none !important;
        display: block !important;
      }
      .group {
        height: auto !important;
        padding-bottom: 1rem;
      }
      .service-card-wrapper {
        height: auto !important;
        padding: 1.25rem !important;
        display: flex !important;
        align-items: center !important;
        text-align: center !important;
      }
      .service-description {
        display: none !important;
      }
      .service-title h3 {
        font-size: 1.25rem !important;
      }
      .service-icon svg,
      .service-icon {
        width: 2.5rem !important;
        height: 2.5rem !important;
        margin-bottom: 0.5rem !important;
      }
    }

    /* Large screens (WebKit targeted improvements) */
    @media (min-width: 1400px) {
      .services-rail-wrapper {
        padding-left: 6rem !important;
        padding-right: 6rem !important;
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
      }
      section#solution h2 {
        font-size: clamp(2.5rem, 3rem + 1.2vw, 4.8rem) !important;
        line-height: 1.03 !important;
        max-width: 1100px !important;
        margin: 0 auto !important;
        text-align: center !important;
        display: block !important;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
      .group {
        width: 420px !important;
      }
      .service-card-wrapper {
        height: 720px !important;
        padding-left: 2.5rem !important;
        padding-right: 2.5rem !important;
        -webkit-transform: translateZ(0);
        -webkit-backface-visibility: hidden;
      }
      .service-title h3 {
        font-size: calc(1.1rem + 0.6vw) !important;
      }
      .service-description p {
        font-size: calc(0.95rem + 0.25vw) !important;
      }
    }

    /* Ultra-wide screens: ensure service cards and titles don't overlap */
    @media (min-width: 2040px) {
      .services-rail-wrapper {
        padding-left: 6.5rem !important;
        padding-right: 6.5rem !important;
      }

      .group {
        width: 480px !important;
      }

      .service-card-wrapper {
        height: 760px !important;
        padding-left: 2.25rem !important;
        padding-right: 2.25rem !important;
      }

      .service-title h3 {
        font-size: 28px !important;
        line-height: 1.06 !important;
      }

      .service-description p {
        font-size: 1rem !important;
      }
    }

    @media (min-width: 2560px) {
      .services-rail-wrapper {
        padding-left: 8rem !important;
        padding-right: 8rem !important;
      }

      .group {
        width: 520px !important;
      }

      .service-card-wrapper {
        height: 820px !important;
        padding-left: 3rem !important;
        padding-right: 3rem !important;
      }

      /* cap title size so it wraps cleanly inside wider cards */
      .service-title h3 {
        font-size: 32px !important;
        line-height: 1.05 !important;
      }

      .service-description p {
        font-size: 1.05rem !important;
      }
    }
  `;

  const services = [
    {
      title: 'AI Enterprise Custom Development',
      description: 'We strongly believe that success is based on pro-active and bespoke approach in a professional and ethical environment that leads to creative solutions and fully secured remains.',
      highlighted: true,
    },
    {
      title: 'AI Creatives',
      description: 'Leveraging artificial intelligence to generate stunning, brand-aligned creative content that captures attention and drives engagement across all platforms.',
      highlighted: false,
    },
    {
      title: 'ASO',
      description: 'App Store Optimization strategies that maximize visibility, improve rankings, and increase organic downloads through data-driven keyword and metadata optimization.',
      highlighted: false,
    },
    {
      title: 'Paid Media User Acquisition',
      description: 'Strategic paid media campaigns designed to acquire high-quality users efficiently while optimizing cost per installation and lifetime value metrics.',
      highlighted: false,
    },
    {
      title: 'AEO',
      description: 'App Experience Optimization focusing on user retention, engagement, and monetization through intelligent in-app analytics and behavioral improvements.',
      highlighted: false,
    },
    
  ];

  const trackRef = useRef(null);
  const railRef = useRef(null);
  const lastXRef = useRef(null);
  const maxOffsetRef = useRef(0);
  const targetOffsetRef = useRef(0);
  const rafRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const easing = 0.12;
  const speed = 1.15;

  const recalcBounds = () => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;
    const maxOffset = Math.max(0, rail.scrollWidth - track.clientWidth);
    maxOffsetRef.current = maxOffset;
    targetOffsetRef.current = Math.min(targetOffsetRef.current, maxOffset);
    setOffset((current) => Math.min(current, maxOffset));
  };

  useEffect(() => {
    recalcBounds();
    const onResize = () => recalcBounds();
    window.addEventListener('resize', onResize);

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => recalcBounds());
      if (trackRef.current) ro.observe(trackRef.current);
      if (railRef.current) ro.observe(railRef.current);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      if (ro) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateToTarget = () => {
    rafRef.current = null;
    setOffset((current) => {
      const target = targetOffsetRef.current;
      const next = current + (target - current) * easing;
      if (Math.abs(target - next) < 0.5) return target;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animateToTarget);
      return next;
    });
  };

  const onMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const track = trackRef.current;
    if (!track) return;
    if (lastXRef.current == null) {
      lastXRef.current = e.clientX;
      return;
    }
    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Move mouse right => cards slide right-to-left (increase offset)
    const maxOffset = maxOffsetRef.current;
    const nextTarget = Math.min(
      maxOffset,
      Math.max(0, targetOffsetRef.current + deltaX * speed)
    );
    targetOffsetRef.current = nextTarget;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(animateToTarget);
  };

  const onMouseLeave = () => {
    lastXRef.current = null;
  };

  const railStyle = useMemo(
    () => ({
      transform: `translate3d(${-offset}px, 0, 0)`,
      WebkitTransform: `translate3d(${-offset}px, 0, 0)`,
      WebkitBackfaceVisibility: 'hidden',
    }),
    [offset]
  );

  return (
    <section id="solution" className="pt-20 pb-0 px-0 bg-white">
      <style>{style}</style>
      <div className="w-full mx-0">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-white border border-gray-200 rounded-full px-10 py-4 text-base font-semibold text-gray-900 shadow-sm mb-8">
            Our Services
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900">AI-Powered</span>
            <span className="text-red-600"> Growth Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end AI infrastructure for modern app marketing
          </p>
        </div>

        {/* Services Rail */}
        <div
          ref={trackRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative w-full md:w-screen md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw] overflow-hidden mt-20 services-rail-wrapper"
        >
          <div
            ref={railRef}
            style={railStyle}
            className="flex will-change-transform"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group h-auto md:h-[720px] flex-none w-full md:w-1/2 lg:w-[320px] xl:w-[360px]"
              >
                <div className="service-card-wrapper w-full h-auto md:h-full bg-white hover:bg-[#8B0000] border border-gray-100 hover:border-[#8B0000] cursor-pointer relative overflow-hidden flex flex-col justify-start items-center md:items-start text-center md:text-left px-4 md:px-0 py-6 md:py-8">
                  {/* Title - always visible */}
                  <div className="service-title px-8">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#8B0000] group-hover:text-white transition-colors duration-800">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - slides in from left */}
                  <div className="service-description mt-4 px-8 hidden md:block">
                    <p className="text-gray-900 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-800 text-justify">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Icon - slides in from left, positioned at bottom center */}
                  <div className="service-icon mx-auto mt-auto mb-8">
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <defs>
                        <mask id={`service-arrow-cutout-${index}`}>
                          <rect width="48" height="48" fill="black" />
                          <circle cx="24" cy="24" r="20" fill="white" />
                          <path
                            d="M20 16l12 8-12 8"
                            fill="none"
                            stroke="black"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </mask>
                      </defs>
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        mask={`url(#service-arrow-cutout-${index})`}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
