import React from 'react';
import { Platform } from 'react-native';
import {
  Card,
  ErrorMessage,
  PageContainer,
  PageHeader,
  Flex,
} from '../components';
import { useAuth, useAuthError } from '../hooks';

let AppleSignInButton: any = null;
if (Platform.OS === 'ios') {
  AppleSignInButton = require('../components/login/AppleSignInButton').default;
}

let GoogleSignInButton: any = null;
if (Platform.OS === 'android') {
  GoogleSignInButton =
    require('../components/login/GoogleSignInButton').default;
}

export default function LoginPage() {
  const { signInWithApple } = useAuth();
  const { error, isLoading, withLoading, handleAuthError } = useAuthError();

  const handleAppleSignIn = async () => {
    await withLoading(() => signInWithApple());
  };

  const handleGoogleError = (errorMessage: string) => {
    handleAuthError(errorMessage);
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

      {AppleSignInButton && (
        <AppleSignInButton onPress={handleAppleSignIn} loading={isLoading} />
      )}

      {GoogleSignInButton && <GoogleSignInButton onError={handleGoogleError} />}
    </PageContainer>
  );
}
