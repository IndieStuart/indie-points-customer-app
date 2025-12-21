import React from 'react';
import { PageContainer, PageHeader, EmptyState } from '../components';

export default function PointsPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="Points"
        subtitle="Track your rewards and redemptions"
      />
      <EmptyState
        icon="gift"
        title="No rewards available yet"
        description="Check back soon for exciting rewards you can redeem with your points!"
      />
    </PageContainer>
  );
}
