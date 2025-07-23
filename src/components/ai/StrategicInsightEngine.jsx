import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useDataContext } from '../../context/DataContext';

const { FiBrain, FiTrendingUp, FiTarget, FiAlertTriangle, FiZap } = FiIcons;

const StrategicInsightEngine = () => {
  const { dataSources } = useDataContext();
  const [insights, setInsights] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  // AI-powered insight generation based on multiple data sources
  const generateStrategicInsights = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newInsights = [
      {
        id: 'cross-platform-pattern',
        type: 'pattern_recognition',
        title: 'Cross-Platform User Journey Friction',
        description: 'AI detected a 34% drop-off when users switch from mobile to desktop during the verification process.',
        confidence: 0.87,
        impact: 'high',
        urgency: 'medium',
        dataSource: ['figma', 'amplitude'],
        recommendations: [
          'Implement progressive web app features for seamless cross-device experience',
          'Add device-sync notifications to guide users through transitions',
          'Optimize mobile verification flow to reduce need for desktop completion'
        ],
        metrics: {
          affectedUsers: '2,340 monthly',
          potentialRevenue: '$45,000 ARR',
          implementationEffort: '3-4 sprints'
        }
      },
      {
        id: 'competitive-gap',
        type: 'competitive_intelligence',
        title: 'Emerging Competitor Feature Gap',
        description: 'Market analysis shows 3 competitors launched AI-powered health risk scoring. Our users are requesting similar features.',
        confidence: 0.92,
        impact: 'high',
        urgency: 'high',
        dataSource: ['user_interviews', 'competitive_intel'],
        recommendations: [
          'Fast-track AI risk scoring MVP for Q2',
          'Partner with existing ML providers to accelerate development',
          'Survey existing users for specific risk scoring needs'
        ],
        metrics: {
          competitorAdvantage: '6-month head start',
          userRequests: '127 in last 30 days',
          marketOpportunity: '$1.2M TAM expansion'
        }
      },
      {
        id: 'usage-anomaly',
        type: 'behavioral_analysis',
        title: 'Power User Engagement Cliff',
        description: 'Users who complete >5 actions in first week show 90% retention, but only 12% reach this threshold.',
        confidence: 0.79,
        impact: 'medium',
        urgency: 'medium',
        dataSource: ['amplitude', 'user_interviews'],
        recommendations: [
          'Create guided "power user" onboarding track',
          'Implement progressive disclosure of advanced features',
          'Add gamification elements to encourage feature exploration'
        ],
        metrics: {
          currentActivation: '12%',
          targetActivation: '25%',
          retentionLift: '+78% at 30 days'
        }
      }
    ];
    
    setInsights(newInsights);
    setIsGenerating(false);
  };

  useEffect(() => {
    if (dataSources.length > 0) {
      generateStrategicInsights();
    }
  }, [dataSources, selectedTimeframe]);

  const getInsightIcon = (type) => {
    const icons = {
      pattern_recognition: FiTrendingUp,
      competitive_intelligence: FiTarget,
      behavioral_analysis: FiBrain,
      predictive_analysis: FiZap
    };
    return icons[type] || FiBrain;
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 0.8) return 'text-green-600 dark:text-green-400';
    if (confidence >= 0.6) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[urgency] || colors.medium;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiBrain} className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Strategic Insights
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cross-platform intelligence from {dataSources.length} connected sources
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 3 months</option>
          </select>
          
          <button
            onClick={generateStrategicInsights}
            disabled={isGenerating}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors text-sm"
          >
            <SafeIcon 
              icon={FiBrain} 
              className={`w-4 h-4 ${isGenerating ? 'animate-pulse' : ''}`} 
            />
            <span>{isGenerating ? 'Analyzing...' : 'Refresh Insights'}</span>
          </button>
        </div>
      </div>

      {/* Insights Grid */}
      {isGenerating ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <SafeIcon 
                      icon={getInsightIcon(insight.type)} 
                      className="w-5 h-5 text-purple-600 dark:text-purple-400" 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {insight.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(insight.urgency)}`}>
                        {insight.urgency.toUpperCase()}
                      </span>
                      <span className={`text-xs font-medium ${getConfidenceColor(insight.confidence)}`}>
                        {Math.round(insight.confidence * 100)}% confidence
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {insight.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(insight.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  AI Recommendations:
                </h4>
                {insight.recommendations.slice(0, 2).map((rec, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{rec}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>Sources:</span>
                  {insight.dataSource.map((source, idx) => (
                    <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded capitalize">
                      {source.replace('_', ' ')}
                    </span>
                  ))}
                </div>
                
                <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* AI Learning Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-xl p-6 border border-purple-200 dark:border-purple-800/30"
      >
        <div className="flex items-center space-x-3 mb-3">
          <SafeIcon icon={FiBrain} className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">AI Learning Progress</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {dataSources.length * 1247}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Data Points Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              87%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Pattern Recognition Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {insights.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Strategic Insights</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StrategicInsightEngine;