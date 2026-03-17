import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function TrustedBrands() {
    const brandsRow1 = [
        { name: "Moengage", logo: "/Moengage.png" },
        { name: "Sabre", logo: "/Sabre.png" },
        { name: "Databricks", logo: "/Databricks.png" },
        { name: "Red Hat", logo: "/Red Hat.png" }
    ];
    const brandsRow2 = [
        { name: "AJIO", logo: "/AJIO.png" },
        { name: "Khatabook", logo: "/Khatabook.png" },
        { name: "Myntra", logo: "/Myntra.png" },
        { name: "Red Hat", logo: "/Red Hat.png" }
    ];

    return (
        <section id="industries" className="relative w-full py-24 bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden">
            <style>{`
                @keyframes scrollLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                @keyframes scrollRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-scroll-left {
                    animation: scrollLeft 20s linear infinite;
                }
                .animate-scroll-right {
                    animation: scrollRight 20s linear infinite;
                }
                    /* Responsive adjustments for the orbit background */
                    .orbit-bg {
                      width: 1750px;
                    }
                                @media (max-width: 640px) {
                                    .orbit-bg {
                                        /* increase mobile size so the orbit is more visible */
                                        width: clamp(600px, 110vw, 1400px);
                                        /* position so the larger orbit sits nicely behind the brand cards */
                                        top: 85% !important;
                                        transform: translateX(-50%) translateY(-50%) !important;
                                    }
                                }
                
                /* Large / ultra-wide screens adjustments */
                @media (min-width: 1920px) {
                    /* make container wider on large displays */
                    section#industries .relative.z-10 {
                        width: 100% !important;
                        max-width: 1800px !important;
                        padding-left: 3rem !important;
                        padding-right: 3rem !important;
                    }

                    section#industries .text-center h2 {
                        font-size: 72px !important;
                        line-height: 1.04 !important;
                    }

                    section#industries .text-center p {
                        font-size: 24px !important;
                    }

                    .brand-card {
                        width: 360px !important;
                        height: 160px !important;
                        border-radius: 36px !important;
                    }

                    .brand-card img {
                        max-width: 90% !important;
                        max-height: 90% !important;
                    }

                    .animate-scroll-left,
                    .animate-scroll-right {
                        animation-duration: 24s !important;
                    }
                }

                @media (min-width: 2560px) {
                    /* stronger specificity to override Tailwind utilities */
                    section#industries .relative.z-10 {
                        width: 100% !important;
                        max-width: 2200px !important;
                        padding-left: 4rem !important;
                        padding-right: 4rem !important;
                    }

                    section#industries .text-center h2 {
                        font-size: 88px !important;
                        line-height: 1.02 !important;
                    }

                    section#industries .text-center p {
                        font-size: 28px !important;
                    }

                    .brand-card {
                        width: 420px !important;
                        height: 180px !important;
                        border-radius: 40px !important;
                    }

                    .brand-card img {
                        max-width: 92% !important;
                        max-height: 92% !important;
                    }

                    .orbit-bg {
                        width: 2200px !important;
                        top: 75% !important;
                    }

                    .animate-scroll-left,
                    .animate-scroll-right {
                        animation-duration: 26s !important;
                    }
                }
            `}</style>

            {/* Orbit background */}
                <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1750px] z-0 pointer-events-none orbit-bg">
                <DotLottieReact
                    src="/Light blue orbit.lottie"
                    loop
                    autoplay
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px]">

                {/* Headings */}
                <div className="text-center mb-16">
                    <h2 className="text-[52px] md:text-[64px] font-bold text-[#1F2937] tracking-tight leading-tight">
                        Trusted by <span className="text-[#B53535]">1,000+ Global Brands</span>
                    </h2>
                    <p className="mt-6 text-[22px] md:text-[24px] text-gray-700">
                        Leading enterprises choose AppVersal for AI-powered growth
                    </p>
                </div>

                {/* Brand Cards Grid */}
                <div className="w-full flex flex-col gap-6 items-center">
                    {/* Row 1 - Scrolling Left to Right */}
                    <div className="flex gap-6 w-full justify-start flex-nowrap overflow-hidden">
                        <div className="animate-scroll-left flex gap-6 flex-nowrap">
                            {brandsRow1.map((brand, i) => (
                                <div
                                    key={`r1-${i}`}
                                    className="brand-card flex-[0_0_auto] w-[280px] md:w-[320px] h-[120px] md:h-[140px] rounded-[32px] flex items-center justify-center border-0"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-[85%] max-h-[85%] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="animate-scroll-left flex gap-6 flex-nowrap">
                            {brandsRow1.map((brand, i) => (
                                <div
                                    key={`r1-dup-${i}`}
                                    className="brand-card flex-[0_0_auto] w-[280px] md:w-[320px] h-[120px] md:h-[140px] rounded-[32px] flex items-center justify-center border-0"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-[85%] max-h-[85%] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Scrolling Right to Left */}
                    <div className="flex gap-6 w-full justify-start flex-nowrap overflow-hidden">
                        <div className="animate-scroll-right flex gap-6 flex-nowrap">
                            {brandsRow2.map((brand, i) => (
                                <div
                                    key={`r2-${i}`}
                                    className="brand-card flex-[0_0_auto] w-[280px] md:w-[320px] h-[120px] md:h-[140px] rounded-[32px] flex items-center justify-center border-0"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-[85%] max-h-[85%] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="animate-scroll-right flex gap-6 flex-nowrap">
                            {brandsRow2.map((brand, i) => (
                                <div
                                    key={`r2-dup-${i}`}
                                    className="brand-card flex-[0_0_auto] w-[280px] md:w-[320px] h-[120px] md:h-[140px] rounded-[32px] flex items-center justify-center border-0"
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-w-[85%] max-h-[85%] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
