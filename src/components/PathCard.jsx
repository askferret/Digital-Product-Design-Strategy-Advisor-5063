import React from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import Card from './Card';
import Button from './Button';
import SafeIcon from '../common/SafeIcon';
import {FiArrowRight} from 'react-icons/fi';

const PathCard = ({path, index, selected = false, onSelect}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/compass/path-detail/${path.id}`);
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: index * 0.1}}
    >
      <Card
        className={`p-6 ${selected ? 'ring-2 ring-primary-500' : ''}`}
        onClick={() => onSelect && onSelect(path.id)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-primary-100 text-primary-700`}>
            <span className="font-semibold">{index + 1}</span>
          </div>
          {selected && (
            <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              Selected
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {path.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {path.summary}
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits:</h4>
            <ul className="text-sm text-gray-600 space-y-1 pl-5 list-disc">
              {path.pros.slice(0, 2).map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
              {path.pros.length > 2 && (
                <li className="text-primary-600">+{path.pros.length - 2} more benefits</li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            icon={FiArrowRight}
            iconPosition="right"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button
            variant={selected ? "primary" : "secondary"}
            size="sm"
            onClick={() => onSelect && onSelect(path.id)}
          >
            {selected ? 'Selected' : 'Select Path'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PathCard;