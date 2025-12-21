import React from 'react';
import { PageContainer, PageHeader, Button, InfoCard } from '../components';
import { useFeedback } from '../hooks';

interface LogoutPageProps {
  onSignInAgain?: () => void;
}

export default function LogoutPage({ onSignInAgain }: LogoutPageProps) {
  const { sendFeedback } = useFeedback();

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
        icon="comment"
        title="We'd love your feedback!"
        subtitle="Help us improve Indie Points"
      >
        <Button 
          label="Send Feedback"
          onPress={sendFeedback}
          variant="primary"
          accessibilityLabel="Send feedback to Indie Points"
        />
      </InfoCard>
      <Button 
        label="Sign In Again"
        onPress={handleSignInAgain}
        variant="black"
        accessibilityLabel="Sign in again to your account"
      />
    </PageContainer>
  );
}
