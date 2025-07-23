import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import MetricsCard from '../dashboard/MetricsCard';
import RecentActivity from '../dashboard/RecentActivity';
import QuickActions from '../dashboard/QuickActions';

const {FiMessageCircle, FiTrendingUp, FiDatabase, FiTarget, FiCompass} = FiIcons;

const Dashboard = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'Strategic Sessions',
      value: '12',
      change: '+23%',
      trend: 'up',
      icon: FiMessageCircle,
      color: 'primary'
    },
    {
      title: 'Data Sources',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: FiDatabase,
      color: 'green'
    },
    {
      title: 'Insights Generated',
      value: '47',
      change: '+15%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'blue'
    },
    {
      title: 'Goals Achieved',
      value: '6/8',
      change: '75%',
      trend: 'up',
      icon: FiTarget,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 sm:p-8 text-white"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-primary-100 text-base sm:text-lg mb-6">
          Ready to drive strategic design decisions for your{' '}
          <span className="font-semibold">HealthTech</span> startup?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => navigate('/chat')}
            className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
          >
            Start Strategy Session
          </button>
          <button
            onClick={() => navigate('/compass')}
            className="border border-primary-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors text-center flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiCompass} className="w-5 h-5" />
            <span>Strategic Compass</span>
          </button>
          <button
            onClick={() => navigate('/data-sources')}
            className="border border-primary-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-500 transition-colors text-center"
          >
            Connect Data
          </button>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <MetricsCard key={metric.title} metric={metric} index={index} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <RecentActivity />
        </div>
        <div className="order-1 lg:order-2">
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;