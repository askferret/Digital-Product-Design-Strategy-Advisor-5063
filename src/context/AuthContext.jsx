import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// Role definitions
export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  DESIGNER: 'designer',
  VIEWER: 'viewer'
};

// Permission definitions
export const PERMISSIONS = {
  // User management
  MANAGE_USERS: 'manage_users',
  VIEW_USERS: 'view_users',
  
  // Data sources
  MANAGE_DATA_SOURCES: 'manage_data_sources',
  VIEW_DATA_SOURCES: 'view_data_sources',
  
  // Chat and insights
  USE_CHAT: 'use_chat',
  VIEW_INSIGHTS: 'view_insights',
  EXPORT_INSIGHTS: 'export_insights',
  
  // Strategic compass
  USE_COMPASS: 'use_compass',
  
  // Settings
  MANAGE_SETTINGS: 'manage_settings',
  VIEW_SETTINGS: 'view_settings'
};

// Role permissions mapping
const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.MANAGE_DATA_SOURCES,
    PERMISSIONS.VIEW_DATA_SOURCES,
    PERMISSIONS.USE_CHAT,
    PERMISSIONS.VIEW_INSIGHTS,
    PERMISSIONS.EXPORT_INSIGHTS,
    PERMISSIONS.USE_COMPASS,
    PERMISSIONS.MANAGE_SETTINGS,
    PERMISSIONS.VIEW_SETTINGS
  ],
  [ROLES.MANAGER]: [
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.MANAGE_DATA_SOURCES,
    PERMISSIONS.VIEW_DATA_SOURCES,
    PERMISSIONS.USE_CHAT,
    PERMISSIONS.VIEW_INSIGHTS,
    PERMISSIONS.EXPORT_INSIGHTS,
    PERMISSIONS.USE_COMPASS,
    PERMISSIONS.VIEW_SETTINGS
  ],
  [ROLES.DESIGNER]: [
    PERMISSIONS.VIEW_DATA_SOURCES,
    PERMISSIONS.USE_CHAT,
    PERMISSIONS.VIEW_INSIGHTS,
    PERMISSIONS.EXPORT_INSIGHTS,
    PERMISSIONS.USE_COMPASS
  ],
  [ROLES.VIEWER]: [
    PERMISSIONS.VIEW_DATA_SOURCES,
    PERMISSIONS.VIEW_INSIGHTS
  ]
};

export const AuthProvider = ({ children }) => {
  // Current user state
  const [currentUser, setCurrentUser] = useState({
    id: 'u-current-user',
    name: 'John Doe',
    email: 'john.doe@healthflow.com',
    role: ROLES.ADMIN,
    avatar: null,
    department: 'Product Design',
    joinedAt: new Date('2023-01-15'),
    lastActive: new Date(),
    status: 'active'
  });

  // All users in the organization
  const [users, setUsers] = useState([
    {
      id: 'u-current-user',
      name: 'John Doe',
      email: 'john.doe@healthflow.com',
      role: ROLES.ADMIN,
      avatar: null,
      department: 'Product Design',
      joinedAt: new Date('2023-01-15'),
      lastActive: new Date(),
      status: 'active'
    },
    {
      id: 'u-2',
      name: 'Sarah Chen',
      email: 'sarah.chen@healthflow.com',
      role: ROLES.MANAGER,
      avatar: null,
      department: 'Product Design',
      joinedAt: new Date('2023-03-20'),
      lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: 'active'
    },
    {
      id: 'u-3',
      name: 'Mike Rodriguez',
      email: 'mike.rodriguez@healthflow.com',
      role: ROLES.DESIGNER,
      avatar: null,
      department: 'UX Design',
      joinedAt: new Date('2023-06-10'),
      lastActive: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      status: 'active'
    },
    {
      id: 'u-4',
      name: 'Emily Watson',
      email: 'emily.watson@healthflow.com',
      role: ROLES.DESIGNER,
      avatar: null,
      department: 'Product Design',
      joinedAt: new Date('2023-08-05'),
      lastActive: new Date(Date.now() - 3 * 60 * 60 * 1000),
      status: 'active'
    },
    {
      id: 'u-5',
      name: 'David Kim',
      email: 'david.kim@healthflow.com',
      role: ROLES.VIEWER,
      avatar: null,
      department: 'Product Management',
      joinedAt: new Date('2023-09-12'),
      lastActive: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      status: 'inactive'
    }
  ]);

  // Check if user has specific permission
  const hasPermission = (permission) => {
    if (!currentUser || !currentUser.role) return false;
    const rolePermissions = ROLE_PERMISSIONS[currentUser.role] || [];
    return rolePermissions.includes(permission);
  };

  // Check if user has any of the provided permissions
  const hasAnyPermission = (permissions) => {
    return permissions.some(permission => hasPermission(permission));
  };

  // Check if user has all of the provided permissions
  const hasAllPermissions = (permissions) => {
    return permissions.every(permission => hasPermission(permission));
  };

  // Get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  // Update user role
  const updateUserRole = (userId, newRole) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
    
    // Update current user if it's them
    if (userId === currentUser.id) {
      setCurrentUser(prev => ({ ...prev, role: newRole }));
    }
  };

  // Update user status
  const updateUserStatus = (userId, status) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, status } : user
      )
    );
  };

  // Add new user (invite)
  const inviteUser = (userData) => {
    const newUser = {
      id: `u-${Date.now()}`,
      ...userData,
      joinedAt: new Date(),
      lastActive: new Date(),
      status: 'pending'
    };
    
    setUsers(prevUsers => [...prevUsers, newUser]);
    return newUser;
  };

  // Remove user
  const removeUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };

  const value = {
    currentUser,
    users,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    getUserById,
    updateUserRole,
    updateUserStatus,
    inviteUser,
    removeUser,
    ROLES,
    PERMISSIONS
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};