'use client';

import React from 'react';
import Image from 'next/image';
import partnerImage from '@/public/partner.png';

const PartnershipImpact = () => {
  const stats = [
    {
      number: "$19M",
      label: "Revenue Generated"
    },
    {
      number: "36%",
      label: "Boost in User Acquisition"
    },
    {
      number: "125%",
      label: "Increase in App Installs"
    },
    {
      number: "200k+",
      label: "Agents Hours Saved"
    }
  ];

  return (
    <div className="relative min-h-[471px] w-full bg-gradient-to-r from-black to-[#002E1D] overflow-hidden py-12 px-6 sm:px-8 lg:px-12">

      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={partnerImage}
          alt="Partnership background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={100}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-4">
            AI-Powered App Services that Drives Real Results
          </h2>
          <p className="text-gray-300">
            The Biggest Brands Grow with Appversal
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[52px] sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3">
                {stat.number}
              </span>
              <span className="text-[14px] sm:text-sm font-medium text-gray-300 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipImpact;