import React, { useState } from 'react';
import { View, Text, Platform, Alert, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import * as AppleAuthentication from 'expo-apple-authentication';
import { Card, ErrorMessage, ColorBar } from '../components';
import { colors, spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';

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
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Indie Points</Text>

        {/* Three colored bars */}
        <View style={styles.barsContainer}>
          <ColorBar color="blue" />
          <ColorBar color="yellow" />
          <ColorBar color="red" />
        </View>
        <Text style={styles.subheading}>Earn points, get rewards, support local businesses</Text>
      </View>

      {/* Feature Cards */}
      <View style={styles.cardsContainer}>
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
      </View>

      {/* Error Message */}
      {error && (
        <ErrorMessage message={error} style={styles.errorMessage} />
      )}

      {/* Continue with Apple Button */}
      {Platform.OS === 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={borderRadius.lg}
          style={styles.appleButton}
          onPress={handleAppleSignIn}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm + spacing.xs,
    paddingTop: spacing.xxxxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.sm + spacing.xs,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.text.dark,
    marginBottom: spacing.sm + spacing.xs,
  },
  subheading: {
    fontSize: typography.fontSize.base,
    color: colors.text.medium,
    textAlign: 'center',
    marginBottom: spacing.sm + spacing.xs,
  },
  barsContainer: {
    flexDirection: 'row',
    gap: spacing.sm + spacing.xs,
    marginBottom: spacing.xl,
    alignSelf: 'stretch',
  },
  cardsContainer: {
    gap: spacing.sm + spacing.xs,
    marginBottom: spacing.xl,
  },
  errorMessage: {
    marginBottom: spacing.sm + spacing.xs,
  },
  appleButton: {
    height: sizes.button.height,
    ...shadows.button,
  },
});
