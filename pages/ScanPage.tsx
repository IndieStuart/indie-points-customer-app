import React from 'react';
import { PageContainer, PageHeader, EmptyState } from '../components';

export default function ScanPage() {
  return (
    <PageContainer>
      <PageHeader 
        title="Scan"
        subtitle="Scan QR codes to earn points"
      />
      <EmptyState
        icon="camera"
        title="Camera access required"
        description="To scan QR codes and earn points, please enable camera access in your device settings."
      />
    </PageContainer>
  );
}
