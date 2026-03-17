import Robot from "./Robot";
import FloatingBalls from "./FloatingBalls";

const HomeHero = () => {
  return (
    <section className="homehero relative w-full h-[36vh] sm:h-[44vh] md:min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes slideUpIn {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glowIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up-1 {
          animation: slideUpIn 0.8s ease-out 0.3s both;
        }
        .animate-slide-up-2 {
          animation: slideUpIn 0.8s ease-out 1.5s both;
        }
        .animate-glow-in {
          animation: glowIn 0.8s ease-out 0s both;
        }
        .text-fill-layer {
          font-size: clamp(60px, 8vw, 110px);
          background: linear-gradient(180deg,#8B0000 0%,#3a0000 50%,#0D0000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          position: absolute;
          left: 0;
          transform: none;
          white-space: nowrap;
          pointer-events: none;
          color: transparent;
        }
        .text-stroke-layer {
          font-size: clamp(60px, 8vw, 110px);
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px #8B0000;
          letter-spacing: -0.03em;
          position: absolute;
          left: 0;
          transform: none;
          white-space: nowrap;
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .text-fill-layer,
          .text-stroke-layer {
            font-size: clamp(28px, 10vw, 48px);
            position: relative;
            left: auto;
            top: auto;
            white-space: normal;
            -webkit-text-stroke: 0.9px #8B0000;
            margin-top: 0.12rem;
          }

          /* Show only the top portion of the robot on small screens */
          .robot-wrapper {
            -webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            /* nudge robot slightly down so only upper half shows within the reduced hero */
            transform: translateY(10%);
            -webkit-transform: translateY(10%);
          }
        }

        /* Standard laptop screens (768px - 1400px) */
        @media (min-width: 768px) and (max-width: 1399px) {
          .text-fill-layer,
          .text-stroke-layer {
            font-size: clamp(60px, 7vw, 90px) !important;
          }

          .text-stroke-layer {
            -webkit-text-stroke: 1.6px #8B0000;
          }

          p[class*="animate-slide-up"] {
            font-size: clamp(14px, 3vw, 22px) !important;
          }
        }

        /* 14"-16" laptops (1400px - 1599px): keep headline contained */
        @media (min-width: 1400px) and (max-width: 1599px) {
          .text-fill-layer,
          .text-stroke-layer {
            font-size: clamp(80px, 12vw, 160px) !important;
          }

          .text-stroke-layer {
            -webkit-text-stroke: 1.9px #8B0000;
          }

          .homehero p[class*="animate-slide-up"] {
            font-size: clamp(16px, 2.2vw, 24px) !important;
          }
        }

        /* Large screens (WebKit targeted improvements) */
        @media (min-width: 1600px) {
          .homehero {
            min-height: 100vh !important;
            height: auto !important;
          }

          .text-fill-layer,
          .text-stroke-layer {
            font-size: clamp(120px, 14vw, 240px) !important;
            -webkit-backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }

          .text-stroke-layer {
            -webkit-text-stroke: 2.5px #8B0000;
          }

          .robot-wrapper {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-backface-visibility: hidden;
          }

          /* Red glow larger on big screens */
          .homehero .absolute.rounded-full.animate-glow-in {
            width: clamp(200px, 28vw, 300px) !important;
            height: clamp(200px, 28vw, 300px) !important;
            filter: blur(48px) !important;
          }

          /* Text positioning adjustment */
          .homehero .absolute.inset-x-0 {
            top: 45% !important;
          }

          .homehero p[class*="animate-slide-up"] {
            font-size: clamp(18px, 4.5vw, 40px) !important;
          }
        }

        /* Ultra-wide screens (2560px+) */
        @media (min-width: 2560px) {
          .text-fill-layer,
          .text-stroke-layer {
            font-size: 260px !important;
            -webkit-backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }

          .text-stroke-layer {
            -webkit-text-stroke: 2.5px #8B0000;
          }

          .robot-wrapper {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
            -webkit-backface-visibility: hidden;
          }

          .homehero .absolute.rounded-full.animate-glow-in {
            width: 340px !important;
            height: 340px !important;
            filter: blur(56px) !important;
          }

          .homehero p[class*="animate-slide-up"] {
            font-size: 42px !important;
          }
        }
      `}</style>

      {/* FLOATING BALLS */}
      <FloatingBalls />

      {/* ROBOT FULLSCREEN */}
      <div className="absolute inset-0 z-20">
        <div className="robot-wrapper w-full h-full origin-bottom scale-[0.58] sm:scale-[0.68] md:scale-100 -translate-y-2 sm:-translate-y-1 md:translate-y-0">
          <Robot />
        </div>
      </div>

      {/* RED GLOW */}
      <div
        className="absolute left-1/2 top-[8%] sm:top-[9%] md:top-[5%] -translate-x-1/2 z-10 rounded-full animate-glow-in"
        style={{
          width: "clamp(120px, 24vw, 220px)",
          height: "clamp(120px, 24vw, 220px)",
          background:
            "linear-gradient(to bottom, #A20000 0%, #090101 100%)",
          filter: "blur(32px)",
        }}
      />

      {/* TEXT */}
      <div className="absolute inset-x-0 top-[82%] sm:top-[78%] md:top-[50%] -translate-y-1/2 z-10 px-[1.4%] pl-[clamp(0.6rem,4vw,5rem)] flex flex-col items-start">

        <p className="w-full text-left text-[clamp(14px,3.8vw,32px)] font-bold text-red-800 animate-slide-up-1">
          We are your
        </p>

        {/* TEXT FILL LAYER - Behind Robot */}
        <div className="relative h-[1em] animate-slide-up-2 -mt-2 sm:-mt-6 md:-mt-14">
          <div
            className="text-fill-layer font-akira"
            style={{ top: "0" }}
          >
            AI PARTNER
          </div>
        </div>
      </div>

        {/* TEXT STROKE LAYER - On Top of Robot */}
      <div className="absolute inset-x-0 top-[82%] sm:top-[78%] md:top-[50%] -translate-y-1/2 z-40 px-[1.4%] pl-[clamp(0.6rem,4vw,5rem)] flex flex-col items-start">
        <p className="w-full text-left text-[clamp(14px,3.8vw,32px)] font-bold invisible animate-slide-up-1">
          We are your
        </p>
        <div className="relative h-[1em] animate-slide-up-2 -mt-2 sm:-mt-6 md:-mt-14">
          <div
            className="text-stroke-layer font-akira"
            style={{ top: "0" }}
          >
            AI PARTNER
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeHero;