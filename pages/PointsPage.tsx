import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';
import { useAuth } from '../hooks';
import { PageContainer, PageHeader, InstructionList, type InstructionStep, Flex } from '../components';
import { QRCodeCard } from '../components/QRCodeCard';

export default function PointsPage() {
  const { session } = useAuth();
  const [qrKey, setQrKey] = useState(0);

  const handleRegenerate = async () => {
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
      console.debug('Haptic feedback not available:', error);
    }
    setQrKey(prev => prev + 1);
  };

  const userId = session?.user?.id || 'guest-user';

  const steps: InstructionStep[] = [
    {
      number: 1,
      title: 'Visit a participating business',
      description: 'Look for the Indie Points logo at local businesses',
      color: 'blue',
    },
    {
      number: 2,
      title: 'Show your QR code',
      description: 'Let the business scan your unique QR code before or after purchase',
      color: 'yellow',
    },
    {
      number: 3,
      title: 'Earn points automatically',
      description: 'Get 1 point for every £1 spent at participating businesses',
      color: 'red',
    },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Points"
        subtitle="Your loyalty card"
      />
      <Flex gap={16}>
        <QRCodeCard 
          key={qrKey}
          userId={userId} 
          onRegenerate={handleRegenerate} 
        />
        <InstructionList title="How to earn points" steps={steps} />
      </Flex>
    </PageContainer>
  );
}
