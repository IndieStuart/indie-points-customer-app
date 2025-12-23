import React from 'react';
import { Card, ErrorMessage, PageContainer, PageHeader, Flex, AppleSignInButton } from '../components';
import { useAuth, useAuthError } from '../hooks';

export default function LoginPage() {
  const { signInWithApple } = useAuth();
  const { error, isLoading, withLoading } = useAuthError();

  const handleAppleSignIn = async () => {
    await withLoading(() => signInWithApple());
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Indie Points"
        subtitle="Earn points, redeem rewards, support local businesses"
      />
      <Flex>
        <Card
          title="Earn points"
          description="Get points for every purchase at participating businesses"
          variant="primary"
        />
        <Card
          title="Redeem rewards"
          description="Use your points to get discounts and free items"
          variant="secondary"
        />
        <Card
          title="Support local"
          description="Help your favorite local businesses grow and thrive"
          variant="tertiary"
        />
      </Flex>
      {error && <ErrorMessage message={error} />}
      <AppleSignInButton onPress={handleAppleSignIn} loading={isLoading} />
    </PageContainer>
  );
}
