import { useAuth } from './AuthProvider';
import { Redirect } from 'expo-router';
import React from 'react';

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { signedIn } = useAuth();

  if (!signedIn) {
    return <Redirect href="/login" />;
  }

  return <>{children}</>;
};

export default RequireAuth; 