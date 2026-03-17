import React from 'react';

const BajajFinserv = () => {
  return (
    <div className="bg-white flex flex-col w-full">
      <div className="relative overflow-hidden min-h-[530px] w-full">
        <style>{`
          /* Mobile hero adjustments (WebKit friendly) */
          @media (max-width: 640px) {
            .bajaj-hero-h1 {
              font-size: 26px !important;
              -webkit-text-size-adjust: 100% !important;
              line-height: 1.14 !important;
            }

            /* 2x2 grid for the four info blocks on small screens */
            .bajaj-hero-grid {
              display: grid !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 0.75rem !important;
              margin-top: 1rem !important;
              align-items: start !important;
            }

            .bajaj-hero-grid h4 {
              font-size: 20px !important;
            }

            .bajaj-hero-grid p {
              font-size: 15px !important;
              margin-top: 0.5rem !important;
            }

            .bajaj-blob {
              width: 200% !important;
              min-width: 900px !important;
              transform: translateY(12%) !important;
              -webkit-transform: translateY(12%) !important;
            }

            .bajaj-hero-top {
              padding-top: 0.6rem !important;
              padding-bottom: 0.8rem !important;
            }

              /* Hide desktop absolute image on mobile and style mobile fallback */
              .mobile-image-abs {
                display: none !important;
              }

              /* Ratings modal: hide absolute on mobile and show mobile fallback styling */
              .ratings-modal-abs {
                display: none !important;
              }

              .ratings-modal-mobile img,
              .solution-image {
                width: 80% !important;
                max-width: 320px !important;
                height: auto !important;
                display: block !important;
                margin: 0 auto !important;
                -webkit-transform: translateZ(0) !important;
                transform: translateZ(0) !important;
                -webkit-backface-visibility: hidden !important;
                backface-visibility: hidden !important;
              }
          }
        `}</style>
        {/* Top hero container */}
        <div className="max-w-full mx-4 px-4 md:px-4 pt-8 pb-7 relative z-30 bajaj-hero-top">
          <p className="text-[18px] font-medium text-gray-800 mb-8 tracking-wide">Case Study</p>

          <h1 className="bajaj-hero-h1 text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-[1.1] text-black">
            Bajaj Finserv Improves{}
            <span className="inline-flex items-center whitespace-nowrap align-middle">
              <span className="mx-2">App Ratings with Custom CSAT Integration</span>
            </span>{' '}
            <br className="hidden md:block" /> Across 90+ App Screens
          </h1>

          <div className="mt-24 bajaj-hero-grid grid grid-cols-2 lg:grid-cols-4 gap-12 items-start max-w-full">
            <div>
              <h4 className="text-[28px] font-bold text-black">Sector</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">Fintech</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Solution</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">CSAT Integration</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Key Products</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">CleverTap</p>
            </div>

            <div>
              <h4 className="text-[28px] font-bold text-black">Industry</h4>
              <p className="mt-3 text-[18px] text-gray-700 font-medium tracking-wide">Finance</p>
            </div>
          </div>
        </div>

        {/* Decorative blob arc */}
        <div className="absolute left-0 right-0 bottom-0 flex justify-center items-end pointer-events-none select-none z-10 w-full">
          <img src="/blob2.png" alt="green blob arc" className="bajaj-blob w-[120%] min-w-[1400px] max-w-none opacity-100 object-cover object-top translate-y-[15%] md:translate-y-[15%]" />
        </div>
      </div>

      {/* About Section */}
      <section className="w-full py-16 mt-8 md:mt-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-6">About Bajaj Finserv</h2>
        <p className="text-[18px] md:text-[20px] text-gray-800 mb-10 leading-relaxed max-w-[1400px]">
          Bajaj Finserv is one of India&apos;s leading financial services companies, offering a wide range of products including loans, insurance, and digital financial solutions through its highly popular mobile application used by millions of customers.
        </p>
        <div className="w-full">
          <img
            src="/bajajbanner.png"
            alt="Bajaj Finserv Overview"
            className="bajaj-hero-image w-full max-w-[1300px] h-auto object-cover rounded-2xl shadow-sm"
          />
        </div>
      </section>

      {/* The Challenges Section */}
      <section className="w-full relative py-20 md:py-32 bg-white overflow-hidden flex items-center min-h-[600px]">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] z-0 flex justify-end items-center pointer-events-none">
          <img
            src="/blob4.png"
            alt=""
            className="w-full h-full object-cover object-left md:object-contain md:object-right scale-110 md:scale-100"
          />
        </div>

        {/* Foreground Ratings Modal */}
        <div className="absolute right-[-10%] md:right-5 lg:right-16 top-1/2 -translate-y-2/3 z-10 w-[400px] md:w-[450px] lg:w-[458px] pointer-events-none ratings-modal-abs">
          <img
            src="/Ratings Modal.png"
            alt="Rating"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-20 w-full">
          <div className="max-w-[700px] lg:max-w-[800px]">
            <h2 className="text-[36px] md:text-[45px] font-bold text-black mb-10">
              The Challenges
            </h2>

            <ul className="space-y-4 mb-10 text-[18px] md:text-[20px] text-gray-800 font-medium">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Integrating CSAT feedback flows across 90+ screens within the app</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Using CleverTap&apos;s HTML popup module, which presented multiple technical limitations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                <span>Resolving inconsistencies between preview behavior and live app rendering</span>
              </li>
            </ul>

            <p className="text-[18px] md:text-[21px] font-bold text-black leading-snug">
              The implementation was technically complex and required extensive
              <br className="hidden lg:block" />experimentation and coordination.
            </p>

            {/* Mobile fallback for Ratings Modal - shows below the Challenges text */}
            <div className="md:hidden w-full flex justify-center mt-6 ratings-modal-mobile">
              <img src="/Ratings Modal.png" alt="Rating modal" className="w-[80%] max-w-[320px] h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="w-full relative overflow-hidden py-20 md:py-32 bg-white min-h-[600px] flex items-center">
        {/* Background blob arc on right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[55%] z-0 flex justify-end items-end pointer-events-none">
          <img
            src="/banner4.png"
            alt=""
            className="w-full h-full object-cover object-left-bottom md:object-contain md:object-right-bottom"
          />
        </div>

        {/* Mobile phone image (desktop absolute) */}
        <div className="absolute right-[-5%] md:right-[2%] lg:right-[6%] bottom-0 z-10 w-[250px] md:w-[320px] lg:w-[380px] pointer-events-none mobile-image-abs">
          <img
            src="/mobile.png"
            alt="Bajaj Finserv App"
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12 relative z-20 w-full">
          <div className="max-w-[600px] lg:max-w-[700px]">
            <h2 className="text-[36px] md:text-[45px] font-bold text-black mb-6">
              The Solution
            </h2>
            <p className="text-[17px] md:text-[18px] text-gray-800 mb-6 leading-relaxed text-justify">
              AppVersal&apos;s development team worked closely with the Bajaj Finserv product and marketing teams to build and deploy a custom CSAT feedback system using CleverTap&apos;s HTML popup infrastructure.
            </p>
            <p className="text-[17px] md:text-[18px] text-gray-800 mb-4 leading-relaxed">
              The project involved:
            </p>
            <ul className="space-y-3 mb-8 text-[17px] md:text-[18px] text-gray-800 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0"></span>
                <span>Designing and implementing CSAT feedback flows across 90+ key app screens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0"></span>
                <span>Resolving rendering issues caused by HTML popup inconsistencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0"></span>
                <span>Iterating multiple times to ensure accurate UI behavior within the live app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0"></span>
                <span>Coordinating with internal teams to ensure smooth deployment across multiple app journeys</span>
              </li>
            </ul>
            <p className="text-[17px] md:text-[18px] font-bold text-black leading-snug text-justify">
              Despite the technical challenges, the team successfully engineered a stable and scalable solution.
            </p>
            {/* Mobile fallback image (shows below text on small screens) */}
            <div className="md:hidden w-full flex justify-center mt-6">
              <img src="/mobile.png" alt="Bajaj Finserv App" className="solution-image w-[80%] max-w-[320px] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full relative overflow-hidden py-24 md:py-32 bg-white">
        <style>{`
          @media (max-width: 640px) {
            /* hide the desktop absolute results image on small screens */
            .results-image-abs {
              display: none !important;
            }

            /* mobile fallback image styling */
            .results-image-mobile {
              width: 80% !important;
              max-width: 320px !important;
              height: auto !important;
              display: block !important;
              margin: 1.25rem auto 0 auto !important;
              -webkit-transform: translateZ(0) !important;
              transform: translateZ(0) !important;
              -webkit-backface-visibility: hidden !important;
              backface-visibility: hidden !important;
            }
          }
        `}</style>
        <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-[600px] z-20">
            <h2 className="text-[36px] md:text-[45px] font-bold text-black mb-8">
              Results
            </h2>

            <ul className="space-y-4 mb-10 text-[18px] md:text-[20px] text-gray-800 font-medium leading-normal">
              <li className="flex items-start">
                <span className="mr-3">🏆</span>
                <span>90+ CSAT Screen &amp; App Ratings</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📈</span>
                <span>Improved app store ratings across key journeys</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🔎</span>
                <span>Scalable feedback system deployed across the live app</span>
              </li>
            </ul>

            <p className="text-[18px] md:text-[20px] font-bold text-black leading-snug">
              The success led to a long-term partnership<br className="hidden md:block" />with Bajaj Finserv.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-end absolute md:relative right-[-20%] md:right-[-10%] top-1/2 -translate-y-3/2 opacity-20 md:opacity-100 z-0 results-image-abs">
            <img
              src="/banner3.png"
              alt=""
              className="w-[80%] md:w-[120%] max-w-none h-auto object-contain object-right"
            />
          </div>
          {/* Mobile fallback: image shown below text on small screens */}
          <div className="md:hidden w-full flex justify-center">
            <img src="/banner3.png" alt="" className="results-image-mobile" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-white pb-32">
        <div className="max-w-[1300px] mx-auto w-full">
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
            <a href="/get-started" className="inline-flex items-center justify-center bg-gradient-to-r from-[#0258E9] to-[#8FC2FF] text-white font-medium py-[18px] px-8 rounded-xl hover:opacity-90 transition-opacity text-[16px] md:text-[18px] w-fit cursor-pointer shadow-lg outline-none border-none">
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

export default BajajFinserv;
