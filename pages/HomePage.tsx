import React from 'react';
import { PageContainer, PageHeader, PointsSummaryCard, FeedbackCard, PointsRow } from '../components';

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
        color="blue"
        spaced
      />
      <PointsRow>
        <PointsSummaryCard
          label="Total earned"
          value={1}
          color="yellow"
        />
        <PointsSummaryCard
          label="Total redeemed"
          value={0}
          color="red"
        />
      </PointsRow>
      <FeedbackCard />
    </PageContainer>
  );
}
