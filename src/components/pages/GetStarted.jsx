import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiCheck, FiArrowRight, FiTarget, FiDatabase, FiTrendingUp, FiUser } = FiIcons;

const GetStarted = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to Design Strategy Advisor',
      description: 'Get familiar with the platform and its capabilities',
      icon: FiPlay,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Welcome!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Design Strategy Advisor helps you make data-driven design decisions for your healthcare platform. 
            Let's get you set up for success.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">What you'll learn:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
              <li>• How to connect your data sources</li>
              <li>• Using the Strategic Compass wizard</li>
              <li>• Interpreting AI-generated insights</li>
              <li>• Setting up your profile for personalized advice</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'profile',
      title: 'Set Up Your Profile',
      description: 'Tell us about your company and goals for personalized advice',
      icon: FiUser,
      color: 'green',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Setup</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Your profile helps us provide more relevant strategic advice tailored to your specific context.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Company Info</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Industry, stage, team size
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Strategic Goals</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                What you want to achieve
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-sources',
      title: 'Connect Your Data Sources',
      description: 'Link your design tools and analytics for better insights',
      icon: FiDatabase,
      color: 'purple',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Sources</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Connect your tools to get personalized strategic recommendations based on your actual data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Figma', desc: 'Design files & prototypes' },
              { name: 'Analytics', desc: 'User behavior data' },
              { name: 'Research', desc: 'User feedback & insights' }
            ].map((source, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{source.name}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'strategic-compass',
      title: 'Try Strategic Compass',
      description: 'Learn how to use our guided strategy workflow',
      icon: FiTarget,
      color: 'orange',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Strategic Compass</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our guided workflow helps you make strategic design decisions through a structured process.
          </p>
          <div className="space-y-3">
            {[
              'Define your business goal',
              'Add context and files',
              'Explore strategic paths',
              'Get actionable recommendations'
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'insights',
      title: 'Understanding Insights',
      description: 'Learn how to interpret AI-generated strategic insights',
      icon: FiTrendingUp,
      color: 'indigo',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Strategic Insights</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our AI analyzes your data to provide strategic recommendations categorized by priority and impact.
          </p>
          <div className="space-y-3">
            {[
              { label: 'High Priority', color: 'red', desc: 'Immediate attention needed' },
              { label: 'Medium Priority', color: 'yellow', desc: 'Important for planning' },
              { label: 'Low Priority', color: 'green', desc: 'Nice to have improvements' }
            ].map((priority, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full bg-${priority.color}-400`}></div>
                <span className="font-medium text-gray-900 dark:text-white">{priority.label}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">- {priority.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const handleStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Get Started</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Complete your onboarding journey and unlock the full potential of Design Strategy Advisor
          </p>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {completedSteps.length} of {steps.length} completed
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-primary-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Current Step */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${steps[currentStep].color}-100 dark:bg-${steps[currentStep].color}-900/20`}>
                <SafeIcon 
                  icon={steps[currentStep].icon} 
                  className={`w-6 h-6 text-${steps[currentStep].color}-600 dark:text-${steps[currentStep].color}-400`} 
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {steps[currentStep].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
            {completedSteps.includes(steps[currentStep].id) && (
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <SafeIcon icon={FiCheck} className="w-5 h-5" />
                <span className="text-sm font-medium">Completed</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            {steps[currentStep].content}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => handleStepComplete(steps[currentStep].id)}
              className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <span>
                {completedSteps.includes(steps[currentStep].id) 
                  ? 'Next' 
                  : currentStep === steps.length - 1 
                    ? 'Complete' 
                    : 'Mark Complete'
                }
              </span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Steps Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">All Steps</h3>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                index === currentStep 
                  ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                completedSteps.includes(step.id)
                  ? 'bg-green-100 dark:bg-green-900/20'
                  : index === currentStep
                    ? `bg-${step.color}-100 dark:bg-${step.color}-900/20`
                    : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                {completedSteps.includes(step.id) ? (
                  <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <SafeIcon 
                    icon={step.icon} 
                    className={`w-4 h-4 ${
                      index === currentStep 
                        ? `text-${step.color}-600 dark:text-${step.color}-400` 
                        : 'text-gray-600 dark:text-gray-400'
                    }`} 
                  />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;