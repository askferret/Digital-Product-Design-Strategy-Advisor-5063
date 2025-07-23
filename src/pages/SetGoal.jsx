import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAppContext} from '../context/AppContext';
import Button from '../components/Button';
import SafeIcon from '../common/SafeIcon';
import {FiTarget, FiArrowRight} from 'react-icons/fi';

const SetGoal = () => {
  const navigate = useNavigate();
  const {businessGoal, setBusinessGoal} = useAppContext();
  const [localGoal, setLocalGoal] = useState(businessGoal);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localGoal.trim()) {
      setError('Please enter your business goal');
      return;
    }
    setBusinessGoal(localGoal);
    navigate('/compass/add-context');
  };

  const exampleGoals = [
    "Increase user retention for our carbon-tracking app",
    "Improve conversion rates in our checkout flow",
    "Enhance user engagement with sustainability features",
    "Reduce customer support tickets related to our UX",
    "Launch new renewable energy calculator feature successfully"
  ];

  const handleSelectExample = (example) => {
    setLocalGoal(example);
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiTarget} className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Define Your Business Goal
        </h1>
        <p className="text-gray-600">
          What's the most critical business goal you're focused on right now?
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="businessGoal" className="block text-sm font-medium text-gray-700 mb-2">
              Your Business Goal
            </label>
            <textarea
              id="businessGoal"
              value={localGoal}
              onChange={(e) => {
                setLocalGoal(e.target.value);
                setError('');
              }}
              placeholder="e.g., Increase user retention, Improve conversion rates, Launch new feature successfully..."
              className={`w-full px-3 py-2 border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition min-h-[100px]`}
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              icon={FiArrowRight}
              iconPosition="right"
            >
              Continue
            </Button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
      >
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Example Goals
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {exampleGoals.map((example, index) => (
            <motion.button
              key={index}
              className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 text-sm transition"
              onClick={() => handleSelectExample(example)}
              whileHover={{scale: 1.01}}
              whileTap={{scale: 0.99}}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.3 + index * 0.05}}
            >
              {example}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SetGoal;