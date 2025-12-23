import React from 'react';
import { PageContainer, PageHeader, UserCard, TakeTourCard, CloseAccountCard } from '../components';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="Settings"
        subtitle="Manage your account"
      />
      <UserCard />
      <TakeTourCard />
      <CloseAccountCard />
    </PageContainer>
  );
}
