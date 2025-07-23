import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiCheck, FiLoader } = FiIcons;

const ConnectModal = ({ isOpen, onClose, connections, onConnect }) => {
  const [connecting, setConnecting] = useState(null);

  const handleConnect = async (connection) => {
    setConnecting(connection.id);
    
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onConnect(connection);
    setConnecting(null);
  };

  const colorClasses = {
    purple: {
      light: 'bg-purple-50 text-purple-600',
      dark: 'bg-purple-900/20 text-purple-400'
    },
    blue: {
      light: 'bg-blue-50 text-blue-600',
      dark: 'bg-blue-900/20 text-blue-400'
    },
    green: {
      light: 'bg-green-50 text-green-600',
      dark: 'bg-green-900/20 text-green-400'
    },
    orange: {
      light: 'bg-orange-50 text-orange-600',
      dark: 'bg-orange-900/20 text-orange-400'
    },
    gray: {
      light: 'bg-gray-50 text-gray-600',
      dark: 'bg-gray-800/40 text-gray-400'
    },
    indigo: {
      light: 'bg-indigo-50 text-indigo-600',
      dark: 'bg-indigo-900/20 text-indigo-400'
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-80 transition-opacity"
              onClick={onClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6 mx-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Connect Data Source
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {connections.map((connection) => (
                  <motion.div
                    key={connection.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClasses[connection.color].light} dark:${colorClasses[connection.color].dark}`}>
                        <SafeIcon icon={connection.icon} className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white truncate">{connection.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{connection.description}</p>
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full mt-2">
                          {connection.category}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleConnect(connection)}
                      disabled={connecting === connection.id}
                      className="w-full flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-2.5 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {connecting === connection.id ? (
                        <>
                          <SafeIcon icon={FiLoader} className="w-4 h-4 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <SafeIcon icon={FiCheck} className="w-4 h-4" />
                          <span>Connect</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Why connect data sources?</h4>
                <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                  <li>• Get personalized strategic recommendations</li>
                  <li>• Analyze patterns across your design and user data</li>
                  <li>• Receive contextual advice based on your actual metrics</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;