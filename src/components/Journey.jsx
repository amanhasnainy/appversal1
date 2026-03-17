import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2009',
    text: 'We started with App development',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M6 14c1.5-3.5 6-5.5 12-6-0.6 5.9-2.6 10.4-6 12-1.2 0.6-2.6 0.8-3.8 0.5l-2.2 2.2a1 1 0 0 1-1.4-1.4l2.2-2.2C5.1 19.6 5 18.3 5.5 17c0.2-0.5 0.4-1 0.5-1.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 9.5a2 2 0 1 0-2.8 2.8 2 2 0 0 0 2.8-2.8Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    year: '2010',
    text: 'Opened our first office in Mumbai',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 20V7a2 2 0 0 1 2-2h6v15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 10h6a2 2 0 0 1 2 2v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 8.5h3M6.5 11h3M6.5 13.5h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.5 13h3M14.5 15.5h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 20h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2011',
    text: 'Reached our first 10 people, secured leading contracts from the USA',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 20c1.8-3.6 5.1-5 8-5s6.2 1.4 8 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2012',
    text: 'Launched ReviewsCollect',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3v4M12 17v4M3 12h4M17 12h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 8l8 8M16 8l-8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2013',
    text: 'Sold ReviewsCollect, exited profitably',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3v4M12 17v4M3 12h4M17 12h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 8l8 8M16 8l-8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2014',
    text: 'Launched App marketing as a vertical',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M6 4h12v16H6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 7h6M9 11h6M9 15h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2015',
    text: 'Handled MoM App marketing for more than 1,000+ brands globally',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 10a4 4 0 1 1 8 0v3a4 4 0 0 1-8 0v-3Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 3v3M6 11H3M21 11h-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2016',
    text: 'Reached $1M in annual revenue with 90% sales from the USA',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 20V7a2 2 0 0 1 2-2h6v15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 10h6a2 2 0 0 1 2 2v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 20h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2017',
    text: 'Expanded presence into App Store Optimization',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 20c1.8-3.6 5.1-5 8-5s6.2 1.4 8 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2018',
    text: 'EMilestone of 50 people reached',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 12h16M8 6h8M8 18h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12l-2 2m14-2 2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2019',
    text: 'Hit $2M in annual revenue',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 4l2.5 5 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8L12 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    year: '2020',
    text: 'Launched AppAdsWin – a programmatic advertising DSP',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 6h16v10H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 20h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2021',
    text: 'Expanded our presence in Delhi NCR, setup first office',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 10a4 4 0 1 1 8 0v3a4 4 0 0 1-8 0v-3Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 3v3M6 11H3M21 11h-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    year: '2022',
    text: 'Local office incorporated in Fremont, California',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: '2023',
    text: 'Moved to heavy tech + creative infrastructure – milestone 200+ people – complete mobile-first AI stack',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M3 3v18h18M18 9l-5 5-4-4-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: '2024',
    text: 'Secured mega enterprise client deals – launched complete in-app engagement platform with AI',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: '2025',
    text: 'Complete AI development for enterprises, launched AEO & moved into UGC Creations via AI Ads',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    year: '2026',
    text: 'On track to close $10M revenue. There\'s always one more thing…',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function TimelineNode({ index, isLeft, centerY, progress, desktopConfig, total }) {
  const threshold = index / Math.max(total - 1, 1);
  const reveal = useTransform(progress, [threshold - 0.1, threshold - 0.01], [0, 1]);
  const smoothReveal = useSpring(reveal, { stiffness: 160, damping: 24, mass: 0.5 });
  const scale = useTransform(smoothReveal, [0, 1], [0.6, 1]);
  const opacity = smoothReveal;
  const pillTop = centerY - desktopConfig.pillHeight / 2 + desktopConfig.pillOffset;

  return (
    <motion.div
      className="absolute z-10"
      style={{
        top: `${pillTop}px`,
        left: isLeft ? `${desktopConfig.leftPillX}px` : 'auto',
        right: isLeft ? 'auto' : `${desktopConfig.rightPillX}px`,
        scale,
        opacity,
      }}
    >
      <div className="h-[96px] w-[44px] rounded-full bg-white shadow-[0_0_30px_rgba(255,35,63,0.4),0_8px_24px_rgba(83,2,12,0.2),inset_0_1px_2px_rgba(255,255,255,0.8)] flex items-center justify-center">
        <div className="h-[76px] w-[28px] rounded-full bg-[#8B0000]" />
      </div>
    </motion.div>
  );
}

function TimelineCard({ index, isLeft, centerY, progress, desktopConfig, total, milestone }) {
  const threshold = index / Math.max(total - 1, 1);
  const reveal = useTransform(progress, [threshold - 0.12, threshold - 0.02], [0, 1]);
  const smoothReveal = useSpring(reveal, { stiffness: 160, damping: 24, mass: 0.6 });
  const opacity = smoothReveal;
  const x = useTransform(smoothReveal, [0, 1], [isLeft ? -40 : 40, 0]);
  const cardTop = centerY - desktopConfig.cardOffset;
  const cardLeft = isLeft ? desktopConfig.leftCardX : desktopConfig.rightCardX;

  return (
    <motion.div
      className="absolute w-[420px]"
      style={{ top: `${cardTop}px`, left: `${cardLeft}px`, opacity, x }}
    >
      <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_0_40px_rgba(255,35,63,0.12),0_10px_30px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] px-8 py-8 h-[160px] overflow-hidden">
        <div className="flex items-start gap-5 h-full">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#8B0000] text-white shadow-sm">
            {milestone.icon}
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <div className="text-4xl font-extrabold text-[#8B0000]">{milestone.year}</div>
            <p className="mt-2 text-gray-600 line-clamp-2">{milestone.text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const sectionRef = useRef(null);

  const desktopConfig = {
    startY: 280,
    gap: 270,
    leftPillX: 86,
    rightPillX: 90,
    leftCardX: 190,
    rightCardX: 580,
    pillHeight: 96,
    pillWidth: 44,
    pillOffset: -120,
    cardOffset: 210,
    trackWidth: 1200,
    cornerRadius: 30,
    bottomPadding: 100,
  };

  const nodeCenters = useMemo(
    () => milestones.map((_, index) => desktopConfig.startY + index * desktopConfig.gap),
    [desktopConfig.startY, desktopConfig.gap]
  );
  const desktopHeight = nodeCenters[nodeCenters.length - 1] + desktopConfig.bottomPadding;
  const desktopViewBox = `0 0 1200 ${desktopHeight}`;

  const desktopPath = useMemo(() => {
    if (!nodeCenters.length) {
      return '';
    }

    const r = desktopConfig.cornerRadius;
    const leftTrackX = desktopConfig.leftPillX + desktopConfig.pillWidth / 2;
    const rightTrackX =
      desktopConfig.trackWidth - desktopConfig.rightPillX - desktopConfig.pillWidth / 2;
    const tailLeftX = leftTrackX + 102;
    const tailRightX = rightTrackX - 102;

    let d = `M${leftTrackX} 0 V${nodeCenters[0] - r} `;
    d += `Q${leftTrackX} ${nodeCenters[0]} ${leftTrackX + r} ${nodeCenters[0]} `;

    for (let i = 0; i < nodeCenters.length - 1; i += 1) {
      const currentY = nodeCenters[i];
      const nextY = nodeCenters[i + 1];
      const goingRight = i % 2 === 0;
      const horizontalTarget = goingRight ? rightTrackX : leftTrackX;
      const horizontalEnd = goingRight ? rightTrackX - r : leftTrackX + r;
      const verticalX = goingRight ? rightTrackX : leftTrackX;
      const verticalEnd = goingRight ? rightTrackX - r : leftTrackX + r;

      d += `H${horizontalEnd} `;
      d += `Q${horizontalTarget} ${currentY} ${horizontalTarget} ${currentY + r} `;
      d += `V${nextY - r} `;
      d += `Q${horizontalTarget} ${nextY} ${verticalEnd} ${nextY} `;

      if (i === nodeCenters.length - 2) {
        d += `H${(nodeCenters.length - 1) % 2 === 1 ? tailRightX : tailLeftX}`;
      }
      continue;
    }

    return d.trim();
  }, [nodeCenters, desktopConfig]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const containerHeight = typeof window !== 'undefined' ? window.innerHeight : 700;
  const initialProgress = Math.min(containerHeight / Math.max(desktopHeight, 1), 1);
  const normalizedProgress = useTransform(scrollYProgress, [0, 1], [initialProgress, 1], { clamp: true });
  const pathProgress = useSpring(normalizedProgress, {
    stiffness: 90,
    damping: 28,
    mass: 1,
  });

  return (
    <section id="journey" ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-6 py-2 text-sm font-semibold text-[#8B0000]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#8B0000] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M8 7h8M8 12h5M8 17h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Our Journey
          </div>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-[#8B0000]">
            17+ Years of Innovation
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            From a small app development startup to a global AI-first enterprise powerhouse
          </p>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="relative mt-16 lg:hidden">
          <div
            className="absolute left-4 top-0 bottom-0 w-[6px] rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, #53020C 0%, #FF233F 100%)',
            }}
          />

          <div className="space-y-10 pl-10">
            {milestones.map((item) => (
              <div key={item.year} className="relative">
                <div
                  className="absolute -left-[30px] top-6 h-5 w-5 rounded-full border-[6px] border-white"
                  style={{ backgroundColor: '#8B0000' }}
                />

                <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#8B0000] text-white shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-[#8B0000]">
                        {item.year}
                      </div>
                      <p className="mt-2 text-gray-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: screenshot-style curved timeline */}
        <div className="relative mx-auto mt-20 hidden lg:block max-w-[1200px]">
          {/* Edge fades to suggest scrolling */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none rounded-t-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none rounded-b-2xl" />

          <div className="w-full overflow-visible">
            <div className="relative w-full" style={{ height: `${desktopHeight}px` }}>
              {/* Path */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox={desktopViewBox}
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="journeyStroke"
                    x1="1200"
                    y1="0"
                    x2="0"
                    y2={desktopHeight}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#53020C" />
                    <stop offset="1" stopColor="#FF233F" />
                  </linearGradient>
                </defs>

                <motion.path
                  d={desktopPath}
                  stroke="url(#journeyStroke)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: pathProgress }}
                />
              </svg>

              {/* Timeline capsules (nodes) */}
              {nodeCenters.map((centerY, index) => (
                <TimelineNode
                  key={`pill-${milestones[index].year}`}
                  index={index}
                  total={milestones.length}
                  isLeft={index % 2 === 0}
                  centerY={centerY}
                  progress={pathProgress}
                  desktopConfig={desktopConfig}
                />
              ))}

              {/* Milestone cards */}
              {nodeCenters.map((centerY, index) => (
                <TimelineCard
                  key={`card-${milestones[index].year}`}
                  index={index}
                  total={milestones.length}
                  isLeft={index % 2 === 0}
                  centerY={centerY}
                  progress={pathProgress}
                  desktopConfig={desktopConfig}
                  milestone={milestones[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
