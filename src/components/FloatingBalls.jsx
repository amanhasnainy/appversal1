function OutlinedBall({ className, animationClass, animationDelay }) {
  return (
    <div
      className={`absolute w-[22px] h-[22px] rounded-full border-2 border-[#8B0000] flex items-center justify-center ${animationClass} ${className}`}
      style={{ animationDelay: animationDelay || '0s' }}
    >
      <div className="w-[7px] h-[7px] bg-[#8B0000] rounded-full" />
    </div>
  );
}

export default function FloatingBalls({ variant, className = '' } = {}) {
  const fadeStyle = {
    WebkitMaskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
    maskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  };

  // Single ball variant for tight UI areas like the navbar
  if (variant === 'single') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
        style={fadeStyle}
      >
        <style>{`
          @keyframes navFloat {
            0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); opacity: 1; }
            50% { transform: translate(-50%, -50%) translateX(10px) translateY(-8px); opacity: 0.95; }
            100% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); opacity: 1; }
          }
          .animate-nav-float { animation: navFloat 3.8s ease-in-out infinite; }
        `}</style>

        <div className="absolute left-1/2 top-1/2 w-[22px] h-[22px] rounded-full border-2 border-[#8B0000] flex items-center justify-center animate-nav-float">
          <div className="w-[7px] h-[7px] bg-[#8B0000] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={"absolute inset-0 pointer-events-none overflow-hidden z-10"}
      style={fadeStyle}
    >
      <style>{`
        @keyframes float1 {
          0% { transform: translateX(0px) translateY(0px); opacity: 1; }
          25% { transform: translateX(30px) translateY(-40px); opacity: 0.8; }
          50% { transform: translateX(-20px) translateY(30px); opacity: 1; }
          75% { transform: translateX(25px) translateY(-20px); opacity: 0.9; }
          100% { transform: translateX(0px) translateY(0px); opacity: 1; }
        }
        @keyframes float2 {
          0% { transform: translateX(0px) translateY(0px); opacity: 1; }
          25% { transform: translateX(-35px) translateY(25px); opacity: 0.9; }
          50% { transform: translateX(20px) translateY(-35px); opacity: 0.8; }
          75% { transform: translateX(-15px) translateY(20px); opacity: 1; }
          100% { transform: translateX(0px) translateY(0px); opacity: 1; }
        }
        @keyframes float3 {
          0% { transform: translateX(0px) translateY(0px); opacity: 0.9; }
          25% { transform: translateX(40px) translateY(15px); opacity: 1; }
          50% { transform: translateX(-30px) translateY(-40px); opacity: 0.8; }
          75% { transform: translateX(15px) translateY(30px); opacity: 0.9; }
          100% { transform: translateX(0px) translateY(0px); opacity: 0.9; }
        }
        @keyframes float4 {
          0% { transform: translateX(0px) translateY(0px); opacity: 1; }
          25% { transform: translateX(-25px) translateY(-30px); opacity: 0.85; }
          50% { transform: translateX(35px) translateY(20px); opacity: 1; }
          75% { transform: translateX(-20px) translateY(-25px); opacity: 0.9; }
          100% { transform: translateX(0px) translateY(0px); opacity: 1; }
        }
        @keyframes float5 {
          0% { transform: translateX(0px) translateY(0px); opacity: 0.85; }
          25% { transform: translateX(28px) translateY(-35px); opacity: 1; }
          50% { transform: translateX(-28px) translateY(28px); opacity: 0.9; }
          75% { transform: translateX(18px) translateY(-18px); opacity: 0.85; }
          100% { transform: translateX(0px) translateY(0px); opacity: 0.85; }
        }
        @keyframes floatLeftToRight {
          0% { transform: translateX(-100vw) translateY(-30px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw) translateY(50px); opacity: 0; }
        }
        @keyframes floatRightToLeft {
          0% { transform: translateX(100vw) translateY(20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-100vw) translateY(-40px); opacity: 0; }
        }
        @keyframes floatDiagonalLTR {
          0% { transform: translateX(-80vw) translateY(80px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(80vw) translateY(-60px); opacity: 0; }
        }
        @keyframes floatDiagonalRTL {
          0% { transform: translateX(80vw) translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(-80vw) translateY(70px); opacity: 0; }
        }
        .animate-float-1 { animation: float1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float3 8s ease-in-out infinite; }
        .animate-float-4 { animation: float4 6.5s ease-in-out infinite; }
        .animate-float-5 { animation: float5 7.5s ease-in-out infinite; }
        .animate-float-ltr { animation: floatLeftToRight 10s ease-in-out infinite; }
        .animate-float-rtl { animation: floatRightToLeft 11s ease-in-out infinite; }
        .animate-float-diag-ltr { animation: floatDiagonalLTR 12s ease-in-out infinite; }
        .animate-float-diag-rtl { animation: floatDiagonalRTL 13s ease-in-out infinite; }
      `}</style>

      {/* Solid dots */}
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[10%] left-[2%] animate-float-1" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[9%] right-[5%] animate-float-2" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[28%] right-[6%] animate-float-3" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[25%] right-[4%] animate-float-4" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[3%] right-[3%] animate-float-5" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[35%] left-[5%] animate-float-1" style={{ animationDelay: '1s' }} />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[50%] right-[8%] animate-float-2" style={{ animationDelay: '1.5s' }} />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[40%] left-[10%] animate-float-3" style={{ animationDelay: '2s' }} />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[15%] right-[12%] animate-float-4" style={{ animationDelay: '1.2s' }} />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[40%] left-0 animate-float-ltr" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[35%] right-0 animate-float-rtl" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full top-[25%] left-0 animate-float-diag-ltr" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[20%] right-0 animate-float-diag-rtl" />

      {/* Outlined circles with center dot */}
      <OutlinedBall className="top-[20%] left-[11%]" animationClass="animate-float-5" />
      <OutlinedBall className="top-[11%] left-[14%]" animationClass="animate-float-1" animationDelay="0.5s" />
      <OutlinedBall className="bottom-[30%] left-[6%]" animationClass="animate-float-2" animationDelay="1s" />
      <OutlinedBall className="bottom-[23%] right-[46%]" animationClass="animate-float-3" animationDelay="1.5s" />
      <OutlinedBall className="bottom-[8%] left-[4%]" animationClass="animate-float-4" animationDelay="2s" />
      <OutlinedBall className="top-[45%] right-[20%]" animationClass="animate-float-5" animationDelay="0.8s" />
      <OutlinedBall className="top-[65%] left-[38%]" animationClass="animate-float-1" animationDelay="1.3s" />
      <OutlinedBall className="bottom-[15%] right-[10%]" animationClass="animate-float-2" animationDelay="1.8s" />
      <OutlinedBall className="top-[30%] left-0" animationClass="animate-float-ltr" animationDelay="0s" />
      <OutlinedBall className="bottom-[40%] right-0" animationClass="animate-float-rtl" animationDelay="1s" />
    </div>
  );
}