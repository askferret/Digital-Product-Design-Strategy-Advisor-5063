import React, {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAppContext} from '../context/AppContext';
import Button from '../components/Button';
import SafeIcon from '../common/SafeIcon';
import {FiCheck, FiX, FiHelpCircle, FiArrowRight, FiArrowLeft} from 'react-icons/fi';

const PathDetail = () => {
  const {pathId} = useParams();
  const navigate = useNavigate();
  const {strategicPaths, selectPathForDetail, selectedPath, selectFinalPath} = useAppContext();

  useEffect(() => {
    if (pathId && strategicPaths.length > 0) {
      selectPathForDetail(pathId);
    } else if (strategicPaths.length === 0) {
      // If no paths are available, redirect to the strategic paths generation page
      navigate('/compass/add-context');
    }
  }, [pathId, strategicPaths, selectPathForDetail, navigate]);

  if (!selectedPath) {
    return (
      <div className="max-w-3xl mx-auto py-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const handleSelectPath = () => {
    selectFinalPath(selectedPath.id);
    navigate('/compass/summary');
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {selectedPath.title}
        </h1>
        <p className="text-lg text-gray-600">
          {selectedPath.summary}
        </p>
      </motion.div>

      <div className="space-y-8 mb-8">
        {/* Pros Section */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.1}}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-2" />
            Pros
          </h2>
          <ul className="space-y-3">
            {selectedPath.pros.map((pro, index) => (
              <motion.li
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.2 + index * 0.1}}
                className="flex items-start"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <SafeIcon icon={FiCheck} className="w-3 h-3 text-green-600" />
                </span>
                <span className="text-gray-700">{pro}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Cons Section */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2}}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <SafeIcon icon={FiX} className="w-5 h-5 text-red-500 mr-2" />
            Cons
          </h2>
          <ul className="space-y-3">
            {selectedPath.cons.map((con, index) => (
              <motion.li
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.3 + index * 0.1}}
                className="flex items-start"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <SafeIcon icon={FiX} className="w-3 h-3 text-red-600" />
                </span>
                <span className="text-gray-700">{con}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Considerations Section */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.3}}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <SafeIcon icon={FiHelpCircle} className="w-5 h-5 text-blue-500 mr-2" />
            Key Considerations
          </h2>
          <ul className="space-y-3">
            {selectedPath.considerations.map((consideration, index) => (
              <motion.li
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.4 + index * 0.1}}
                className="flex items-start"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <SafeIcon icon={FiHelpCircle} className="w-3 h-3 text-blue-600" />
                </span>
                <span className="text-gray-700">{consideration}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Next Steps Section */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.4}}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 flex items-center mb-4">
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-primary-600 mr-2" />
            Next Steps
          </h2>
          <ol className="space-y-3 list-decimal pl-5">
            {selectedPath.nextSteps.map((step, index) => (
              <motion.li
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.5 + index * 0.1}}
                className="text-gray-700 pl-2"
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.6}}
        className="flex justify-between"
      >
        <Button
          variant="secondary"
          onClick={() => navigate('/compass/strategic-paths')}
          icon={FiArrowLeft}
          iconPosition="left"
        >
          Back to Paths
        </Button>
        <Button
          onClick={handleSelectPath}
          icon={FiCheck}
          iconPosition="left"
        >
          Select This Path
        </Button>
      </motion.div>
    </div>
  );
};

export default PathDetail;