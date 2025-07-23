import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuthContext } from '../../context/AuthContext';
import { formatDistanceToNow } from 'date-fns';

const { FiUser, FiMoreVertical, FiEdit3, FiTrash2, FiMail, FiClock, FiShield } = FiIcons;

const UserCard = ({ user, index, isCurrentUser }) => {
  const { updateUserRole, updateUserStatus, removeUser, hasPermission, PERMISSIONS, ROLES } = useAuthContext();
  const [showActions, setShowActions] = useState(false);
  const [showRoleChange, setShowRoleChange] = useState(false);

  const canManageUsers = hasPermission(PERMISSIONS.MANAGE_USERS);

  const handleRoleChange = (newRole) => {
    updateUserRole(user.id, newRole);
    setShowRoleChange(false);
    setShowActions(false);
  };

  const handleStatusToggle = () => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    updateUserStatus(user.id, newStatus);
    setShowActions(false);
  };

  const handleRemoveUser = () => {
    if (window.confirm(`Are you sure you want to remove ${user.name}?`)) {
      removeUser(user.id);
    }
    setShowActions(false);
  };

  const getRoleColor = (role) => {
    const colors = {
      admin: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
      manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      designer: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      viewer: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    };
    return colors[role] || colors.viewer;
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
    };
    return colors[status] || colors.inactive;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
            <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <span>{user.name}</span>
              {isCurrentUser && (
                <span className="text-xs bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 px-2 py-1 rounded-full">
                  You
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        {canManageUsers && !isCurrentUser && (
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
            </button>

            {showActions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[160px] z-10"
              >
                <button
                  onClick={() => setShowRoleChange(true)}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <SafeIcon icon={FiShield} className="w-4 h-4" />
                  <span>Change Role</span>
                </button>
                <button
                  onClick={handleStatusToggle}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                  <span>{user.status === 'active' ? 'Deactivate' : 'Activate'}</span>
                </button>
                <button
                  onClick={handleRemoveUser}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                  <span>Remove User</span>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Department</span>
          <span className="font-medium text-gray-900 dark:text-white">{user.department}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Role</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Status</span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Last Active</span>
          <span className="text-gray-700 dark:text-gray-300">
            {formatDistanceToNow(user.lastActive, { addSuffix: true })}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
          <span>Joined {formatDistanceToNow(user.joinedAt, { addSuffix: true })}</span>
        </div>
      </div>

      {/* Role Change Modal */}
      {showRoleChange && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowRoleChange(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Change Role for {user.name}
            </h3>
            <div className="space-y-2">
              {Object.values(ROLES).map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleChange(role)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    user.role === role
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowRoleChange(false)}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserCard;