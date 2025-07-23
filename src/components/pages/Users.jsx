import React from 'react';
import RoleGuard from '../auth/RoleGuard';
import UserManagement from '../users/UserManagement';
import { useAuthContext } from '../../context/AuthContext';

const Users = () => {
  const { PERMISSIONS } = useAuthContext();

  return (
    <RoleGuard permissions={[PERMISSIONS.VIEW_USERS]}>
      <UserManagement />
    </RoleGuard>
  );
};

export default Users;