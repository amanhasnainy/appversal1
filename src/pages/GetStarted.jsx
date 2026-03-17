import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/20 py-4">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between text-left text-gray-100"
      >
        <span className="font-medium">{title}</span>
        <span className="text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-3 text-sm text-gray-200">{children}</div>}
    </div>
  );
};

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#53020C] to-[#FF233F] text-gray-100">
      <div className="relative z-10 bg-transparent">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto pt-32 pb-32 px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-7 bg-transparent ">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold leading-tight mb-6">Let's build something <span className="italic">great together</span></h1>

            <div className="mt-8 space-y-6">
              <AccordionItem title="United States Of America">
                <p className="text-gray-200">(Head Office)</p>
              </AccordionItem>

              <AccordionItem title="India">
                <p>Noida, India</p>
                <p>Mumbai, India</p>
                <p className="mt-3 flex items-center gap-2"><span className="h-3 w-3 bg-pink-200 inline-block" /> support@appversal.com</p>
              </AccordionItem>

              <div className="pt-6">
                <h3 className="text-sm font-semibold text-gray-200 mb-3">Follow Us</h3>
                <a
                  className="inline-flex items-center justify-center h-9 w-9 bg-white text-[#082213] rounded-sm"
                  href="#"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5">
          <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800">
            <label className="text-xs font-semibold">FULL NAME*</label>
            <input className="mt-2 w-full border border-gray-200 rounded-md p-3 text-sm" placeholder="Enter Your Full Name" />

            <label className="block text-xs font-semibold mt-5">EMAIL ADDRESS*</label>
            <input className="mt-2 w-full border border-gray-200 rounded-md p-3 text-sm" placeholder="Enter Your Email Address" />

            <label className="block text-xs font-semibold mt-5">ADDITIONAL MESSAGE</label>
            <textarea className="mt-2 w-full border border-gray-200 rounded-md p-3 text-sm h-28" placeholder="Please provide any additional details about your request" />

            <p className="text-xs text-gray-500 mt-4">privacy policy and terms and conditions.</p>

            <button className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#53020C] to-[#FF233F] text-white font-semibold px-6 py-3 rounded-full">SUBMIT FORM</button>
          </div>
        </section>
      </main>

      <footer className="bg-transparent">
        <Footer hideLogos={true} />
      </footer>
    </div>
  );
}
