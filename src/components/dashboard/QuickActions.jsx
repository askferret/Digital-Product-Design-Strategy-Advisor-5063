import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuthContext } from '../../context/AuthContext';

const { FiMessageCircle, FiDatabase, FiDownload, FiTarget, FiTrendingUp, FiUsers, FiCompass, FiPlay } = FiIcons;

const QuickActions = () => {
  const navigate = useNavigate();
  const { hasPermission, PERMISSIONS } = useAuthContext();

  const actions = [
    { 
      title: 'Get Started', 
      description: 'Complete your onboarding journey', 
      icon: FiPlay, 
      color: 'green', 
      action: () => navigate('/get-started') 
    },
    { 
      title: 'Start Strategy Session', 
      description: 'Get AI-powered design advice', 
      icon: FiMessageCircle, 
      color: 'primary', 
      action: () => navigate('/chat'),
      permission: PERMISSIONS.USE_CHAT
    },
    { 
      title: 'Strategic Compass Wizard', 
      description: 'Structured design strategy workflow', 
      icon: FiCompass, 
      color: 'purple', 
      action: () => navigate('/compass'),
      permission: PERMISSIONS.USE_COMPASS
    },
    { 
      title: 'Connect Data Source', 
      description: 'Add Figma, analytics, or research data', 
      icon: FiDatabase, 
      color: 'blue', 
      action: () => navigate('/data-sources'),
      permission: PERMISSIONS.VIEW_DATA_SOURCES
    },
    { 
      title: 'View Latest Insights', 
      description: 'See personalized recommendations', 
      icon: FiTrendingUp, 
      color: 'orange', 
      action: () => navigate('/insights'),
      permission: PERMISSIONS.VIEW_INSIGHTS
    },
    { 
      title: 'Manage Users', 
      description: 'Invite and manage team members', 
      icon: FiUsers, 
      color: 'indigo', 
      action: () => navigate('/users'),
      permission: PERMISSIONS.VIEW_USERS
    }
  ];

  // Filter actions based on permissions
  const filteredActions = actions.filter(action => 
    !action.permission || hasPermission(action.permission)
  );

  const colorClasses = {
    primary: {
      light: 'bg-primary-50 text-primary-600 hover:bg-primary-100',
      dark: 'bg-primary-900/20 text-primary-400 hover:bg-primary-900/30'
    },
    purple: {
      light: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      dark: 'bg-purple-900/20 text-purple-400 hover:bg-purple-900/30'
    },
    green: {
      light: 'bg-green-50 text-green-600 hover:bg-green-100',
      dark: 'bg-green-900/20 text-green-400 hover:bg-green-900/30'
    },
    blue: {
      light: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      dark: 'bg-blue-900/20 text-blue-400 hover:bg-blue-900/30'
    },
    orange: {
      light: 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      dark: 'bg-orange-900/20 text-orange-400 hover:bg-orange-900/30'
    },
    indigo: {
      light: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
      dark: 'bg-indigo-900/20 text-indigo-400 hover:bg-indigo-900/30'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {filteredActions.map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            onClick={action.action}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors text-left ${
              colorClasses[action.color].light
            } dark:${colorClasses[action.color].dark}`}
          >
            <SafeIcon icon={action.icon} className="w-5 h-5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-sm">{action.title}</h4>
              <p className="text-xs opacity-80">{action.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Strategic Focus Areas</h4>
        <div className="flex flex-wrap gap-2">
          {['User Experience', 'Product Strategy', 'Competitive Analysis'].map((focus) => (
            <span
              key={focus}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {focus}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickActions;