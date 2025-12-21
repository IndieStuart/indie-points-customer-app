import React from 'react';
import { Linking } from 'react-native';
import { PageContainer, PageHeader, IconButton, InfoCard } from '../components';

interface LogoutPageProps {
  onSignInAgain?: () => void;
}

export default function LogoutPage({ onSignInAgain }: LogoutPageProps) {

  const handleSendFeedback = () => {
    Linking.openURL('mailto:hello@indiepoints.com?subject=Feedback for Indie Points');
  };

  const handleSignInAgain = () => {
    onSignInAgain?.();
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Goodbye"
        subtitle="Thanks for using Indie Points! We hope to see you again soon."
      />
      <InfoCard
        icon="💬"
        title="We'd love your feedback!"
        subtitle="Help us improve Indie Points"
      >
        <IconButton 
          label="Send Feedback"
          onPress={handleSendFeedback}
          variant="primary"
        />
      </InfoCard>
      <IconButton 
        label="Sign In Again"
        onPress={handleSignInAgain}
        variant="black"
      />
    </PageContainer>
  );
}
