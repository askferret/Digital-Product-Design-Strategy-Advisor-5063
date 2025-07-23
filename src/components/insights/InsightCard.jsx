import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const { FiChevronDown, FiChevronUp, FiArrowRight } = FiIcons;

const InsightCard = ({ insight, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const priorityColors = {
    high: {
      light: 'bg-red-100 text-red-800 border-red-200',
      dark: 'bg-red-900/20 text-red-400 border-red-800/30'
    },
    medium: {
      light: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      dark: 'bg-yellow-900/20 text-yellow-400 border-yellow-800/30'
    },
    low: {
      light: 'bg-green-100 text-green-800 border-green-200',
      dark: 'bg-green-900/20 text-green-400 border-green-800/30'
    }
  };

  const impactColors = {
    High: {
      light: 'text-red-600',
      dark: 'text-red-400'
    },
    Medium: {
      light: 'text-yellow-600',
      dark: 'text-yellow-400'
    },
    Low: {
      light: 'text-green-600',
      dark: 'text-green-400'
    }
  };

  const colorClasses = {
    blue: {
      light: 'bg-blue-50 text-blue-600',
      dark: 'bg-blue-900/20 text-blue-400'
    },
    red: {
      light: 'bg-red-50 text-red-600',
      dark: 'bg-red-900/20 text-red-400'
    },
    green: {
      light: 'bg-green-50 text-green-600',
      dark: 'bg-green-900/20 text-green-400'
    },
    purple: {
      light: 'bg-purple-50 text-purple-600',
      dark: 'bg-purple-900/20 text-purple-400'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[insight.color].light} dark:${colorClasses[insight.color].dark}`}>
            <SafeIcon icon={insight.icon} className="w-5 h-5" />
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${priorityColors[insight.priority].light} dark:${priorityColors[insight.priority].dark}`}>
              {insight.priority.toUpperCase()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDistanceToNow(insight.timestamp, {addSuffix: true})}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{insight.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{insight.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Impact: </span>
              <span className={`font-medium ${impactColors[insight.impact].light} dark:${impactColors[insight.impact].dark}`}>
                {insight.impact}
              </span>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Effort: </span>
              <span className="font-medium text-gray-900 dark:text-white">{insight.effort}</span>
            </div>
          </div>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
            {insight.category}
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'View Details'}
          </span>
          <SafeIcon icon={isExpanded ? FiChevronUp : FiChevronDown} className="w-4 h-4" />
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(insight.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Recommendations</h4>
              <div className="space-y-2">
                {insight.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <SafeIcon icon={FiArrowRight} className="w-3 h-3 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-3 pt-2">
              <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                Discuss in Chat
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Export
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InsightCard;