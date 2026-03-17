import React from 'react';

const VikerGames = () => {
  return (
    <div className="bg-white flex flex-col w-full">
      <div className="relative overflow-hidden min-h-[530px] w-full">
        <style>{`
          /* Mobile hero adjustments (WebKit friendly) */
          @media (max-width: 640px) {
            .viker-hero-h1 {
              font-size: 26px !important;
              -webkit-text-size-adjust: 100% !important;
              line-height: 1.14 !important;
            }

            /* 2x2 grid for the four info blocks on small screens */
            .viker-hero-subgrid {
              display: grid !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 0.75rem !important;
              margin-top: 1rem !important;
              align-items: start !important;
            }

            .viker-hero-subgrid h4 {
              font-size: 20px !important;
            }

            .viker-hero-subgrid p {
              font-size: 15px !important;
              margin-top: 0.5rem !important;
            }

            .viker-blob {
              width: 200% !important;
              min-width: 900px !important;
              transform: translateY(10%) !important;
              -webkit-transform: translateY(10%) !important;
            }

            .viker-hero-image {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
            }

            .viker-hero-top {
              padding-top: 0.6rem !important;
              padding-bottom: 0.8rem !important;
            }

            /* Solution section: mobile-friendly, WebKit-optimized */
            .solution-section {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }

            /* turn the solution wrapper into a stacked column on small screens
               text first, image below */
            .solution-flex {
              display: flex !important;
              flex-direction: column-reverse !important;
              align-items: center !important;
              justify-content: flex-start !important;
              gap: 0.75rem !important;
              width: 100% !important;
            }

            /* make the desktop absolute side text hidden and use mobile column */
            .solution-mobile-grid {
              display: flex !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
              width: 100% !important;
              margin-top: 0.5rem !important;
              -webkit-font-smoothing: antialiased !important;
              -webkit-text-size-adjust: 100% !important;
              justify-content: center !important;
              align-items: center !important;
            }

            .solution-mobile-grid > div {
              font-size: 16px !important;
              font-weight: 700 !important;
              line-height: 1.15 !important;
              text-align: center !important;
              color: #000 !important;
              padding: 0.25rem 0.5rem !important;
              word-break: normal !important;
              overflow-wrap: anywhere !important;
              hyphens: auto !important;
              white-space: normal !important;
              width: 100% !important;
            }

            /* scale down the solution image for small viewports */
            .solution-image {
              width: 80% !important;
              max-width: 280px !important;
              height: auto !important;
              display: block !important;
              margin: 0 auto !important;
              -webkit-transform: translateZ(0) !important;
              transform: translateZ(0) !important;
              -webkit-backface-visibility: hidden !important;
              backface-visibility: hidden !important;
            }

            /* hide desktop absolute side texts just in case
               (desktop uses .hidden.md:flex but ensure mobile stays clean) */
            .solution-section .hidden.md\:flex {
              display: none !important;
            }
          }
        `}</style>
        {/* Top hero container */}
        <div className="max-w-full mx-4 px-4 md:px-4 pt-2 pb-7 relative z-30 viker-hero-top">
          <p className="text-[18px] font-medium text-gray-800 mb-8 tracking-wide">Case Study</p>

          <h1 className="viker-hero-h1 text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.1] text-black">
            How Viker Games Achieved{' '}
            <span className="inline-flex items-center whitespace-nowrap align-middle">
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 rotate-180 -mr-1">
                <path d="M26 12L21 17M30 20H24M26 28L21 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="mx-2">#1 Free Game Ranking</span>
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 -ml-1">
                <path d="M26 12L21 17M30 20H24M26 28L21 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{' '}
            in Australia
            <br className="hidden md:block" /> and Generated 500,000+ Installs in One Day
          </h1>

          <div className="mt-24 viker-hero-subgrid grid grid-cols-2 lg:grid-cols-4 gap-18 items-start max-w-full">
            <div>
              <h4 className="text-[28px] font-bold text-black">Sector</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">ASOWin Services</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Solution</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">ASOWin Services</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Key Products</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">ASOWin Services</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Industry</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">Gaming</p>
            </div>
          </div>
        </div>

        {/* Decorative blob arc - positioned like the screenshot */}
        <div className="absolute left-0 right-0 bottom-0 flex justify-center items-end pointer-events-none select-none z-10 w-full">
          <img src="/blob1.png" alt="green blob arc" className="viker-blob w-[120%] min-w-[1400px] max-w-none opacity-100 object-cover object-top translate-y-[%] md:translate-y-[1%]" />
        </div>
      </div>

      <section className="w-full py-16 mt-8 md:mt-16 px-4 md:px-8 lg:px-12">
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6 text-center mx-auto max-w-[1200px]">About Viker Games</h2>
        <p className="text-[18px] md:text-[20px] text-gray-800 mb-10 leading-relaxed max-w-[1200px] mx-auto text-center">
          Viker Games is a mobile game studio in London, UK, known for casual and puzzle games. They aim to enhance global growth and app store visibility by partnering with ASOWin for App Store Optimization.
        </p>
        <div className="w-full flex justify-center">
          <img
            src="/vikarframe.png"
            alt="Viker Games Overview"
            className="viker-hero-image w-full max-w-[1400px] h-auto object-cover rounded-2xl border border-gray-200 shadow-sm"
          />
        </div>
      </section>

      {/* The Challenges Section */}
      <section className="w-full relative py-20 md:py-32 bg-white overflow-hidden flex items-center min-h-[600px]">
        {/* Background Decorative Element - Vikar Roket Arc */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] z-0 flex justify-end items-center pointer-events-none">
          <img
            src="/vikarroket.png"
            alt=""
            className="w-full h-full object-cover object-left md:object-contain md:object-right scale-110 md:scale-100"
          />
        </div>

        {/* Foreground Rocket */}
        <div className="absolute right-[-10%] md:right-5 lg:right-16 top-1/2 -translate-y-2/3 z-10 w-[170px] md:w-[200px] lg:w-[208px] pointer-events-none">
          <img
            src="/roket.png"
            alt="Rocket"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-20 w-full">
          {/* Text Content */}
          <div className="max-w-[700px] lg:max-w-[800px]">
            <h2 className="text-[36px] md:text-[45px] font-bold text-black border-b-0 inline-block mb-10">
              The Challenges
            </h2>

            <ul className="space-y-4 mb-10 text-[18px] md:text-[20px] text-gray-800 font-medium">
              <li className="flex items-start">
                <span className="mr-3 text-black">-</span>
                <span>Boosting visibility in competitive categories</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">-</span>
                <span>Enhancing keyword rankings globally</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">-</span>
                <span>Optimizing store creatives and conversion rates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-black">-</span>
                <span>Growing installs organically without heavy reliance on paid acquisition</span>
              </li>
            </ul>

            <p className="text-[18px] md:text-[21px] font-bold text-black leading-snug">
              With millions of apps vying for attention, maintaining a solid ASO strategy was essential for
              <br className="hidden lg:block" />consistent ranking in app store searches and charts.
            </p>
          </div>
        </div>
      </section>

      {/* The AppVersal | ASOWin Solution Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white solution-section">
        <div className="max-w-[1600px] mx-auto w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6">
            The AppVersal \ ASOWin Solution
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-800 mb-16 leading-relaxed max-w-[800px]">
            Our team worked closely with the Viker Games team to deliver <br className="hidden md:block" />
            <span className="font-bold">End-to-End App Store Optimization</span> across multiple game titles.
          </p>

          <div className="flex justify-center w-full mt-16 md:mt-24 relative max-w-[900px] mx-auto solution-flex">
            {/* Left side text 1 */}
            <div className="hidden md:flex absolute left-0 top-[20%] items-center -translate-y-1/2 -ml-4 lg:-ml-12 z-10 w-[200px] justify-end">
              <div className="text-[20px] lg:text-[24px] font-bold text-black text-right leading-tight">
                Competitive<br />Analysis
              </div>
              <div className="w-12 border-t border-black ml-4 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1.5 h-1.5 border-t border-l border-black -rotate-45"></div>
              </div>
            </div>

            {/* Left side text 2 */}
            <div className="hidden md:flex absolute left-0 top-[70%] items-center -translate-y-1/2 -ml-4 lg:-ml-12 z-10 w-[200px] justify-end">
              <div className="text-[20px] lg:text-[24px] font-bold text-black text-right leading-tight">
                Category<br />Positioning
              </div>
              <div className="w-12 border-t border-black ml-4 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[2px] w-1.5 h-1.5 border-t border-l border-black -rotate-45"></div>
              </div>
            </div>

            {/* Main Image */}
            <img
              src="/chart.png"
              alt="ASOWin Solution Process Chart"
              className="w-full max-w-[300px] lg:max-w-[350px] h-auto object-contain relative z-0 solution-image"
            />

            {/* Right side text 1 */}
            <div className="hidden md:flex absolute right-0 top-[15%] items-center -translate-y-1/2 -mr-4 lg:-mr-12 z-10 w-[250px]">
              <div className="w-12 border-t border-black mr-4 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-1.5 h-1.5 border-t border-r border-black rotate-45"></div>
              </div>
              <div className="text-[20px] lg:text-[24px] font-bold text-black text-left leading-tight">
                Keyword research<br />& targeting
              </div>
            </div>

            {/* Right side text 2 */}
            <div className="hidden md:flex absolute right-0 top-[65%] items-center -translate-y-1/2 -mr-4 lg:-mr-12 z-10 w-[250px]">
              <div className="w-12 border-t border-black mr-4 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-1.5 h-1.5 border-t border-r border-black rotate-45"></div>
              </div>
              <div className="text-[20px] lg:text-[24px] font-bold text-black text-left leading-tight">
                Store listing<br />Optimization
              </div>
            </div>

            {/* Mobile Layout Fallback */}
            <div className="md:hidden mt-8 w-full flex flex-col gap-6 items-center text-center solution-mobile-grid">
              <div className="text-[18px] font-bold text-black">Competitive Analysis</div>
              <div className="text-[18px] font-bold text-black">Keyword research & targeting</div>
              <div className="text-[18px] font-bold text-black">Category Positioning</div>
              <div className="text-[18px] font-bold text-black">Store listing Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full relative overflow-hidden py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full max-w-[600px] lg:max-w-none lg:w-[45%] z-20">
            <h2 className="text-[36px] md:text-[45px] font-bold text-black mb-8">
              Results
            </h2>

            <ul className="space-y-4 mb-10 text-[18px] md:text-[20px] text-gray-800 font-medium leading-normal">
              <li className="flex items-start">
                <span className="mr-3">🏆</span>
                <span>#1 Top Free Games Chart in Australia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📈</span>
                <span>500,000+ installs in a single day</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🔎</span>
                <span>Ranked for multiple high-value gaming<br className="hidden md:block" />keywords</span>
              </li>
            </ul>

            <p className="text-[18px] md:text-[20px] font-bold text-black leading-snug">
              The success led to a long-term partnership<br className="hidden md:block" />with Viker Games.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <img
              src="/vikarbanner.png"
              alt="Viker Games Results on App Store"
              className="w-full max-w-[720px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-white pb-32">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="max-w-[900px]">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-black mb-4 leading-tight">
              🚀 Want to grow your app organically?
            </h2>
            <p className="text-[24px] md:text-[30px] lg:text-[36px] font-medium text-black mb-10 leading-[1.3]">
              AppVersal helps apps scale installs through App Store Optimization.
            </p>
            <p className="text-[18px] md:text-[22px] text-[#5A6376] mb-8 font-medium">
              Ready to write your own success story?
            </p>
            <a href="/get-started" className="inline-flex items-center justify-center bg-gradient-to-r from-[#171717] to-[#404040] text-white font-medium py-[18px] px-8 rounded-xl hover:opacity-90 transition-opacity text-[16px] md:text-[18px] w-fit cursor-pointer shadow-lg outline-none border-none">
              Get Started Today
              <svg className="ml-3 w-5 h-5 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VikerGames;
