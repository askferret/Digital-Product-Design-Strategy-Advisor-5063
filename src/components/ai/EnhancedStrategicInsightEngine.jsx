import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useDataContext } from '../../context/DataContext';
import { useChatContext } from '../../context/ChatContext';

const { 
  FiBrain, 
  FiTrendingUp, 
  FiTarget, 
  FiAlertTriangle, 
  FiZap, 
  FiArrowRight,
  FiMessageCircle,
  FiFilter,
  FiChevronDown,
  FiChevronUp
} = FiIcons;

const EnhancedStrategicInsightEngine = () => {
  const navigate = useNavigate();
  const { dataSources } = useDataContext();
  const { processUserMessage } = useChatContext();
  const [insights, setInsights] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedInsightId, setExpandedInsightId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

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
        category: 'User Experience',
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
        },
        discussionPrompt: 'What strategies can we implement to reduce the 34% drop-off rate during cross-device transitions?'
      },
      {
        id: 'competitive-gap',
        type: 'competitive_intelligence',
        title: 'Emerging Competitor Feature Gap',
        description: 'Market analysis shows 3 competitors launched AI-powered health risk scoring. Our users are requesting similar features.',
        confidence: 0.92,
        impact: 'high',
        urgency: 'high',
        category: 'Product Strategy',
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
        },
        discussionPrompt: 'How should we prioritize building AI-powered health risk scoring to catch up with competitors?'
      },
      {
        id: 'usage-anomaly',
        type: 'behavioral_analysis',
        title: 'Power User Engagement Cliff',
        description: 'Users who complete >5 actions in first week show 90% retention, but only 12% reach this threshold.',
        confidence: 0.79,
        impact: 'medium',
        urgency: 'medium',
        category: 'User Experience',
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
        },
        discussionPrompt: 'How can we increase the percentage of users who complete 5+ actions in their first week?'
      },
      {
        id: 'mobile-usage',
        type: 'platform_strategy',
        title: 'Mobile Usage Growth',
        description: 'Mobile usage has increased 140% in the last quarter, but your mobile experience lags behind desktop in key workflows.',
        confidence: 0.83,
        impact: 'high',
        urgency: 'medium',
        category: 'Platform Strategy',
        dataSource: ['amplitude', 'user_interviews', 'figma'],
        recommendations: [
          'Audit mobile user journeys',
          'Implement mobile-first design patterns',
          'Optimize for offline functionality'
        ],
        metrics: {
          mobileGrowth: '140%',
          mobileUsage: '42%',
          satisfactionGap: '1.2 points'
        },
        discussionPrompt: 'What should our mobile-first strategy look like given the 140% growth in mobile usage?'
      },
      {
        id: 'integration-opportunity',
        type: 'business_strategy',
        title: 'Integration Opportunities',
        description: 'Your Figma designs show workflow patterns that could integrate with 3 major EHR systems, potentially expanding your TAM by 40%.',
        confidence: 0.84,
        impact: 'high',
        urgency: 'medium',
        category: 'Business Strategy',
        dataSource: ['figma', 'competitive_intel', 'user_interviews'],
        recommendations: [
          'Validate integration demand with current clients',
          'Research EHR partnership requirements',
          'Design API-first architecture'
        ],
        metrics: {
          tamExpansion: '40%',
          ehrSystems: '3 major',
          implementationTime: '6-9 months'
        },
        discussionPrompt: 'How should we approach EHR integrations to maximize our TAM expansion opportunity?'
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
      predictive_analysis: FiZap,
      platform_strategy: FiTarget,
      business_strategy: FiZap
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

  const getImpactColor = (impact) => {
    const colors = {
      high: 'text-red-600 dark:text-red-400',
      medium: 'text-yellow-600 dark:text-yellow-400',
      low: 'text-green-600 dark:text-green-400'
    };
    return colors[impact] || colors.medium;
  };

  const handleDiscussInChat = (insight) => {
    // Navigate to chat page with context
    processUserMessage(insight.discussionPrompt);
    navigate('/chat');
  };

  const toggleInsightExpand = (insightId) => {
    setExpandedInsightId(expandedInsightId === insightId ? null : insightId);
  };

  const filterInsights = () => {
    if (selectedFilter === 'all') return insights;
    return insights.filter(insight => 
      insight.category.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  };

  const filters = [
    { id: 'all', label: 'All Insights', count: insights.length },
    { id: 'user', label: 'User Experience', count: insights.filter(i => i.category === 'User Experience').length },
    { id: 'product', label: 'Product Strategy', count: insights.filter(i => i.category === 'Product Strategy').length },
    { id: 'platform', label: 'Platform Strategy', count: insights.filter(i => i.category === 'Platform Strategy').length },
    { id: 'business', label: 'Business Strategy', count: insights.filter(i => i.category === 'Business Strategy').length }
  ];

  const filteredInsights = filterInsights();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
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
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:space-x-3 w-full md:w-auto">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-auto"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 3 months</option>
          </select>
          
          <button
            onClick={generateStrategicInsights}
            disabled={isGenerating}
            className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors text-sm w-full sm:w-auto"
          >
            <SafeIcon 
              icon={FiBrain} 
              className={`w-4 h-4 ${isGenerating ? 'animate-pulse' : ''}`} 
            />
            <span>{isGenerating ? 'Analyzing...' : 'Refresh Insights'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiFilter} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filters {selectedFilter !== 'all' && `(${selectedFilter})`}
            </span>
          </div>
          <SafeIcon 
            icon={showFilters ? FiChevronUp : FiChevronDown} 
            className="w-4 h-4 text-gray-600 dark:text-gray-400" 
          />
        </button>
      </div>

      {/* Filters */}
      <div className={`${showFilters || 'hidden md:flex'} flex-wrap items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide`}>
        {filters.map((filter, index) => (
          <motion.button 
            key={filter.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => {
              setSelectedFilter(filter.id);
              setShowFilters(false);
            }}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap mb-2 md:mb-0 ${
              selectedFilter === filter.id 
                ? 'bg-primary-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span>{filter.label}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-xs ${
              selectedFilter === filter.id 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}>
              {filter.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Insights Grid */}
      {isGenerating ? (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredInsights.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiBrain} className="w-8 h-8 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No Insights Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 px-4">
                Try adjusting your filters or connect more data sources to generate insights.
              </p>
            </motion.div>
          ) : (
            filteredInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
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
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(insight.urgency)}`}>
                            {insight.urgency.toUpperCase()}
                          </span>
                          <span className={`text-xs font-medium ${getConfidenceColor(insight.confidence)}`}>
                            {Math.round(insight.confidence * 100)}% confidence
                          </span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            {insight.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {insight.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Impact: </span>
                        <span className={`font-medium ${getImpactColor(insight.impact)}`}>
                          {insight.impact.charAt(0).toUpperCase() + insight.impact.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => toggleInsightExpand(insight.id)}
                      className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <span className="text-sm font-medium">
                        {expandedInsightId === insight.id ? 'Show Less' : 'View Details'}
                      </span>
                      <SafeIcon 
                        icon={expandedInsightId === insight.id ? FiChevronUp : FiChevronDown} 
                        className="w-4 h-4" 
                      />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>Sources:</span>
                      {insight.dataSource.map((source, idx) => (
                        <span key={idx} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded capitalize">
                          {source.replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => handleDiscussInChat(insight)}
                      className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                    >
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                      <span>Discuss in Chat</span>
                    </button>
                  </div>
                </div>

                {/* Expanded content */}
                <motion.div 
                  initial={false}
                  animate={{ height: expandedInsightId === insight.id ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60">
                    <div className="pt-4 space-y-4">
                      {/* Metrics */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(insight.metrics).map(([key, value]) => (
                            <div key={key} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                              <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommendations */}
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          AI Recommendations:
                        </h4>
                        <div className="space-y-2">
                          {insight.recommendations.map((rec, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3 pt-2">
                        <button 
                          onClick={() => handleDiscussInChat(insight)}
                          className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                          <span>Discuss in Strategy Chat</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* AI Learning Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800/30"
      >
        <div className="flex items-center space-x-3 mb-3">
          <SafeIcon icon={FiBrain} className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">AI Learning Progress</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              {filteredInsights.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Strategic Insights</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedStrategicInsightEngine;