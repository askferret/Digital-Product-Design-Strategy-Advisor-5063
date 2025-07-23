import React from 'react';
import { motion } from 'framer-motion';

const InsightFilters = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All Insights', count: 4 },
    { id: 'user', label: 'User Experience', count: 1 },
    { id: 'product', label: 'Product Strategy', count: 1 },
    { id: 'platform', label: 'Platform Strategy', count: 1 },
    { id: 'business', label: 'Business Strategy', count: 1 }
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((filter, index) => (
        <motion.button
          key={filter.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            selectedFilter === filter.id
              ? 'bg-primary-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          <span>{filter.label}</span>
          <span className={`px-1.5 py-0.5 rounded-full text-xs ${
            selectedFilter === filter.id
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
          }`}>
            {filter.count}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default InsightFilters;