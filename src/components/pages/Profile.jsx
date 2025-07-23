import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiBuilding, FiTarget, FiSave, FiEdit3 } = FiIcons;

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Co-Founder & CEO',
    company: 'HealthFlow Technologies',
    industry: 'HealthTech',
    stage: 'Series B',
    teamSize: '45-60',
    primaryGoals: [
      'Improve user retention by 25%',
      'Expand to enterprise market',
      'Achieve product-market fit for new features'
    ],
    currentChallenges: [
      'Balancing clinical workflow efficiency with data capture',
      'Scaling design team with product growth',
      'Regulatory compliance in new markets'
    ]
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  const industries = ['HealthTech', 'InsureTech', 'AgriTech'];
  const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+'];
  const teamSizes = ['1-10', '11-25', '26-50', '51-100', '100+'];

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Customize your profile to get more personalized strategic advice
          </p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <SafeIcon icon={isEditing ? FiSave : FiEdit3} className="w-4 h-4" />
          <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Basic Information */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Basic Information</h2>
              <p className="text-gray-600 dark:text-gray-400">Your personal and company details</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({...profile, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.title}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.company}
                  onChange={(e) => setProfile({...profile, company: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              {isEditing ? (
                <select
                  value={profile.industry}
                  onChange={(e) => setProfile({...profile, industry: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.industry}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Funding Stage
              </label>
              {isEditing ? (
                <select
                  value={profile.stage}
                  onChange={(e) => setProfile({...profile, stage: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.stage}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Team Size
              </label>
              {isEditing ? (
                <select
                  value={profile.teamSize}
                  onChange={(e) => setProfile({...profile, teamSize: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {teamSizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              ) : (
                <p className="py-2 text-gray-900 dark:text-white">{profile.teamSize}</p>
              )}
            </div>
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiTarget} className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Strategic Goals</h3>
              <p className="text-gray-600 dark:text-gray-400">What you're trying to achieve</p>
            </div>
          </div>
          <div className="space-y-3">
            {profile.primaryGoals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <SafeIcon icon={FiTarget} className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-900 dark:text-white">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Challenges */}
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiBuilding} className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Current Challenges</h3>
              <p className="text-gray-600 dark:text-gray-400">Areas where you need strategic guidance</p>
            </div>
          </div>
          <div className="space-y-3">
            {profile.currentChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <SafeIcon icon={FiBuilding} className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                <span className="text-gray-900 dark:text-white">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;