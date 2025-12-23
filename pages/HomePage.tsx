import React from 'react';
import { PageContainer, PageHeader, PointsSummaryCard, FeedbackCard, Flex } from '../components';

export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader 
        title="Indie Points"
        subtitle="Welcome to Indie Points! Here is your points summary."
      />
      <PointsSummaryCard
        label="Active points"
        value={1}
        variant="primary"
      />
      <Flex direction="row">
        <PointsSummaryCard
          label="Total earned"
          value={1}
          variant="secondary"
        />
        <PointsSummaryCard
          label="Total redeemed"
          value={0}
          variant="tertiary"
        />
      </Flex>
      <FeedbackCard variant="primary" />
    </PageContainer>
  );
}
