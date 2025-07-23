import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const { FiCheck, FiRefreshCw, FiMoreVertical, FiDatabase } = FiIcons;

const DataSourceCard = ({ source, index }) => {
  const colorClasses = {
    purple: {
      light: 'bg-purple-50 border-purple-200 text-purple-600',
      dark: 'bg-purple-900/20 border-purple-800/30 text-purple-400'
    },
    blue: {
      light: 'bg-blue-50 border-blue-200 text-blue-600',
      dark: 'bg-blue-900/20 border-blue-800/30 text-blue-400'
    },
    green: {
      light: 'bg-green-50 border-green-200 text-green-600',
      dark: 'bg-green-900/20 border-green-800/30 text-green-400'
    },
    orange: {
      light: 'bg-orange-50 border-orange-200 text-orange-600',
      dark: 'bg-orange-900/20 border-orange-800/30 text-orange-400'
    },
    gray: {
      light: 'bg-gray-50 border-gray-200 text-gray-600',
      dark: 'bg-gray-800/40 border-gray-700 text-gray-400'
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${colorClasses[source.color].light} dark:${colorClasses[source.color].dark}`}>
          <SafeIcon icon={FiDatabase} className="w-6 h-6" />
        </div>
        <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
        </button>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{source.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{source.description}</p>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Status</span>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCheck} className="w-3 h-3 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-medium">Connected</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Records</span>
          <span className="font-medium text-gray-900 dark:text-white">{formatNumber(source.recordCount)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Last Sync</span>
          <span className="text-gray-700 dark:text-gray-300">
            {formatDistanceToNow(source.lastSync, {addSuffix: true})}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
          <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
          <span>Sync Now</span>
        </button>
      </div>
    </motion.div>
  );
};

export default DataSourceCard;