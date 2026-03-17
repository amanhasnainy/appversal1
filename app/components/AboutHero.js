// 'use client';

// import Link from "next/link";
// import Navbar from "./Navbar";


// const AboutHero = () => {
//   return (
//     <div 
//     className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-b from-slate-800 to-slate-700"
//     style={{ backgroundImage: "url('/aboutHero.png')" }} // Reference from the public folder
//   >

//       <Navbar />
      
//       {/* Hero Content */}
//       <div className="container mx-auto px-6 lg:px-16">
//         <div className="pt-20 lg:pt-28 max-w-[600px]">
//           <h1 className="text-[3.5rem] lg:text-[65px] font-normal leading-[1.1] text-[#FFFFFF] mb-6">
//            Revolutionizing App
//            <br /> Marketing
            
//              with AI
//           </h1>
          
//           <p className="text-[1.1rem] text-white leading-[1.6] mb-8 max-w-[520px] font-normal">
//             Breaking all conventional marketing trends, AppVersal offers 
//             advanced AI focused app marketing solutions. We help 
//             engage, interact, soar to the heights of building your app's 
//             core metrics in the most advanced way.
//           </p>

       


//           <Link href="/contact">
//           <button className="bg-[#D4F771] text-slate-900 px-8 py-2.5 rounded-full  mb-2
//             text-sm font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors">
//             GET STARTED
//           </button>
//         </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;

// 'use client';

// import Link from "next/link";
// import Navbar from "./Navbar";

// const AboutHero = () => {
//   return (
//     <div 
//       className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-b from-slate-800 to-slate-700"
//       style={{ backgroundImage: "url('/aboutHero.png')" }} // Reference from the public folder
//     >
//       <Navbar />
      
//       {/* Hero Content */}
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
//         <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 max-w-[600px] text-center sm:text-left">
//           <h1 className="text-[3rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[65px] font-normal leading-tight text-white mb-6">
//             Revolutionizing App
//             <br className="hidden sm:block" /> Marketing with AI
//           </h1>
          
//           <p className="text-base sm:text-lg  leading-relaxed mb-6 sm:mb-8 max-w-[90%] sm:max-w-[520px] mx-auto sm:mx-0 font-normal mt-5 text-black md:text-white">
//             Breaking all conventional marketing trends, AppVersal offers 
//             advanced AI-focused app marketing solutions. We help engage, 
//             interact, and grow your app's core metrics in the most advanced way.
//           </p>

//           <Link href="/contact">
//             <button className="bg-[#D4F771] text-slate-900 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors">
//               GET STARTED
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;


// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "./Navbar";

// const AboutHero = () => {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background image with gradient */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ 
//           backgroundImage: "url('/a1.png')",
//           backgroundSize: 'cover'
//         }}
//       />

//       {/* Navbar */}
//       <div className="relative z-10">
//         <Navbar />
//       </div>
      
//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
//         <div className="flex flex-col lg:flex-row items-start justify-between pt-16 sm:pt-20 lg:pt-24">
//           {/* Left content */}
//           <div className="w-full lg:w-[600px] pt-8">
//             <h1 className="text-[3rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[65px] font-normal leading-tight text-white mb-6">
//               Revolutionizing App
//               <br /> Marketing with AI
//             </h1>
            
//             <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-[520px] text-white/90">
//               Breaking all conventional marketing trends, AppVersal offers 
//               advanced AI-focused app marketing solutions. We help engage, 
//               interact, and grow your app's core metrics in the most advanced way.
//             </p>

//             <button className="bg-[#D4F771] text-slate-900 px-8 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors">
//               GET STARTED
//             </button>
//           </div>

//           {/* Right content - Boxes Image */}
//           <div className="w-full lg:w-auto mt-12 lg:mt-0">
//             <div className="relative w-full lg:w-[600px] h-[300px] lg:h-[400px]">
//               <Image
//                 src="/a2.png"
//                 alt="Features grid showing various app marketing capabilities"
//                 fill
//                 className="object-contain object-right"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;

// 'use client';

// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "./Navbar";

// const AboutHero = () => {
//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Background image with gradient */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ 
//           backgroundImage: "url('/a1.png')",
//           backgroundSize: 'cover'
//         }}
//       />

//       {/* Gradient overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Navbar */}
//       <div className="relative z-10">
//         <Navbar />
//       </div>
      
//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pt-8 sm:pt-12 lg:pt-16 xl:pt-24 gap-8 lg:gap-12">
//           {/* Left content */}
//           <div className="w-full lg:w-1/2 xl:w-[600px] pt-4 sm:pt-8">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[65px] font-normal leading-tight text-white mb-4 sm:mb-6 whitespace-pre-line">
//               {'Revolutionizing App\nMarketing with AI'}
//             </h1>
            
//             <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[520px] text-white/90">
//               Breaking all conventional marketing trends, AppVersal offers 
//               advanced AI-focused app marketing solutions. We help engage, 
//               interact, and grow your app's core metrics in the most advanced way.
//             </p>

//             <Link 
//               href="/contact" 
//               className="inline-block bg-[#D4F771] text-slate-900 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors duration-300"
//             >
//               GET STARTED
//             </Link>
//           </div>

//           {/* Right content - Boxes Image */}
//           <div className="w-full lg:w-1/2 xl:w-[600px]">
//             <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px]">
//               <Image
//                 src="/a2.png"
//                 alt="Features grid showing various app marketing capabilities"
//                 fill
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutHero;


'use client';

import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const AboutHero = () => {
  return (
    <div className="relative h-[700px] sm:h-[1000px] lg:h-[800px] xl:h-[900px] w-full">
      {/* Background image with gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/a1.png')",
          backgroundSize: 'cover'
        }}
      />

      {/* Rest of the code remains the same */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10">
        <Navbar />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pt-8 sm:pt-12 lg:pt-16 xl:pt-24 gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 xl:w-[600px] pt-4 sm:pt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[65px] font-normal leading-tight text-white mb-4 sm:mb-6 whitespace-pre-line">
              {'Revolutionizing App\nMarketing with AI'}
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-[520px] text-white/90">
              Breaking all conventional marketing trends, AppVersal offers 
              advanced AI-focused app marketing solutions. We help engage, 
              interact, and grow your app's core metrics in the most advanced way.
            </p>

            <Link 
              href="/contact" 
              className="inline-block bg-[#D4F771] text-slate-900 px-6 sm:px-8 py-2.5 rounded-full text-sm font-medium uppercase tracking-wide hover:bg-[#b4e600] transition-colors duration-300"
            >
              GET STARTED
            </Link>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[600px]">
            <div className="relative w-full h-[300px] sm:h-[400px] xl:h-[500px]">
              <Image
                src="/a2.png"
                alt="Features grid showing various app marketing capabilities"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;