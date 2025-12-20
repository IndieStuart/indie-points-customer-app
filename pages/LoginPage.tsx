import React, { useState } from 'react';
import { View, Text, Button, Platform, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import * as AppleAuthentication from 'expo-apple-authentication';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 30 }}>Welcome</Text>
      <Text style={{ fontSize: 16, marginBottom: 30 }}>Please sign in to continue</Text>
      
      {error && (
        <Text style={{ color: 'red', marginBottom: 20, textAlign: 'center' }}>
          {error}
        </Text>
      )}
      
      {Platform.OS === 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ width: 200, height: 44, marginBottom: 20 }}
          onPress={handleAppleSignIn}
        />
      )}      
    </View>
  );
}
