import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ChartContainer from '../analytics/ChartContainer';
import LineChart from '../analytics/LineChart';

const { FiZap, FiTrendingUp, FiAlertTriangle, FiTarget } = FiIcons;

const PredictiveAnalytics = () => {
  const [selectedMetric, setSelectedMetric] = useState('user_retention');
  const [timeHorizon, setTimeHorizon] = useState('3_months');

  const predictions = {
    user_retention: {
      title: 'User Retention Forecast',
      current: '67%',
      predicted: '74%',
      confidence: 0.85,
      trend: 'up',
      factors: [
        'Onboarding improvements (+4%)',
        'Feature adoption patterns (+2%)',
        'Seasonal healthcare trends (+1%)'
      ],
      data: [
        {label: 'Week 1', value: 67},
        {label: 'Week 2', value: 68},
        {label: 'Week 3', value: 69},
        {label: 'Week 4', value: 71},
        {label: 'Week 5', value: 72},
        {label: 'Week 6', value: 73},
        {label: 'Week 7', value: 74}
      ]
    },
    feature_adoption: {
      title: 'Feature Adoption Forecast',
      current: '34%',
      predicted: '45%',
      confidence: 0.78,
      trend: 'up',
      factors: [
        'UI improvements (+6%)',
        'User education (+3%)',
        'Workflow optimization (+2%)'
      ],
      data: [
        {label: 'Week 1', value: 34},
        {label: 'Week 2', value: 36},
        {label: 'Week 3', value: 38},
        {label: 'Week 4', value: 41},
        {label: 'Week 5', value: 43},
        {label: 'Week 6', value: 44},
        {label: 'Week 7', value: 45}
      ]
    },
    conversion_rate: {
      title: 'Conversion Rate Forecast',
      current: '12.4%',
      predicted: '15.8%',
      confidence: 0.72,
      trend: 'up',
      factors: [
        'Landing page optimization (+2.1%)',
        'Pricing strategy adjustment (+0.8%)',
        'Social proof additions (+0.5%)'
      ],
      data: [
        {label: 'Week 1', value: 12.4},
        {label: 'Week 2', value: 13.1},
        {label: 'Week 3', value: 13.8},
        {label: 'Week 4', value: 14.5},
        {label: 'Week 5', value: 15.1},
        {label: 'Week 6', value: 15.5},
        {label: 'Week 7', value: 15.8}
      ]
    }
  };

  const currentPrediction = predictions[selectedMetric];

  const scenarios = [
    {
      name: 'Optimistic',
      description: 'All planned improvements executed successfully',
      probability: 0.25,
      impact: '+15-20%',
      color: 'green'
    },
    {
      name: 'Most Likely',
      description: 'Current trends continue with moderate improvements',
      probability: 0.60,
      impact: '+5-10%',
      color: 'blue'
    },
    {
      name: 'Conservative',
      description: 'Minimal improvements, external challenges',
      probability: 0.15,
      impact: '0-5%',
      color: 'yellow'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiZap} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Predictive Analytics
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered forecasting based on historical patterns
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-auto"
        >
          <option value="user_retention">User Retention</option>
          <option value="feature_adoption">Feature Adoption</option>
          <option value="conversion_rate">Conversion Rate</option>
        </select>

        <select
          value={timeHorizon}
          onChange={(e) => setTimeHorizon(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-auto"
        >
          <option value="1_month">1 Month</option>
          <option value="3_months">3 Months</option>
          <option value="6_months">6 Months</option>
        </select>
      </div>

      {/* Main Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
          <ChartContainer title={currentPrediction.title} subtitle={`${Math.round(currentPrediction.confidence * 100)}% confidence interval`}>
            <LineChart data={currentPrediction.data} height={300} />
          </ChartContainer>
        </div>

        {/* Prediction Summary */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Forecast</h3>
              <div className={`flex items-center space-x-1 text-sm ${currentPrediction.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                <SafeIcon icon={currentPrediction.trend === 'up' ? FiTrendingUp : FiAlertTriangle} className="w-4 h-4" />
                <span>{currentPrediction.trend === 'up' ? 'Improving' : 'Declining'}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Current</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentPrediction.current}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Predicted</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {currentPrediction.predicted}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Confidence</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {Math.round(currentPrediction.confidence * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* Contributing Factors */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Key Factors
            </h3>
            <div className="space-y-3">
              {currentPrediction.factors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Scenario Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border-2 ${
                scenario.color === 'green' ? 'border-green-200 bg-green-50 dark:border-green-800/30 dark:bg-green-900/10' :
                scenario.color === 'blue' ? 'border-blue-200 bg-blue-50 dark:border-blue-800/30 dark:bg-blue-900/10' :
                'border-yellow-200 bg-yellow-50 dark:border-yellow-800/30 dark:bg-yellow-900/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className={`font-semibold ${
                  scenario.color === 'green' ? 'text-green-900 dark:text-green-300' :
                  scenario.color === 'blue' ? 'text-blue-900 dark:text-blue-300' :
                  'text-yellow-900 dark:text-yellow-300'
                }`}>
                  {scenario.name}
                </h4>
                <span className={`text-sm font-medium ${
                  scenario.color === 'green' ? 'text-green-700 dark:text-green-400' :
                  scenario.color === 'blue' ? 'text-blue-700 dark:text-blue-400' :
                  'text-yellow-700 dark:text-yellow-400'
                }`}>
                  {Math.round(scenario.probability * 100)}%
                </span>
              </div>
              <p className={`text-sm mb-3 ${
                scenario.color === 'green' ? 'text-green-800 dark:text-green-400' :
                scenario.color === 'blue' ? 'text-blue-800 dark:text-blue-400' :
                'text-yellow-800 dark:text-yellow-400'
              }`}>
                {scenario.description}
              </p>
              <div className={`text-lg font-bold ${
                scenario.color === 'green' ? 'text-green-900 dark:text-green-300' :
                scenario.color === 'blue' ? 'text-blue-900 dark:text-blue-300' :
                'text-yellow-900 dark:text-yellow-300'
              }`}>
                {scenario.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;