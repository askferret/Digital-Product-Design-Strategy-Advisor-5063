import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock } = FiIcons;

const RoleGuard = ({ 
  children, 
  permissions = [], 
  requireAll = false, 
  fallback = null 
}) => {
  const { hasPermission, hasAnyPermission, hasAllPermissions } = useAuthContext();

  if (!permissions.length) {
    return children;
  }

  const hasAccess = requireAll 
    ? hasAllPermissions(permissions)
    : hasAnyPermission(permissions);

  if (!hasAccess) {
    if (fallback) {
      return fallback;
    }

    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
          <SafeIcon icon={FiLock} className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Access Restricted
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          You don't have permission to access this feature. Contact your administrator if you need access.
        </p>
      </div>
    );
  }

  return children;
};

export default RoleGuard;