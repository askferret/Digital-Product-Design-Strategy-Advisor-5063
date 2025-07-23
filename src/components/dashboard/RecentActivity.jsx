import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const { FiMessageCircle, FiDatabase, FiTrendingUp, FiFileText } = FiIcons;

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'chat',
      title: 'Strategic session on user onboarding',
      description: 'Discussed optimization strategies for the verification flow',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      icon: FiMessageCircle,
      color: 'blue'
    },
    {
      id: 2,
      type: 'insight',
      title: 'New insight generated',
      description: 'Competitive feature gap analysis completed',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      icon: FiTrendingUp,
      color: 'green'
    },
    {
      id: 3,
      type: 'data',
      title: 'Figma data synced',
      description: '1,247 design files and prototypes updated',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      icon: FiDatabase,
      color: 'purple'
    },
    {
      id: 4,
      type: 'report',
      title: 'Weekly strategy report',
      description: 'Product roadmap recommendations ready for review',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      icon: FiFileText,
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: {
      light: 'bg-blue-50 text-blue-600',
      dark: 'bg-blue-900/30 text-blue-400'
    },
    green: {
      light: 'bg-green-50 text-green-600',
      dark: 'bg-green-900/30 text-green-400'
    },
    purple: {
      light: 'bg-purple-50 text-purple-600',
      dark: 'bg-purple-900/30 text-purple-400'
    },
    orange: {
      light: 'bg-orange-50 text-orange-600',
      dark: 'bg-orange-900/30 text-orange-400'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[activity.color].light} dark:${colorClasses[activity.color].dark}`}>
              <SafeIcon icon={activity.icon} className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;