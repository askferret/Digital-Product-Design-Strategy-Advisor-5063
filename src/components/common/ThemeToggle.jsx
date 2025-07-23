import React from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../../context/ThemeContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-colors ${
        isDark ? 'text-blue-300 hover:text-blue-200' : 'text-yellow-500 hover:text-yellow-400'
      }`}
      whileTap={{ scale: 0.95 }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <SafeIcon 
          icon={isDark ? FiMoon : FiSun} 
          className="w-5 h-5" 
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;