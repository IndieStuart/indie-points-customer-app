import React from 'react';
import { useCameraPermissions } from 'expo-camera';
import { PageContainer, PageHeader, InstructionList, CameraScanner, CameraPermissionRequest } from '../components';
import type { InstructionStep } from '../components/InstructionList';

const instructions: InstructionStep[] = [
  {
    number: 1,
    title: 'Visit a participating business',
    description: 'Look for the Indie Points logo at local businesses',
    color: 'blue',
  },
  {
    number: 2,
    title: 'Open the scan tab',
    description: 'Use your phone to scan the QR code of the business',
    color: 'yellow',
  },
  {
    number: 3,
    title: 'Claim your bonus point',
    description: 'After scanning you will receive a bonus point for visiting',
    color: 'red',
  },
];

export default function ScanPage() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission?.granted) {
    return (
      <PageContainer>
        <PageHeader 
          title="Scan"
          subtitle="Scan a business QR code"
        />
        {permission && <CameraPermissionRequest onRequestPermission={requestPermission} />}
        <InstructionList title="How to claim a bonus point:" steps={instructions} />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader 
        title="Scan"
        subtitle="Scan a business QR code"
      />
      <CameraScanner />
      <InstructionList title="How to claim a bonus point:" steps={instructions} />
    </PageContainer>
  );
}
