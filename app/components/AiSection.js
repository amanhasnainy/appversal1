// const AiSection = () => {
//     return (
//       <section className="relative w-full h-[550px] bg-[#217065] overflow-hidden">
//         {/* Background circuit pattern */}
//         <div 
//           className="absolute inset-0 w-full h-full bg-cover bg-left-top z-10" 
//           style={{ backgroundImage: "url('/ais.png')" }}
//         />

import Link from "next/link";

  
//         <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
//           <div className="flex flex-col md:flex-row h-full relative">
//             {/* Left side - Robot Hand */}
//             <div className="absolute bottom-0 left-0 w-[45%] h-[90%] z-10">
//               <img 
//                 src="/hand.png" 
//                 alt="AI Robotic Hand" 
//                 className="object-contain object-bottom w-full h-full"
//               />
//             </div>
  
//             {/* Right side - Content */}
//             <div className="w-full md:w-1/2 md:ml-auto pt-16 lg:pt-24 text-white">
//               <h2 className="text-4xl md:text-5xl lg:text-[74px] font-medium leading-[1.1] mb-6">
//                 LET'S BUILD THE<br />FUTURE WITH AI
//               </h2>
//               <p className="text-lg md:text-xl mb-16 opacity-90">
//                 Want to integrate AI into your business?
//               </p>
//               <button className="bg-[#D4F771] text-black px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[#e0ff7a] transition-colors">
//                 GET IN TOUCH
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default AiSection;

const AiSection = () => {
    return (
      <section className="relative w-full h-auto min-h-[550px] bg-[#217065] overflow-hidden flex items-center">
        {/* Background circuit pattern */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-left-top z-10"
          style={{ backgroundImage: "url('/ais.png')" }}
        />
  
        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-stretch">
          {/* Left side - Robot Hand */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-start relative">
            <img 
              src="/hand.png" 
              alt="AI Robotic Hand" 
              className="object-contain w-[70%] md:w-full h-auto max-h-[400px] md:max-h-[90%]"
            />
          </div>
  
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left mt-8 md:mt-0 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-[74px] font-medium leading-[1.1] mb-6 break-words">
              LET'S BUILD THE<br />FUTURE WITH AI
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-90">
              Want to integrate AI into your business?
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/contact">
              <button className="bg-[#D4F771] text-black px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[#e0ff7a] transition-colors">
                GET IN TOUCH
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AiSection;