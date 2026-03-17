function OutlinedBall({ className }) {
  return (
    <div
      className={`absolute w-[22px] h-[22px] rounded-full border-2 border-[#8B0000] flex items-center justify-center ${className}`}
    >
      <div className="w-[7px] h-[7px] bg-[#8B0000] rounded-full" />
    </div>
  );
}

export default function FloatingBalls() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Solid dots */}
      <div className="absolute w-[14px] h-[14px] bg-[#8B0000] rounded-full top-[18%] left-[5%]" />
      <div className="absolute w-[12px] h-[12px] bg-[#8B0000] rounded-full top-[10%] right-[18%]" />
      <div className="absolute w-[14px] h-[14px] bg-[#8B0000] rounded-full top-[28%] right-[31%]" />
      <div className="absolute w-[10px] h-[10px] bg-[#8B0000] rounded-full bottom-[15%] right-[12%]" />
      <div className="absolute w-[12px] h-[12px] bg-[#8B0000] rounded-full bottom-[24%] left-[57%]" />

      {/* Outlined circles with center dot */}
      <OutlinedBall className="top-[20%] left-[25%]" />
      <OutlinedBall className="top-[8%] right-[16%]" />
      <OutlinedBall className="bottom-[13%] left-[14%]" />
      <OutlinedBall className="bottom-[20%] right-[32%]" />
      <OutlinedBall className="top-[55%] left-[3%]" />
    </div>
  );
}
