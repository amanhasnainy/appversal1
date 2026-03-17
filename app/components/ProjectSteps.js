'use client';

import React from "react";
import Image from "next/image";
import ladyImage from "@/public/lady.png";

const ProjectSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Ready?",
      description:
        "Get started by booking a one-on-one service consultation session with our team. Visit the Contact Page for further details.",
    },
    {
      number: "02",
      title: "Set",
      description:
        "Discuss your app brand's requirements and goals, and choose your services for the best results.",
    },
    {
      number: "03",
      title: "Go.",
      description:
        "All set? Sit back and watch your App grow faster than ever.",
    },
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            Get your project going in <span className="italic">3 steps</span>
          </h2>
          <p className="text-gray-600">
            Our excellent team of over 100+ experts are waiting to work with you
            in helping you reach heights you could've only imagined.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden h-[400px] md:h-[500px] bg-gray-100 relative">
              <Image
                src={ladyImage}
                alt="Project consultation"
                fill
                style={{ objectFit: 'cover' }}
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    index === 0
                      ? "bg-[#002E1D] text-white"
                      : index === 1
                      ? "bg-[#90C73E] text-black"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[52px] font-normal">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-[24px] font-medium mb-2">
                        {step.title}
                      </h3>
                      <p
                        className={`${
                          index === 0
                            ? "text-gray-300 text-[18px]"
                            : "text-gray-600 text-[18px]"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;