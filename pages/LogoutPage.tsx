import React from 'react';
import { PageContainer, PageHeader, Button, FeedbackCard } from '../components';

interface LogoutPageProps {
  onSignInAgain?: () => void;
}

export default function LogoutPage({ onSignInAgain }: LogoutPageProps) {
  const handleSignInAgain = () => {
    onSignInAgain?.();
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Goodbye"
        subtitle="Thanks for using Indie Points! We hope to see you again soon."
      />
      <FeedbackCard variant="primary" />
      <Button 
        label="Sign In Again"
        onPress={handleSignInAgain}
        variant="primary"
      />
    </PageContainer>
  );
}
