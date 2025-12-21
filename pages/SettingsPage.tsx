import React from 'react';
import { PageContainer, PageHeader, IconButton } from '../components';
import { useAuth } from '../contexts/AuthContext';

export default function SettingsPage() {
  const { signOut } = useAuth();

  return (
    <PageContainer>
      <PageHeader 
        title="Settings"
        subtitle=""
      />
      
      <IconButton 
        label="Sign Out"
        onPress={signOut}
        variant="black"
      />
    </PageContainer>
  );
}
