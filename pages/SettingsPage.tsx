import React from 'react';
import { PageContainer, PageHeader, Button } from '../components';
import { useAuth } from '../hooks';

export default function SettingsPage() {
  const { signOut } = useAuth();

  return (
    <PageContainer>
      <PageHeader 
        title="Settings"
        subtitle="Manage your account"
      />
      <Button 
        label="Sign Out"
        onPress={signOut}
        variant="tertiary"
      />
    </PageContainer>
  );
}
