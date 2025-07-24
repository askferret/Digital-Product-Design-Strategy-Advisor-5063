import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMoreHorizontal, FiDownload, FiMaximize2 } = FiIcons;

const ChartContainer = ({ title, subtitle, children, actions = true, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {actions && (
            <div className="flex items-center space-x-1">
              <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors hidden sm:block">
                <SafeIcon icon={FiMaximize2} className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <SafeIcon icon={FiMoreHorizontal} className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default ChartContainer;