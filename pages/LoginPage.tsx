import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { Card, ErrorMessage, PageContainer, PageHeader, CardList, AppleSignInButton } from '../components';

export default function LoginPage() {
  const { signInWithApple } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleAppleSignIn = async () => {
    try {
      setError(null);
      await signInWithApple();
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to sign in';
      setError(errorMessage);
      Alert.alert('Sign In Error', errorMessage);
    }
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Indie Points"
        subtitle="Earn points, redeem rewards, support local businesses"
      />
      <CardList>
        <Card 
          title="Earn points" 
          description="Get points for every purchase at participating businesses"
          iconColor="blue"
        />
        <Card 
          title="Redeem rewards" 
          description="Use your points to get discounts and free items"
          iconColor="yellow"
        />
        <Card 
          title="Support local" 
          description="Help your favorite local businesses grow and thrive"
          iconColor="red"
        />
      </CardList>
      {error && <ErrorMessage message={error} />}
      <AppleSignInButton onPress={handleAppleSignIn} />
    </PageContainer>
  );
}
