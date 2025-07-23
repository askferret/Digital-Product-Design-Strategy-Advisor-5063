import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

const UserFilters = ({ selectedRole, selectedStatus, onRoleChange, onStatusChange }) => {
  const { ROLES } = useAuthContext();

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ];

  const roleOptions = [
    { value: 'all', label: 'All Roles' },
    ...Object.values(ROLES).map(role => ({
      value: role,
      label: role.charAt(0).toUpperCase() + role.slice(1)
    }))
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
      >
        {roleOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
      >
        {statusOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserFilters;