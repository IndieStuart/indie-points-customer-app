import React from 'react';
import { useAuth } from '../hooks';
import {
  PageContainer,
  PageHeader,
  InstructionList,
  type InstructionStep,
  Flex,
} from '../components';
import { QRCodeCard } from '../components/QRCodeCard';

export default function PointsPage() {
  const { session } = useAuth();

  const userId = session?.user?.id || 'guest-user';

  const steps: InstructionStep[] = [
    {
      number: 1,
      title: 'Visit a participating business',
      description: 'Look for the Indie Points logo at local businesses',
      variant: 'primary',
    },
    {
      number: 2,
      title: 'Show your QR code',
      description:
        'Let the business scan your unique QR code before or after purchase',
      variant: 'secondary',
    },
    {
      number: 3,
      title: 'Earn points automatically',
      description: 'Get 1 point for every £1 spent at participating businesses',
      variant: 'tertiary',
    },
  ];

  return (
    <PageContainer>
      <PageHeader title="Points" subtitle="Your loyalty card" />
      <QRCodeCard userId={userId} />
      <InstructionList steps={steps} title="How to earn points" />
    </PageContainer>
  );
}
