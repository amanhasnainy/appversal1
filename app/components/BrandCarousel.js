"use client"; 

import React, { useEffect, useState, useCallback } from "react";
import { useWindowSize } from "react-use";
import Image from "next/image"; 

const BrandCarousel = () => {
  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  const brands = [
    { id: 1, name: "Yatra", image: "/yatra.png" },
    { id: 2, name: "Godrej", image: "/godrej.png" },
    { id: 3, name: "Rapido", image: "/rapido.png" },
    { id: 4, name: "Innisfree", image: "/innisfree.png" },
    { id: 5, name: "Yatra", image: "/yatra.png" },
    { id: 6, name: "Godrej", image: "/godrej.png" },
    { id: 7, name: "Rapido", image: "/rapido.png" },
    { id: 8, name: "Innisfree", image: "/innisfree.png" },
  ];

  const getVisibleItemCount = useCallback(() => {
    if (width < 640) return 3; // Mobile
    if (width < 768) return 4; // Tablet
    return 5; // Desktop
  }, [width]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const visibleCount = getVisibleItemCount();
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (position + i) % brands.length;
      items.push(brands[index]);
    }
    return items;
  };

  const getFocusClass = (index) => {
    const visibleCount = getVisibleItemCount();
    const centerIndex = Math.floor(visibleCount / 2);

    if (visibleCount === 3) {
      switch (index) {
        case 0:
        case 2:
          return "opacity-60 scale-75";
        case 1:
          return "opacity-100 scale-100";
        default:
          return "opacity-60 scale-75";
      }
    }

    if (visibleCount === 4) {
      switch (index) {
        case 0:
        case 3:
          return "opacity-40 scale-75";
        case 1:
        case 2:
          return "opacity-100 scale-100";
        default:
          return "opacity-40 scale-75";
      }
    }

    return index === centerIndex
      ? "opacity-100 scale-110"
      : index === centerIndex - 1 || index === centerIndex + 1
      ? "opacity-70 scale-90"
      : "opacity-40 scale-75";
  };

  return (
    <div className="w-full bg-black overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-6">
        <div className="relative flex justify-center items-center">
          <div
            className="flex justify-center items-center 
                        gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                        py-2 xs:py-3 sm:py-4 md:py-6"
          >
            {getVisibleBrands().map((brand, index) => (
              <div
                key={brand.id}
                className={`transition-all duration-500 ease-in-out ${getFocusClass(index)}`}
              >
                <div
                  className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 
                              h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 
                              flex items-center justify-center"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={128}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
