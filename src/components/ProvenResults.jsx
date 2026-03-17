import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    value: '850%',
    label: 'Average ROI Increase',
    description: 'Across all client campaigns',
    color: 'border-gray-200'
  },
  {
    value: '500M+',
    label: 'Users Acquired',
    description: 'Through our AI platform',
    color: 'border-gray-200'
  },
  {
    value: '10M+',
    label: 'Revenue Generated',
    description: 'For our clients in 2024',
    color: 'border-gray-200'
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on NPS surveys',
    color: 'border-gray-200'
  },
  {
    value: '15+',
    label: 'Industry Awards',
    description: 'For innovation & excellence',
    color: 'border-gray-200'
  },
  {
    value: '72hrs',
    label: 'Average Setup Time',
    description: 'From onboarding to launch',
    color: 'border-gray-200'
  }
];

const ProvenResults = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            Proven Results
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Numbers That <span className="text-red-600">Speak for Themselves</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real impact, measurable outcomes, unprecedented growth
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-4 sm:p-6 md:p-8 border-2 ${stat.color} hover:shadow-lg transition-all duration-300 flex flex-col justify-center md:aspect-square`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-3">
                <AnimatedCounter
                  value={stat.value}
                  delay={0}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FF233F] to-[#53020C] bg-clip-text text-transparent"
                />
                <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
