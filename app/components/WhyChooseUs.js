'use client';

import React from 'react';

const LeafIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-8 h-8 text-[#90C73E]"
  >
    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4 10 10 0 0 1 0 12 10 10 0 0 1-8 4c-5.5 0-10-4.5-10-10Z"/>
    <path d="M12 2c0 5.5-4.5 10-10 10"/>
  </svg>
);

const WhyChooseUs = () => {
  const features = [
    {
      title: "Ultimate Customer Satisfaction",
      description: "Our enthusiastic team at AppVersal strives to offer our clients and customers the best of services, increase team efficiency, and generate 100% returns.",
    },
    {
      title: "AI-focused",
      description: "We are a pioneering AI-based app-first company always down to embrace new technologies, ideas, and paradigms to take your app to the next level.",
    },
    {
      title: "App-first Company",
      description: "At AppVersal, our team of over 100+ domain experts cater to providing the best products to an app-first audience looking for a boost in their app brand's overall performance.",
    }
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-4xl font-normal mb-4">
            Why <span className="italic">Choose</span> Us
          </h2>
          <p className="text-[#3B3B3B] text-[18px]">
            Driven. Futuristic. Impactful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start space-y-8"
            >
              {/* Icon */}
              <div className="mb-8">
                <LeafIcon />
              </div>

              {/* Title */}
              <h3 className="text-[28px] font-normal">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#3B3B3B] text-[18px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;