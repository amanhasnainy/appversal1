// const WhyChooseSection = () => {
//     const features = [
//       {
//         number: "01",
//         title: "Enterprise-Grade AI Expertise",
//         description: "We build scalable AI systems for businesses of all sizes.",
//         bgColor: "bg-[#217065]",
//         textColor: "text-white"
//       },
//       {
//         number: "02",
//         title: "Deep Industry Knowledge",
//         description: "15+ years in app development & marketing, now leading in AI innovation.",
//         bgColor: "bg-[#F5FFDA]",
//         textColor: "text-[#757575]"
//       },
//       {
//         number: "03",
//         title: "End-to-End AI Implementation",
//         description: "From strategy to development to deployment, we handle everything.",
//         bgColor: "bg-[#F5FFDA]",
//         textColor: "text-[#757575]"
//       },
//       {
//         number: "04",
//         title: "Proven Results",
//         description: "We combine AI with performance marketing to deliver measurable business impact.",
//         bgColor: "bg-[#F5FFDA]",
//         textColor: "text-[#757575]"
//       }
//     ];
  
//     return (
//       <section className="max-w-[1440px] mx-auto py-16 px-4 md:px-8 lg:px-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
//             Why <span className="italic">Choose</span> AppVersal?
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Let's Build the Future with AI
//           </p>
//         </div>
  
//         <div className="space-y-4">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`rounded-xl overflow-hidden ${feature.bgColor} transition-all duration-300 border border-[#055B92]/50`}
//             >
//               <div className="flex flex-col md:flex-row items-start p-6 md:p-8">
//                 <div className="flex items-center mb-4 md:mb-0 md:w-1/2 lg:w-2/5">
//                   <span className={`text-2xl md:text-3xl font-medium mr-6 ${feature.textColor}`}>
//                     {feature.number}
//                   </span>
//                   <h3 className={`text-xl md:text-2xl font-medium ${feature.textColor}`}>
//                     {feature.title}
//                   </h3>
//                 </div>
//                 <p className={`md:w-1/2 lg:w-3/5 ${feature.textColor} text-base md:text-lg max-w-xl ml-0 md:ml-auto`}>
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default WhyChooseSection;


const WhyChooseSection = () => {
    const features = [
        {
            number: "01",
            title: "Enterprise-Grade AI Expertise",
            description: "We build scalable AI systems for businesses of all sizes.",
            defaultBg: "bg-[#F5FFDA]", // Default background
            hoverBg: "hover:bg-[#217065]", // Green on hover
            defaultText: "text-[#757575]", // Default text color
            hoverText: "group-hover:text-white" // White text on hover
        },
        {
            number: "02",
            title: "Deep Industry Knowledge",
            description: "15+ years in app development & marketing, now leading in AI innovation.",
            defaultBg: "bg-[#F5FFDA]",
            hoverBg: "hover:bg-[#217065]",
            defaultText: "text-[#757575]",
            hoverText: "group-hover:text-white"
        },
        {
            number: "03",
            title: "End-to-End AI Implementation",
            description: "From strategy to development to deployment, we handle everything.",
            defaultBg: "bg-[#F5FFDA]",
            hoverBg: "hover:bg-[#217065]",
            defaultText: "text-[#757575]",
            hoverText: "group-hover:text-white"
        },
        {
            number: "04",
            title: "Proven Results",
            description: "We combine AI with performance marketing to deliver measurable business impact.",
            defaultBg: "bg-[#F5FFDA]",
            hoverBg: "hover:bg-[#217065]",
            defaultText: "text-[#757575]",
            hoverText: "group-hover:text-white"
        }
    ];

    return (
        <section className="max-w-[1440px] mx-auto py-16 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                    Why <span className="italic">Choose</span> AppVersal?
                </h2>
                <p className="text-gray-600 text-lg">
                    Let's Build the Future with AI
                </p>
            </div>

            <div className="space-y-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`group rounded-xl overflow-hidden transition-all duration-300 border border-[#055B92]/50 ${feature.defaultBg} ${feature.hoverBg}`}
                    >
                        <div className="flex flex-col md:flex-row items-start p-6 md:p-8 transition-all duration-300">
                            <div className="flex items-center mb-4 md:mb-0 md:w-1/2 lg:w-2/5">
                                <span className={`text-2xl md:text-3xl font-medium mr-6 transition-all duration-300 ${feature.defaultText} ${feature.hoverText}`}>
                                    {feature.number}
                                </span>
                                <h3 className={`text-xl md:text-2xl font-medium transition-all duration-300 ${feature.defaultText} ${feature.hoverText}`}>
                                    {feature.title}
                                </h3>
                            </div>
                            <p className={`md:w-1/2 lg:w-3/5 text-base md:text-lg max-w-xl ml-0 md:ml-auto transition-all duration-300 ${feature.defaultText} ${feature.hoverText}`}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseSection;
