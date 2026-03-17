import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';
import AppversalBanner from './AppversalBanner';

const Footer = ({ hideLogos = false }) => {
  return (
    <div id="contact" className="w-full flex flex-col bg-white">

      <footer className="w-full bg-white pt-12 pb-8 font-sans relative z-10">
        <AppversalBanner hideLogos={hideLogos} />
        <style>{`
          /* Footer responsive tweaks for very large screens */
          @media (min-width: 2040px) {
            .footer-inner {
              max-width: 1800px !important;
              padding-left: 3.5rem !important;
              padding-right: 3.5rem !important;
            }
            .footer-brand {
              width: 420px !important;
            }
            .footer-links {
              gap: 2.5rem !important;
              grid-template-columns: repeat(4, minmax(0,1fr)) !important;
            }
            .contact-banner {
              padding-top: 1.25rem !important;
              padding-bottom: 1.25rem !important;
            }
            .footer-bottom {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }
          }

          @media (min-width: 2560px) {
            .footer-inner {
              max-width: 2200px !important;
              padding-left: 5rem !important;
              padding-right: 5rem !important;
            }
            .footer-brand {
              width: 480px !important;
            }
            .footer-links {
              gap: 3rem !important;
              grid-template-columns: repeat(5, minmax(0,1fr)) !important;
            }
            .contact-banner {
              padding-top: 1.5rem !important;
              padding-bottom: 1.5rem !important;
            }
            .footer-bottom {
              padding-left: 3rem !important;
              padding-right: 3rem !important;
            }
          }
        `}</style>

        <div className="footer-inner max-w-[1281px] mx-auto my-6 px-4 sm:px-6">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between mb-16 gap-10 lg:gap-0">
            {/* Brand Column */}
            <div className="footer-brand w-full lg:w-[360px] flex flex-col gap-6">
              <Link to="/" className="inline-block">
                <img src="/AppVersal logo 4.png" alt="AppVersal Logo" className="h-[64px] sm:h-[90px] w-auto object-contain" />
              </Link>
              <p className="text-[#1a1a1a] text-[15px] leading-[1.6] max-w-[320px]">
                AI-powered app marketing infrastructure for global enterprises. Building the future of growth technology.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="flex justify-center items-center w-8 h-8 text-[#1a1a1a] hover:text-red-500 transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                {/* Removed Twitter, Instagram, and social email icons per request */}
              </div>
            </div>

            {/* Links Grid */}
            <div className="footer-links w-full lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 lg:ml-12 mt-6 lg:mt-0">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">AI Development</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">AI Creatives</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">ASO</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">User Acquisition</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">AEO</a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">About Us</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Careers</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Press</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Partners</a>
                <a href="/contact" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Contact</a>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Blog</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Case Studies</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Whitepapers</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Documentation</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Support</a>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Privacy Policy</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Terms of Service</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Cookie Policy</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">GDPR</a>
                <a href="#" className="text-[#1a1a1a] hover:text-red-500 text-[15px] font-medium transition-colors py-2">Security</a>
              </div>
            </div>
          </div>

          {/* Contact Info Banner */}
          <div className="contact-banner border-t border-b border-[#ed3452] py-6 mb-8 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-900 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-[#4b4b4b] text-[13px] mb-1">Headquarters</p>
                  <p className="font-semibold text-[#1a1a1a] text-[16px]">San Francisco, USA</p>
                </div>
              </div>



              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-900 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-[#4b4b4b] text-[13px] mb-1">Email</p>
                  <a href="mailto:hello@appversal.ai" className="font-semibold text-[#1a1a1a] text-[16px] hover:text-red-500 transition-colors">
                    support@appversal.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-medium text-[#1a1a1a] px-4 sm:px-6">
            <p className="py-2">© 2026 AppVersal. All rights reserved.</p>
            <div className="flex gap-6 py-2">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
              <a href="#" className="hover:text-red-500 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
