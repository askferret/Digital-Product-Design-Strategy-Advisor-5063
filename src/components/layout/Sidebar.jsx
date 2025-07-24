import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuthContext } from '../../context/AuthContext';

const { 
  FiHome, 
  FiMessageCircle, 
  FiDatabase, 
  FiUser, 
  FiPlay, 
  FiUsers,
  FiBarChart3,
  FiBrain
} = FiIcons;

const Sidebar = ({ isOpen, onClose }) => {
  const { hasPermission, PERMISSIONS } = useAuthContext();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: FiHome },
    { name: 'Get Started', href: '/get-started', icon: FiPlay },
    { name: 'Strategy Chat', href: '/chat', icon: FiMessageCircle, permission: PERMISSIONS.USE_CHAT },
    { name: 'AI Strategy', href: '/ai-strategy', icon: FiBrain, permission: PERMISSIONS.VIEW_INSIGHTS },
    { name: 'Data Sources', href: '/data-sources', icon: FiDatabase, permission: PERMISSIONS.VIEW_DATA_SOURCES },
    { name: 'Analytics', href: '/analytics', icon: FiBarChart3, permission: PERMISSIONS.VIEW_INSIGHTS },
    { name: 'Users', href: '/users', icon: FiUsers, permission: PERMISSIONS.VIEW_USERS },
    { name: 'Profile', href: '/profile', icon: FiUser },
  ];

  // Filter navigation items based on permissions
  const filteredNavigation = navigation.filter(item => 
    !item.permission || hasPermission(item.permission)
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:z-0`}
      >
        <nav className="p-4 space-y-1">
          {filteredNavigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.href}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border-r-2 border-primary-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                <SafeIcon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
                {item.name === 'AI Strategy' && (
                  <span className="ml-auto bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Bottom Nav Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 lg:hidden z-40 px-2 py-2">
          <div className="flex justify-around">
            {filteredNavigation.slice(0, 4).map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={({ isActive }) =>
                  `flex flex-col items-center py-2 px-3 rounded-lg text-xs transition-colors ${
                    isActive
                      ? 'text-primary-700 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                <SafeIcon icon={item.icon} className="w-5 h-5 mb-1" />
                <span className="text-[10px]">{item.name.split(' ')[0]}</span>
              </NavLink>
            ))}
            <button
              onClick={() => window.innerWidth < 1024 && onClose(false)}
              className="flex flex-col items-center py-2 px-3 rounded-lg text-xs text-gray-600 dark:text-gray-400"
            >
              <SafeIcon icon={FiUser} className="w-5 h-5 mb-1" />
              <span className="text-[10px]">More</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;