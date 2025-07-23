import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useDataContext } from '../../context/DataContext';
import DataSourceCard from '../data/DataSourceCard';
import ConnectModal from '../data/ConnectModal';

const { FiPlus, FiDatabase, FiFileText, FiUsers, FiBarChart3 } = FiIcons;

const DataSources = () => {
  const { dataSources, addDataSource } = useDataContext();
  const [showConnectModal, setShowConnectModal] = useState(false);

  const availableConnections = [
    {
      id: 'figma',
      name: 'Figma',
      description: 'Design files, prototypes, and user flows',
      icon: FiFileText,
      color: 'purple',
      category: 'Design'
    },
    {
      id: 'amplitude',
      name: 'Amplitude',
      description: 'User behavior analytics and product insights',
      icon: FiBarChart3,
      color: 'blue',
      category: 'Analytics'
    },
    {
      id: 'userinterviews',
      name: 'User Interviews',
      description: 'Research findings and user feedback',
      icon: FiUsers,
      color: 'green',
      category: 'Research'
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Documentation, goals, and business strategy',
      icon: FiFileText,
      color: 'gray',
      category: 'Documentation'
    },
    {
      id: 'airtable',
      name: 'Airtable',
      description: 'Structured data and project management',
      icon: FiDatabase,
      color: 'orange',
      category: 'Database'
    },
    {
      id: 'mixpanel',
      name: 'Mixpanel',
      description: 'Event tracking and user journey analysis',
      icon: FiBarChart3,
      color: 'indigo',
      category: 'Analytics'
    }
  ];

  const handleConnect = (connection) => {
    addDataSource({
      ...connection,
      id: `${connection.id}_${Date.now()}`,
      connectedAt: new Date(),
      status: 'connected',
      lastSync: new Date(),
      recordCount: Math.floor(Math.random() * 10000) + 1000
    });
    setShowConnectModal(false);
  };

  const connectedIds = dataSources.map(ds => ds.id.split('_')[0]);
  const availableToConnect = availableConnections.filter(
    conn => !connectedIds.includes(conn.id)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Sources</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Connect your tools to get personalized strategic advice
          </p>
        </div>
        <button
          onClick={() => setShowConnectModal(true)}
          className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors w-full sm:w-auto"
        >
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Connect Source</span>
        </button>
      </div>

      {/* Content */}
      {dataSources.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiDatabase} className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Data Sources Connected
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto px-4">
            Connect your design tools, analytics platforms, and research data to get tailored strategic advice.
          </p>
          <button
            onClick={() => setShowConnectModal(true)}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Connect Your First Source
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {dataSources.map((source, index) => (
            <DataSourceCard key={source.id} source={source} index={index} />
          ))}
        </div>
      )}

      <ConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        connections={availableToConnect}
        onConnect={handleConnect}
      />
    </div>
  );
};

export default DataSources;