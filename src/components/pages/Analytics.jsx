import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import AnalyticsCard from '../analytics/AnalyticsCard';
import ChartContainer from '../analytics/ChartContainer';
import LineChart from '../analytics/LineChart';
import BarChart from '../analytics/BarChart';
import DonutChart from '../analytics/DonutChart';
import HeatmapChart from '../analytics/HeatmapChart';
import AnalyticsFilters from '../analytics/AnalyticsFilters';

const { 
  FiTrendingUp, 
  FiUsers, 
  FiMessageCircle, 
  FiTarget, 
  FiDatabase,
  FiClock,
  FiActivity,
  FiBarChart3
} = FiIcons;

const Analytics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedMetrics, setSelectedMetrics] = useState(['usage', 'engagement']);

  const handleMetricsChange = (metricId) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  const handleExport = () => {
    // Export functionality would be implemented here
    console.log('Exporting analytics data...');
  };

  // Sample data for analytics
  const keyMetrics = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.3%',
      trend: 'up',
      icon: FiUsers,
      color: 'primary',
      subMetrics: [
        { label: 'Active this week', value: '1,234' },
        { label: 'New this month', value: '189' }
      ]
    },
    {
      title: 'Chat Sessions',
      value: '1,429',
      change: '+18.5%',
      trend: 'up',
      icon: FiMessageCircle,
      color: 'green',
      subMetrics: [
        { label: 'Avg. session length', value: '8.5 min' },
        { label: 'Messages per session', value: '12.4' }
      ]
    },
    {
      title: 'Insights Generated',
      value: '856',
      change: '+25.1%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'blue',
      subMetrics: [
        { label: 'High priority', value: '142' },
        { label: 'Acted upon', value: '67%' }
      ]
    },
    {
      title: 'Data Sources Connected',
      value: '3,421',
      change: '+8.7%',
      trend: 'up',
      icon: FiDatabase,
      color: 'purple',
      subMetrics: [
        { label: 'Figma connections', value: '1,205' },
        { label: 'Analytics tools', value: '987' }
      ]
    },
    {
      title: 'Avg. Response Time',
      value: '2.3s',
      change: '-15.2%',
      trend: 'up',
      icon: FiClock,
      color: 'orange',
      subMetrics: [
        { label: 'Chat responses', value: '1.8s' },
        { label: 'Insight generation', value: '12.4s' }
      ]
    },
    {
      title: 'User Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: FiTarget,
      color: 'green',
      subMetrics: [
        { label: 'NPS Score', value: '72' },
        { label: 'Feature requests', value: '23' }
      ]
    }
  ];

  // Sample data for charts
  const usageOverTime = [
    { label: 'Jan', value: 1200 },
    { label: 'Feb', value: 1450 },
    { label: 'Mar', value: 1680 },
    { label: 'Apr', value: 1920 },
    { label: 'May', value: 2150 },
    { label: 'Jun', value: 2380 },
    { label: 'Jul', value: 2847 }
  ];

  const featureUsage = [
    { label: 'Chat', value: 1429 },
    { label: 'Insights', value: 856 },
    { label: 'Data Sources', value: 634 },
    { label: 'Compass', value: 421 },
    { label: 'Profile', value: 298 }
  ];

  const userSegments = [
    { label: 'Designers', value: 1250 },
    { label: 'Product Managers', value: 890 },
    { label: 'Researchers', value: 420 },
    { label: 'Developers', value: 287 }
  ];

  // Heatmap data for user activity by hour and day
  const activityHeatmap = [
    [12, 18, 25, 32, 28, 22, 15],  // Monday
    [15, 22, 28, 35, 31, 25, 18],  // Tuesday
    [18, 25, 32, 38, 34, 28, 21],  // Wednesday
    [22, 28, 35, 42, 38, 32, 25],  // Thursday
    [20, 26, 33, 40, 36, 30, 23],  // Friday
    [8, 12, 15, 18, 16, 12, 9],    // Saturday
    [6, 9, 12, 15, 13, 10, 7]      // Sunday
  ];

  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hourLabels = ['9AM', '11AM', '1PM', '3PM', '5PM', '7PM', '9PM'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Advanced Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive insights into platform usage and performance
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <SafeIcon icon={FiActivity} className="w-4 h-4" />
          <span>Last updated: 5 minutes ago</span>
        </div>
      </div>

      {/* Filters */}
      <AnalyticsFilters
        selectedTimeRange={selectedTimeRange}
        onTimeRangeChange={setSelectedTimeRange}
        selectedMetrics={selectedMetrics}
        onMetricsChange={handleMetricsChange}
        onExport={handleExport}
      />

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {keyMetrics.map((metric, index) => (
          <AnalyticsCard key={metric.title} metric={metric} index={index} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Usage Over Time */}
        <ChartContainer
          title="Platform Usage Over Time"
          subtitle="Total active users by month"
        >
          <LineChart data={usageOverTime} height={300} />
        </ChartContainer>

        {/* Feature Usage */}
        <ChartContainer
          title="Feature Usage Distribution"
          subtitle="Most popular platform features"
        >
          <BarChart data={featureUsage} height={300} />
        </ChartContainer>

        {/* User Segments */}
        <ChartContainer
          title="User Segments"
          subtitle="Distribution by user type"
        >
          <DonutChart data={userSegments} size={280} />
        </ChartContainer>

        {/* Activity Heatmap */}
        <ChartContainer
          title="User Activity Heatmap"
          subtitle="Activity patterns by day and time"
        >
          <HeatmapChart
            data={activityHeatmap}
            xLabels={hourLabels}
            yLabels={dayLabels}
          />
        </ChartContainer>
      </div>

      {/* Detailed Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiBarChart3} className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Key Performance Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI-generated insights from your analytics data
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/30">
              <h4 className="font-medium text-green-900 dark:text-green-300 mb-2">
                Strong Growth Trend
              </h4>
              <p className="text-sm text-green-800 dark:text-green-400">
                User engagement has increased 25% this month, with chat sessions showing the highest growth at 18.5%.
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                Peak Usage Times
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-400">
                Highest activity occurs Tuesday-Thursday, 1-3 PM. Consider scheduling maintenance outside these windows.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800/30">
              <h4 className="font-medium text-orange-900 dark:text-orange-300 mb-2">
                Feature Adoption
              </h4>
              <p className="text-sm text-orange-800 dark:text-orange-400">
                Strategic Compass feature has 67% lower usage than expected. Consider improving onboarding flow.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-medium text-purple-900 dark:text-purple-300 mb-2">
                Performance Optimization
              </h4>
              <p className="text-sm text-purple-800 dark:text-purple-400">
                Response times improved 15.2% after recent optimizations. User satisfaction increased accordingly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;