import React from 'react';
import { useCameraPermissions } from 'expo-camera';
import {
  PageContainer,
  PageHeader,
  InstructionList,
  CameraScanner,
  CameraPermissionRequest,
  type InstructionStep,
} from '../components';

const instructions: InstructionStep[] = [
  {
    number: 1,
    title: 'Visit a participating business',
    description: 'Look for the Indie Points logo at local businesses',
    variant: 'primary',
  },
  {
    number: 2,
    title: 'Open the scan tab',
    description: 'Use your phone to scan the QR code of the business',
    variant: 'secondary',
  },
  {
    number: 3,
    title: 'Claim your bonus point',
    description: 'After scanning you will receive a bonus point for visiting',
    variant: 'tertiary',
  },
];

export default function ScanPage() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission?.granted) {
    return (
      <PageContainer>
        <PageHeader title="Scan" subtitle="Scan a business QR code" />
        {permission && (
          <CameraPermissionRequest onRequestPermission={requestPermission} />
        )}
        <InstructionList
          steps={instructions}
          title="How to claim a bonus point:"
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader title="Scan" subtitle="Scan a business QR code" />
      <CameraScanner />
      <InstructionList
        steps={instructions}
        title="How to claim a bonus point:"
      />
    </PageContainer>
  );
}
