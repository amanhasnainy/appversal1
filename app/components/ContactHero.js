'use client';

import React, { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactHero = () => {
  const [openSection, setOpenSection] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    form: "appversal form",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // Function to check if the email is a work email
  const isWorkEmail = (email) => {
    const freeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "protonmail.com",
    ];
    const domain = email.split("@")[1];
    return domain && !freeEmailDomains.includes(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validate email before submitting
    if (!isWorkEmail(formData.email)) {
      setStatus({
        type: "error",
        message: "Please use a valid work email address.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://form.appstorys.com/api/add-response/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status !== 201) {
        throw new Error("Failed to submit the form");
      }

      setStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        form: "appversal form"
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0C2114] min-h-screen w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="space-y-16">
          {/* Heading */}
          <div className="space-y-0">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] text-white font-normal leading-tight">
              Let's build something
            </h1>
            <p className="text-4xl md:text-5xl lg:text-[48px] text-white font-serif italic leading-tight">
              great together
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {/* USA Section */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleSection("usa")}
                className="w-full text-left py-4 flex items-center justify-between text-white"
              >
                <span className="text-lg">United States Of America</span>
                <span className="text-2xl">
                  {openSection === "usa" ? "−" : "+"}
                </span>
              </button>
              {openSection === "usa" && (
                <div className="pb-4 space-y-4">
                  <p className="text-gray-300">San Francisco, USA</p>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>✉</span>
                    <a
                      href="mailto:us.support@appversal.com"
                      className="hover:text-white transition-colors"
                    >
                      support@appversal.com
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* India Section */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleSection("india")}
                className="w-full text-left py-4 flex items-center justify-between text-white"
              >
                <span className="text-lg">India</span>
                <span className="text-2xl">
                  {openSection === "india" ? "−" : "+"}
                </span>
              </button>
              {openSection === "india" && (
                <div className="pb-4 space-y-4">
                  <p className="text-gray-300">
                    Noida, India
                    <br />
                    Mumbai, India
                  </p>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>✉</span>
                    <a
                      href="mailto:support@appversal.com"
                      className="hover:text-white transition-colors"
                    >
                      support@appversal.com
                    </a>
                  </div>
                </div>
              )}
            </div>


          </div>

          {/* Social Links */}
          <div className="space-y-10">
            <p className="text-white">Follow Us</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/company/appversal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              </a>

              {/* <a
                href="https://www.instagram.com/apversal?igsh=NGUyaHM4bWE3dmg2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                FULL NAME*
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                EMAIL ADDRESS*
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                ADDITIONAL MESSAGE
              </label>
              <textarea
                rows={3}
                placeholder="Please provide any additional details about your request"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <div className="text-sm text-gray-600">
              <a
                href="https://appversal.com/privacy.html"
                className="underline hover:text-black"
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="https://appversal.com/terms.html"
                className="underline hover:text-black"
              >
                terms and conditions
              </a>
              .
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D2F34C] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium"
            >
              {loading ? "SUBMITTING..." : "SUBMIT FORM"}
            </button>

            {/* Status Messages */}
            {status.message && (
              <div
                className={`text-sm ${status.type === "success"
                    ? "text-green-700 bg-green-100 p-3 rounded-lg"
                    : "text-red-700 bg-red-100 p-3 rounded-lg"
                  }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;