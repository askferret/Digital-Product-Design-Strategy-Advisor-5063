import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiZap, FiUsers, FiTrendingUp, FiCheckCircle, FiClock, FiDollarSign } = FiIcons;

const DesignRecommendationEngine = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const recommendations = [
    {
      id: 'mobile-first-checkout',
      title: 'Mobile-First Checkout Redesign',
      category: 'conversion',
      priority: 'high',
      impact: 'high',
      effort: 'medium',
      confidence: 0.89,
      description: 'Redesign checkout flow specifically for mobile users, who represent 68% of traffic but only 34% of conversions.',
      currentMetric: '34% mobile conversion',
      projectedMetric: '52% mobile conversion',
      timeframe: '4-6 weeks',
      businessImpact: {
        revenue: '+$127K ARR',
        users: '+2,340 monthly conversions',
        efficiency: '40% faster checkout'
      },
      designChanges: [
        'Single-page checkout with progressive disclosure',
        'Larger touch targets and simplified form fields',
        'Apple Pay and Google Pay integration',
        'Guest checkout option with optional account creation'
      ],
      aiReasoning: 'Analysis of 50,000+ user sessions shows mobile users abandon at form fields 3x more than desktop users. Competitor analysis reveals single-page checkout reduces abandonment by 23%.',
      dataSource: ['amplitude', 'hotjar', 'competitive_analysis']
    },
    {
      id: 'onboarding-personalization',
      title: 'Personalized Onboarding Paths',
      category: 'engagement',
      priority: 'high',
      impact: 'high',
      effort: 'high',
      confidence: 0.76,
      description: 'Create role-based onboarding flows for different user types: clinicians, administrators, and patients.',
      currentMetric: '45% completion rate',
      projectedMetric: '67% completion rate',
      timeframe: '8-10 weeks',
      businessImpact: {
        retention: '+22% 30-day retention',
        activation: '+34% feature adoption',
        support: '-28% onboarding tickets'
      },
      designChanges: [
        'Role selection wizard on signup',
        'Customized feature tours based on user type',
        'Progressive feature unlocking',
        'Role-specific dashboard layouts'
      ],
      aiReasoning: 'User interview analysis shows 73% of churned users felt overwhelmed by irrelevant features. Successful users engaged with 3-4 core features in their first week.',
      dataSource: ['user_interviews', 'amplitude', 'support_tickets']
    },
    {
      id: 'notification-intelligence',
      title: 'Smart Notification System',
      category: 'retention',
      priority: 'medium',
      impact: 'medium',
      effort: 'medium',
      confidence: 0.82,
      description: 'AI-powered notification timing and content optimization based on user behavior patterns.',
      currentMetric: '12% notification CTR',
      projectedMetric: '28% notification CTR',
      timeframe: '6-8 weeks',
      businessImpact: {
        engagement: '+45% daily active users',
        retention: '+18% weekly retention',
        satisfaction: '+0.7 NPS score'
      },
      designChanges: [
        'Behavioral trigger-based notifications',
        'Personalized notification frequency settings',
        'Rich notification content with contextual actions',
        'Smart quiet hours based on usage patterns'
      ],
      aiReasoning: 'Notification timing analysis reveals 67% higher engagement when sent during user\'s historical active hours. Content relevance scoring shows personalized messages have 3x higher CTR.',
      dataSource: ['amplitude', 'notification_logs', 'user_preferences']
    },
    {
      id: 'accessibility-audit',
      title: 'Comprehensive Accessibility Enhancement',
      category: 'usability',
      priority: 'medium',
      impact: 'medium',
      effort: 'low',
      confidence: 0.94,
      description: 'Systematic accessibility improvements to meet WCAG 2.1 AA standards and expand user base.',
      currentMetric: '67% accessibility score',
      projectedMetric: '95% accessibility score',
      timeframe: '3-4 weeks',
      businessImpact: {
        compliance: 'WCAG 2.1 AA certified',
        market: '+15% addressable market',
        risk: '-$50K legal risk mitigation'
      },
      designChanges: [
        'Color contrast optimization',
        'Keyboard navigation improvements',
        'Screen reader compatibility',
        'Alternative text for all images'
      ],
      aiReasoning: 'Automated accessibility scanning identified 23 critical issues. Healthcare regulations require AA compliance, and 26% of healthcare workers have accessibility needs.',
      dataSource: ['accessibility_audit', 'regulatory_requirements', 'user_research']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories', count: recommendations.length },
    { id: 'conversion', label: 'Conversion', count: recommendations.filter(r => r.category === 'conversion').length },
    { id: 'engagement', label: 'Engagement', count: recommendations.filter(r => r.category === 'engagement').length },
    { id: 'retention', label: 'Retention', count: recommendations.filter(r => r.category === 'retention').length },
    { id: 'usability', label: 'Usability', count: recommendations.filter(r => r.category === 'usability').length }
  ];

  const filteredRecommendations = recommendations.filter(rec => {
    const categoryMatch = selectedCategory === 'all' || rec.category === selectedCategory;
    const priorityMatch = priorityFilter === 'all' || rec.priority === priorityFilter;
    return categoryMatch && priorityMatch;
  });

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
      low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    };
    return colors[priority] || colors.medium;
  };

  const getImpactIcon = (impact) => {
    const icons = {
      high: FiTrendingUp,
      medium: FiTarget,
      low: FiUsers
    };
    return icons[impact] || FiTarget;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiZap} className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              AI Design Recommendations
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data-driven design improvements ranked by impact
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
        
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      {/* Recommendations Grid */}
      <div className="space-y-6">
        {filteredRecommendations.map((rec, index) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <SafeIcon 
                    icon={getImpactIcon(rec.impact)} 
                    className="w-6 h-6 text-green-600 dark:text-green-400" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {rec.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full font-medium ${getPriorityColor(rec.priority)}`}>
                      {rec.priority.toUpperCase()}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {Math.round(rec.confidence * 100)}% confidence
                    </span>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <SafeIcon icon={FiClock} className="w-3 h-3" />
                      <span>{rec.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Impact Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Current</span>
                      <span className="font-medium text-gray-900 dark:text-white">{rec.currentMetric}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Projected</span>
                      <span className="font-medium text-green-600 dark:text-green-400">{rec.projectedMetric}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Business Impact</h4>
                  <div className="space-y-2">
                    {Object.entries(rec.businessImpact).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Design Changes</h4>
                  <div className="space-y-2">
                    {rec.designChanges.map((change, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Reasoning */}
            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2 flex items-center space-x-2">
                <SafeIcon icon={FiZap} className="w-4 h-4" />
                <span>AI Analysis</span>
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-300">{rec.aiReasoning}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs text-blue-700 dark:text-blue-400">Data sources:</span>
                {rec.dataSource.map((source, idx) => (
                  <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded capitalize">
                    {source.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Effort: {rec.effort}</span>
                <span>•</span>
                <span>Impact: {rec.impact}</span>
              </div>
              
              <div className="flex space-x-3">
                <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium">
                  View Details
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Start Implementation
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignRecommendationEngine;