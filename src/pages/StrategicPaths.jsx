import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {useAppContext} from '../context/AppContext';
import Button from '../components/Button';
import PathCard from '../components/PathCard';
import SafeIcon from '../common/SafeIcon';
import {FiCompass, FiArrowRight, FiArrowLeft} from 'react-icons/fi';

const StrategicPaths = () => {
  const navigate = useNavigate();
  const {businessGoal, strategicPaths, selectFinalPath} = useAppContext();
  const [selectedPathId, setSelectedPathId] = useState(null);

  const handleSelectPath = (pathId) => {
    setSelectedPathId(pathId);
  };

  const handleContinue = () => {
    if (selectedPathId) {
      selectFinalPath(selectedPathId);
      navigate('/compass/summary');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="text-center mb-8"
      >
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCompass} className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Strategic Design Paths
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Based on your goal{businessGoal ? `: "${businessGoal}"` : ''}, we've generated strategic design paths. Explore each option and select the one that best aligns with your needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {strategicPaths.map((path, index) => (
          <PathCard
            key={path.id}
            path={path}
            index={index}
            selected={selectedPathId === path.id}
            onSelect={handleSelectPath}
          />
        ))}
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.4}}
        className="flex justify-between"
      >
        <Button
          variant="secondary"
          onClick={() => navigate('/compass/add-context')}
          icon={FiArrowLeft}
          iconPosition="left"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedPathId}
          icon={FiArrowRight}
          iconPosition="right"
        >
          Continue with Selected Path
        </Button>
      </motion.div>
    </div>
  );
};

export default StrategicPaths;