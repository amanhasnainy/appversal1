'use client';

import React from "react";
import Image from "next/image";
import manImage from "@/public/man.png";
import testBgImage from "@/public/testbg.png";

const TestimonialSection = () => {
  return (
    <section className="relative  w-full py-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full  -z-10">
        <Image
          src={testBgImage}
          alt="Testimonial background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left content */}
          <div className="text-white space-y-5">
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wide">
              Testimonials
            </h2>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              We've done all the heavy lifting so you don't have to get all the data.
            </p>
          </div>

          {/* Center image */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-lg relative aspect-[3/4]">
              <Image
                src={manImage}
                alt="Testimonial portrait"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Right content */}
          <div className="text-white flex flex-col justify-between space-y-10">
            <p className="text-lg leading-relaxed font-light">
              Working with AppVersal has been a great experience. They efficiently concluded
              all the mandate tasks, exceeding our expectations. What impressed us most
              was their use of AI technology to optimize our ASO strategy. Providing us
              with AI-driven insights, AppVersal delivered precise keyword targeting,
              boosted visibility, and enhanced user engagement at the same time. Thanks to
              their innovative approach, we've seen remarkable results and a noticeable
              increase in our app's performance. Highly recommend their services!
            </p>
            <div className="space-y-6">
              <p className="text-xl text-right">— Bajaj</p>
              {/* <button className="bg-[#D2F34C] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium tracking-wide">
                SEE SUCCESS STORIES
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;