import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const animatedBorderStyle = `
  @property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes border-spin {
    to { --border-angle: 360deg; }
  }
  .animated-border-card {
    animation: border-spin 3s linear infinite;
    background:
      linear-gradient(white, white) padding-box,
      conic-gradient(from var(--border-angle), #FF233F 0%, #FFFFFF 40%, #FF233F 60%, #FFFFFF 80%, #FF233F 100%) border-box;
    border: 3px solid transparent;
  }
`;

const stories = [
  {
    company: 'Viker Games',
    tag: 'Leading Game Platform',
    metric: '500K+',
    metricLabel: 'Installs in one day',
    description: 'Focused on identifying high-traffic gaming keywords that could drive organic discovery and installs.',
  },
  {
    company: 'Bajaj Finserv',
    tag: 'Fintech Platform',
    metric: '90+',
    metricLabel: 'CSAT Screen & App Ratings',
    description: 'Built and deploy a custom CSAT feedback system. Connected with multiple supply-side platforms (SSPs) to access high-quality traffic sources.',
  },
  // {
  //   company: 'LSN Apps',
  //   tag: 'Regional Shopping App',
  //   metric: '100k',
  //   metricLabel: 'Installs in one day',
  //   description: 'focused App Store Optimization strategy aimed specifically at recovering EasyPhone\'s ranking for the highly competitive "phone" keyword.',
  // },
  // {
  //   company: 'PlayOJO',
  //   tag: 'E-Gaming Platform',
  //   metric: '500+',
  //   metricLabel: 'First Time Deposite (FTD) per month',
  //   description: 'Executed a performance marketing and user acquisition strategy',
  // },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.5l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1-5.5-3.1-5.5 3.1 1.4-6.1-4.7-4.1 6.2-.6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 16l6-6 4 4 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7h4v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SuccessStories = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{animatedBorderStyle}</style>
      <section id="case-studies" className="py-20 px-4 bg-white relative z-10 rounded-b-[40px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center"
          >
            <span className="text-sm px-5 py-1.5 rounded-full border border-gray-200 text-gray-700 bg-white shadow-sm font-medium">
              Why AppVersal
            </span>
          </motion.div>

          <motion.h2
            className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-tight leading-tight"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Success Stories from <span className="text-[#D21B32]">Industry Leaders</span>
          </motion.h2>

          <motion.p
            className="text-gray-500 text-lg md:text-[22px] font-medium mt-6 tracking-wide"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Real challenges, AI-powered solutions, transformative results
          </motion.p>
        </div>

        {/* Grid and Carousel Wrapper */}
        <div className="relative flex items-center justify-center mt-20 px-4 sm:px-6 lg:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-12 lg:gap-y-16 w-full max-w-[1000px] mx-auto items-stretch px-4 sm:px-6 md:px-0 relative z-10">
            {stories.slice(0, 4).map((story, i) => (
              <motion.article
                key={`${story.company}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="animated-border-card rounded-[24px] p-5 md:p-6 flex flex-col items-start relative overflow-hidden transition-all duration-300 hover:scale-[1.02] w-full md:w-[380px] h-auto md:h-[310px]"
                style={{
                  boxShadow: '0 20px 40px -10px rgba(255, 35, 63, 0.15), 0 0 20px 0px rgba(255, 35, 63, 0.1)',
                }}
              >
                {/* Decorative floating dots */}
                <div className="absolute w-[4px] h-[4px] bg-[#FF233F] rounded-full top-[25%] right-[20%] opacity-40"></div>
                <div className="absolute w-[6px] h-[6px] bg-[#FF233F] rounded-full bottom-[45%] right-[10%] opacity-30"></div>
                <div className="absolute w-[3px] h-[3px] bg-[#FF233F] rounded-full top-[50%] left-[80%] opacity-60"></div>
                <div className="absolute w-[5px] h-[5px] bg-[#FF233F] rounded-full top-[10%] left-[40%] opacity-20"></div>

                <div className="w-full">
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide">{story.tag}</p>
                  <h3 className="mt-0.5 text-lg font-bold text-gray-900">{story.company}</h3>
                </div>

                <div className="mt-3 mb-2 w-full">
                  <span className="text-4xl font-bold text-[#D21B32] tracking-tight leading-none block">
                    {story.metric}
                  </span>
                  <div className="flex items-center gap-2 mt-2 text-gray-700">
                    <TrendIcon className="w-4 h-4 text-gray-700 shrink-0" />
                    <span className="text-xs font-medium">{story.metricLabel}</span>
                  </div>
                </div>

                <p className="mt-2 text-sm text-gray-600 font-medium leading-[1.6] w-full">
                  {story.description}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const slug = story.company
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^a-z0-9-]/g, '');
                    window.scrollTo(0, 0);
                    navigate(`/case-study/${slug}`);
                  }}
                  className="mt-auto flex items-center gap-1.5 text-[#D21B32] text-sm font-semibold hover:gap-3 transition-all duration-200 group"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.article>
            ))}
          </div>


        </div>

        {/* CTA */}
        <div className="text-center mt-24 relative z-20">
          <p className="text-[#4B5563] text-xl md:text-2xl font-medium">Ready to write your own success story?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { window.scrollTo(0, 0); navigate('/get-started'); }}
            type="button"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-[32px] px-10 py-5 text-white font-semibold bg-gradient-to-r from-[#53020C] via-[#B51025] to-[#FF233F] text-lg md:text-xl shadow-[0_10px_25px_-5px_rgba(255,35,63,0.3)] transition-all"
          >
            Get Started Today
            <ArrowRight className="h-6 w-6" strokeWidth="2.5" />
          </motion.button>
        </div>
      </div>
    </section>
    </>
  );
};

export default SuccessStories;
