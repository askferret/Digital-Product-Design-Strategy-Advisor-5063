import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiFilter, FiDownload } = FiIcons;

const AnalyticsFilters = ({ 
  selectedTimeRange, 
  onTimeRangeChange, 
  selectedMetrics, 
  onMetricsChange,
  onExport 
}) => {
  const timeRanges = [
    { id: '7d', label: 'Last 7 days' },
    { id: '30d', label: 'Last 30 days' },
    { id: '90d', label: 'Last 3 months' },
    { id: '1y', label: 'Last year' },
    { id: 'custom', label: 'Custom range' }
  ];

  const metricCategories = [
    { id: 'usage', label: 'Usage Metrics', count: 8 },
    { id: 'engagement', label: 'Engagement', count: 6 },
    { id: 'performance', label: 'Performance', count: 4 },
    { id: 'business', label: 'Business Impact', count: 5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Time Range Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCalendar} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Time Range:
            </span>
          </div>
          <select
            value={selectedTimeRange}
            onChange={(e) => onTimeRangeChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            {timeRanges.map(range => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Metric Categories Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiFilter} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Metrics:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {metricCategories.map(category => (
              <button
                key={category.id}
                onClick={() => onMetricsChange(category.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedMetrics.includes(category.id)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={onExport}
          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
        >
          <SafeIcon icon={FiDownload} className="w-4 h-4" />
          <span>Export Data</span>
        </button>
      </div>
    </motion.div>
  );
};

export default AnalyticsFilters;