'use client';

import Image from 'next/image';
import Link from 'next/link';
import FloatingBalls from './FloatingBalls';

const AiHero = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16 relative">
      {/* Floating Balls */}
      <FloatingBalls />
      {/* Main heading container */}
      <div className="max-w-[1440px] mx-auto mb-12">
        <div className="relative">
          {/* Circuit pattern - absolute positioned */}
          <div className="absolute right-0 top-0 w-1/3 h-full">
            <Image
              src="/connect.png"
              alt="Circuit Pattern"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
          {/* Heading content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-[97px] font-medium text-black leading-tight relative inline-block">
              APPVERSAL AI:
            </h1>
            
            <div className="mt-4 mb-4">
              <h2 className="text-2xl md:text-4xl lg:text-[68px] text-gray-500 font-medium relative inline-block">
                PIONEERING ENTERPRISE
              </h2>
            </div>
            
            <div className="flex items-center gap-7">
              <h2 className="text-2xl md:text-4xl lg:text-[68px] text-gray-500 font-medium relative inline-block">
                AI SOLUTIONS
              </h2>

              <Link href="/contact">
              <button className="bg-[#D4F771] h-[37px] w-[158px] rounded-[19px] text-black px-6 py-2  text-sm font-medium hover:bg-[#d9ff9e] transition-colors  whitespace-nowrap">
                GET STARTED
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Cards grid with improved responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto">
        {/* Card 1 - Blue tinted with text */}
        <div 
          className="lg:col-span-1 rounded-lg overflow-hidden relative min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/aic1.png')"
          }}
        >
          <div className="relative z-10 p-8">
            <p className="text-[#000000] text-[16px] font-semibold leading-relaxed mt-32">
              At AppVersal, we're taking a leap<br /> into the future by integrating<br /> Artificial Intelligence into<br /> everything we do.
            </p>
          </div>
        </div>

        {/* Card 2 - Orange gradient with list */}
        <div 
          className="lg:col-span-1 rounded-lg overflow-hidden relative min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/aic2.png')"
          }}
        >
          <div className="relative z-10 p-8">
            <div className="flex flex-col divide-y divide-[#838383]">
              <div className="py-4">
                <div className="flex items-center justify-between text-black">
                  <span>Enterprise-Grade AI Expertise</span>
                  <Image src="/arr.png" alt="arrow" width={14} height={18} />
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center justify-between text-black">
                  <span>Deep Industry Knowledge</span>
                  <Image src="/arr.png" alt="arrow" width={14} height={18} />
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center justify-between text-black">
                  <span>End-to-End AI Implementation</span>
                  <Image src="/arr.png" alt="arrow" width={14} height={18} />
                </div>
              </div>
              <div className="py-4">
                <div className="flex items-center justify-between text-black">
                  <span>Proven Results</span>
                  <Image src="/arr.png" alt="arrow" width={14} height={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Purple gradient with lines and stat */}
        <div 
          className="md:col-span-2 rounded-lg overflow-hidden relative min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/aic3.png')"
          }}
        >
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div 
              
                key={i}
                className="h-[1px] bg-white/10"
                style={{ marginTop: `${i * 20}px` }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 p-8 flex flex-col md:flex-row justify-between items-center h-full">
            <div className="text-[60px] md:text-[80px] font-semibold text-black">+3.5x</div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-lg md:text-xl text-black">Increase in Customer Engagement</span>
              <Image src="/arr2.png" alt="chevron" width={18} height={18} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AiHero;