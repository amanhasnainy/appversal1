'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#D4F771] w-full h-full lg:h-[460px] py-8 mt-[20px]">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start h-full gap-8">
          {/* Logo Section */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <div className="relative w-[200px] md:w-[250px] lg:w-[300px] h-[100px]">
              <Image
                src="/logof.png"
                alt="AppVersal Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center lg:text-left">
              {/* Legal Links */}
              <ul className="space-y-3 lg:col-start-3 md:col-start-3 order-last lg:order-none">
                <li>
                  <Link href="/contact" className="text-black hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="https://appversal.com/privacy.html" className="text-black hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://appversal.com/terms.html" className="text-black hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>

              {/* Contact Information and Social Links */}
              <ul className="space-y-2 text-center lg:text-left lg:col-start-4 md:col-start-4 order-last lg:order-none">
                <li className="text-black">San Francisco, USA</li>
                {/* <li className="text-black">Sector 126, Noida</li> */}
                <li className="text-black mt-2">support@appversal.com</li>
                <li className="flex justify-center lg:justify-start space-x-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/company/appversal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit AppVersal on LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5 text-black cursor-pointer hover:text-green-800" />
                  </a>
                  {/* <a 
                    href="https://www.instagram.com/apversal?igsh=NGUyaHM4bWE3dmg2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit AppVersal on Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-black cursor-pointer hover:text-green-800" />
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black pt-4 text-center mt-8">
          <p className="text-black text-sm">
            &copy; Appversal Inc. 2025 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;