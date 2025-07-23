import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowUp, FiArrowDown } = FiIcons;

const MetricsCard = ({ metric, index }) => {
  const colorClasses = {
    primary: {
      light: 'bg-primary-50 text-primary-600',
      dark: 'bg-primary-900/30 text-primary-400'
    },
    green: {
      light: 'bg-green-50 text-green-600',
      dark: 'bg-green-900/30 text-green-400'
    },
    blue: {
      light: 'bg-blue-50 text-blue-600',
      dark: 'bg-blue-900/30 text-blue-400'
    },
    purple: {
      light: 'bg-purple-50 text-purple-600',
      dark: 'bg-purple-900/30 text-purple-400'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[metric.color].light} dark:${colorClasses[metric.color].dark}`}>
          <SafeIcon icon={metric.icon} className="w-5 h-5" />
        </div>
        <div className={`flex items-center space-x-1 text-sm ${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          <SafeIcon icon={metric.trend === 'up' ? FiArrowUp : FiArrowDown} className="w-3 h-3" />
          <span>{metric.change}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.title}</p>
    </motion.div>
  );
};

export default MetricsCard;