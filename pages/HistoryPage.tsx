import React from 'react';
import { PageContainer, PageHeader, EmptyState } from '../components';

export default function HistoryPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="History"
        subtitle="View your transaction history"
      />
      <EmptyState
        icon="file-text-o"
        title="No transaction history"
        description="Your points and redemption history will appear here once you start earning and using points."
      />
    </PageContainer>
  );
}
