import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import InsightCard from '../insights/InsightCard';
import InsightFilters from '../insights/InsightFilters';

const { FiTrendingUp, FiTarget, FiUsers, FiZap } = FiIcons;

const Insights = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const insights = [
    {
      id: 1,
      title: 'User Onboarding Optimization',
      description: 'Your user research data shows 34% drop-off during the verification step. Consider implementing progressive disclosure for regulatory requirements.',
      category: 'User Experience',
      priority: 'high',
      impact: 'High',
      effort: 'Medium',
      icon: FiUsers,
      color: 'blue',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      metrics: {
        currentDropOff: '34%',
        projectedImprovement: '15-20%',
        affectedUsers: '2.3k monthly'
      },
      recommendations: [
        'Split verification into multiple steps',
        'Add progress indicators',
        'Provide clear explanations for each requirement'
      ]
    },
    {
      id: 2,
      title: 'Competitive Feature Gap',
      description: 'Analysis shows competitors have advanced reporting features that 67% of your enterprise clients are requesting.',
      category: 'Product Strategy',
      priority: 'high',
      impact: 'High',
      effort: 'High',
      icon: FiTarget,
      color: 'red',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      metrics: {
        clientRequests: '67%',
        revenueImpact: '$1.2M ARR',
        competitorAdvantage: '3-6 months'
      },
      recommendations: [
        'Prioritize reporting module in Q2 roadmap',
        'Partner with BI tool for faster implementation',
        'Design modular architecture for future expansion'
      ]
    },
    {
      id: 3,
      title: 'Mobile Usage Growth',
      description: 'Mobile usage has increased 140% in the last quarter, but your mobile experience lags behind desktop in key workflows.',
      category: 'Platform Strategy',
      priority: 'medium',
      impact: 'Medium',
      effort: 'Medium',
      icon: FiTrendingUp,
      color: 'green',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      metrics: {
        mobileGrowth: '140%',
        mobileUsage: '42%',
        satisfactionGap: '1.2 points'
      },
      recommendations: [
        'Audit mobile user journeys',
        'Implement mobile-first design patterns',
        'Optimize for offline functionality'
      ]
    },
    {
      id: 4,
      title: 'Integration Opportunities',
      description: 'Your Figma designs show workflow patterns that could integrate with 3 major EHR systems, potentially expanding your TAM by 40%.',
      category: 'Business Strategy',
      priority: 'medium',
      impact: 'High',
      effort: 'High',
      icon: FiZap,
      color: 'purple',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      metrics: {
        tamExpansion: '40%',
        ehrSystems: '3 major',
        implementationTime: '6-9 months'
      },
      recommendations: [
        'Validate integration demand with current clients',
        'Research EHR partnership requirements',
        'Design API-first architecture'
      ]
    }
  ];

  const filteredInsights = selectedFilter === 'all' 
    ? insights 
    : insights.filter(insight => insight.category.toLowerCase().includes(selectedFilter));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Strategic Insights</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI-generated insights based on your connected data sources
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
          <span>Last updated: 2 hours ago</span>
        </div>
      </div>

      {/* Filters */}
      <InsightFilters 
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* Content */}
      {filteredInsights.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Insights Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 px-4">
            Try adjusting your filters or connect more data sources to generate insights.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          {filteredInsights.map((insight, index) => (
            <InsightCard key={insight.id} insight={insight} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Insights;