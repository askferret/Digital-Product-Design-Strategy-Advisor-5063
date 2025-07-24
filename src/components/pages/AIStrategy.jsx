import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import EnhancedStrategicInsightEngine from '../ai/EnhancedStrategicInsightEngine';
import PredictiveAnalytics from '../ai/PredictiveAnalytics';
import DesignRecommendationEngine from '../ai/DesignRecommendationEngine';

const { FiBrain, FiZap, FiTarget, FiTrendingUp, FiActivity } = FiIcons;

const AIStrategy = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const tabs = [
    {
      id: 'insights',
      label: 'Strategic Insights',
      icon: FiBrain,
      description: 'Cross-platform intelligence and pattern recognition'
    },
    {
      id: 'predictions',
      label: 'Predictive Analytics',
      icon: FiTrendingUp,
      description: 'Forecast trends and scenario modeling'
    },
    {
      id: 'recommendations',
      label: 'Design Recommendations',
      icon: FiTarget,
      description: 'AI-powered design improvement suggestions'
    }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'insights':
        return <EnhancedStrategicInsightEngine />;
      case 'predictions':
        return <PredictiveAnalytics />;
      case 'recommendations':
        return <DesignRecommendationEngine />;
      default:
        return <EnhancedStrategicInsightEngine />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            AI Strategy Center
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Advanced AI-powered insights and recommendations for strategic design decisions
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <SafeIcon icon={FiActivity} className="w-4 h-4" />
          <span>AI models updated: 2 minutes ago</span>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 sm:p-6 text-white"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiZap} className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-semibold">AI-Powered Intelligence</h2>
        </div>
        <p className="text-purple-100 mb-6">
          Our advanced AI analyzes patterns across your entire design ecosystem, providing actionable insights 
          that traditional analytics miss. Get strategic recommendations backed by machine learning.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">87%</div>
            <div className="text-sm text-purple-100">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">156</div>
            <div className="text-sm text-purple-100">Patterns Detected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">$2.3M</div>
            <div className="text-sm text-purple-100">Impact Identified</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-1 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-1 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[100px] flex items-center justify-center space-x-2 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <SafeIcon icon={tab.icon} className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Description */}
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tabs.find(tab => tab.id === activeTab)?.description}
        </p>
      </div>

      {/* Active Component */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderActiveComponent()}
      </motion.div>

      {/* AI Learning Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">AI Model Performance</h3>
          <span className="text-sm text-green-600 dark:text-green-400 font-medium">Optimal</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-white">98.2%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Data Quality</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-white">45ms</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-white">12.4K</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Daily Analyses</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 dark:text-white">99.7%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIStrategy;