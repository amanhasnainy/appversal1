import React from 'react';

const AppversalBanner = ({ hideLogos = false }) => {
    return (
        <section className="w-full flex flex-col justify-center bg-gradient-to-r from-[#53020C] to-[#FF233F] py-[24px] px-8 md:px-[223px] relative overflow-hidden">
            {/* Top Left Watermark */}
            {!hideLogos && (
                <img
                    src="/AppVersal logo 2.png"
                    alt=""
                    className="absolute top-0 left-0 -translate-y-[20%] -translate-x-[5%] w-[170px] opacity-100 pointer-events-none"
                    aria-hidden="true"
                />
            )}

            <div className="w-full max-w-[1281px] mx-auto flex justify-center items-center pl-39 relative z-10">
                <img
                    src="/AppVersal1.png"
                    alt="Appversal Banner"
                    className="w-full h-auto object-contain brightness-0 invert pl-[99px]"
                />
            </div>

            {/* Bottom Right Watermark */}
            {
                <img
                    src="/AppVersal logo 1.png"
                    alt=""
                    className="absolute bottom-0 right-0 translate-y-[20%] translate-x-[4%] w-[170px] opacity- pointer-events-none"
                    aria-hidden="true"
                />
            }
        </section>
    );
};

export default AppversalBanner;
