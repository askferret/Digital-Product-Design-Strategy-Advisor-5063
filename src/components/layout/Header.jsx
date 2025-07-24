import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ThemeToggle from '../common/ThemeToggle';

const { FiBell, FiSearch, FiUser, FiMenu, FiX } = FiIcons;

const Header = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16"
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6">
        {/* Mobile menu button */}
        <button 
          onClick={onMobileMenuToggle} 
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors lg:hidden"
        >
          <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DS</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
            Design Strategy Advisor
          </h1>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:hidden">
            DSA
          </h1>
        </div>

        {/* Desktop Search */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search insights, documents..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Mobile & Desktop Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile search toggle */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors md:hidden"
          >
            <SafeIcon icon={FiSearch} className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            <SafeIcon icon={FiBell} className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="flex items-center space-x-2 p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
            <SafeIcon icon={FiUser} className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline dark:text-gray-300">John</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 md:hidden"
          >
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search insights, documents..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;