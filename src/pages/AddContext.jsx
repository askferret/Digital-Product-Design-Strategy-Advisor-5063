import React from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAppContext} from '../context/AppContext';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload';
import SafeIcon from '../common/SafeIcon';
import {FiUploadCloud, FiArrowRight, FiArrowLeft} from 'react-icons/fi';

const AddContext = () => {
  const navigate = useNavigate();
  const {businessGoal, uploads, generateStrategicPaths} = useAppContext();

  const handleContinue = () => {
    // In a real implementation, this would call an AI service
    generateStrategicPaths();
    navigate('/compass/strategic-paths');
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiUploadCloud} className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Add Context (Optional)
        </h1>
        <p className="text-gray-600">
          Help us understand your unique situation for more tailored strategic advice.
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6"
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Your Business Goal
        </h2>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700">{businessGoal}</p>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Upload Context Files
        </h2>
        <FileUpload />
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
        className="bg-blue-50 rounded-lg p-5 mb-8"
      >
        <h3 className="text-sm font-medium text-blue-800 mb-2">
          Why add context?
        </h3>
        <p className="text-sm text-blue-700 mb-3">
          Uploading files helps our AI understand your specific situation, resulting in more relevant and actionable strategic advice.
        </p>
        <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
          <li>Screenshots of your app or website</li>
          <li>User feedback or research data</li>
          <li>Metrics or analytics (CSV files)</li>
          <li>Business documents or pitch decks</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.4}}
        className="flex justify-between"
      >
        <Button
          variant="secondary"
          onClick={() => navigate('/compass/set-goal')}
          icon={FiArrowLeft}
          iconPosition="left"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          icon={FiArrowRight}
          iconPosition="right"
        >
          {uploads.length > 0 ? 'Continue with Context' : 'Skip This Step'}
        </Button>
      </motion.div>
    </div>
  );
};

export default AddContext;