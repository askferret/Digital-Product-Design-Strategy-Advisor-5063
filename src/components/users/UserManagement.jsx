import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuthContext } from '../../context/AuthContext';
import UserCard from './UserCard';
import InviteUserModal from './InviteUserModal';
import UserFilters from './UserFilters';

const { FiUsers, FiPlus, FiSearch } = FiIcons;

const UserManagement = () => {
  const { users, currentUser } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showInviteModal, setShowInviteModal] = useState(false);

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleInviteUser = (userData) => {
    // This would typically send an invitation email
    console.log('Inviting user:', userData);
    setShowInviteModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage team members and their access permissions
          </p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors w-full sm:w-auto"
        >
          <SafeIcon icon={FiPlus} className="w-4 h-4" />
          <span>Invite User</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <SafeIcon 
                icon={FiSearch} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
              />
              <input
                type="text"
                placeholder="Search users by name, email, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Filters */}
          <UserFilters
            selectedRole={selectedRole}
            selectedStatus={selectedStatus}
            onRoleChange={setSelectedRole}
            onStatusChange={setSelectedStatus}
          />
        </div>
      </div>

      {/* Users Grid */}
      {filteredUsers.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiUsers} className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Users Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto px-4">
            {searchQuery || selectedRole !== 'all' || selectedStatus !== 'all'
              ? 'Try adjusting your search criteria or filters.'
              : 'No users have been added to your organization yet.'}
          </p>
          {(!searchQuery && selectedRole === 'all' && selectedStatus === 'all') && (
            <button
              onClick={() => setShowInviteModal(true)}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Invite Your First User
            </button>
          )}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredUsers.map((user, index) => (
            <UserCard
              key={user.id}
              user={user}
              index={index}
              isCurrentUser={user.id === currentUser.id}
            />
          ))}
        </div>
      )}

      {/* Invite User Modal */}
      <InviteUserModal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onInvite={handleInviteUser}
      />
    </div>
  );
};

export default UserManagement;