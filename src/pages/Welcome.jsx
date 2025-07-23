import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SafeIcon from '../common/SafeIcon';
import { FiArrowRight, FiTarget, FiUploadCloud, FiCompass } from 'react-icons/fi';

const Welcome = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <SafeIcon icon={FiCompass} className="w-10 h-10 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Strategic Compass
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Make confident design decisions. Drive business growth, informed by your unique context.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          How It Works
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiTarget} className="w-6 h-6 text-primary-600" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Define Your Business Goal</h3>
              <p className="mt-1 text-gray-600">Start by telling us the most critical business goal you're focused on right now.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center relative">
              <SafeIcon icon={FiUploadCloud} className="w-6 h-6 text-primary-600" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Add Your Context</h3>
              <p className="mt-1 text-gray-600">Upload screenshots, documents, or data to help us understand your unique situation.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center relative">
              <SafeIcon icon={FiCompass} className="w-6 h-6 text-primary-600" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Explore Strategic Paths</h3>
              <p className="mt-1 text-gray-600">We'll generate tailored strategic design paths with pros, cons, and next steps.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Button 
          to="/set-goal"
          size="lg"
          icon={FiArrowRight}
          iconPosition="right"
        >
          Get Started
        </Button>
        <p className="mt-4 text-sm text-gray-500">
          No account required. Your data is only used to inform your current session.
        </p>
      </motion.div>
    </div>
  );
};

export default Welcome;