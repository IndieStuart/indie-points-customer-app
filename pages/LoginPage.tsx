import React, { useState } from 'react';
import { View, Text, Platform, Alert, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Indie Points</Text>

        {/* Three colored bars with enhanced styling */}
        <View style={styles.barsContainer}>
          <View style={styles.barWrapper}>
            <View style={[styles.bar, styles.blueBar]} />
          </View>
          <View style={styles.barWrapper}>
            <View style={[styles.bar, styles.yellowBar]} />
          </View>
          <View style={styles.barWrapper}>
            <View style={[styles.bar, styles.redBar]} />
          </View>
        </View>

        <Text style={styles.subheading}>Earn points, get rewards, support local businesses</Text>
      </View>

      {/* Feature Cards */}
      <View style={styles.cardsContainer}>
        {/* Earn Points Card */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <View style={[styles.iconBox, styles.blueIcon]}>
              <View style={styles.iconGlow} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Earn points</Text>
              <Text style={styles.cardDescription}>
                Get points for every purchase at participating businesses
              </Text>
            </View>
          </View>
        </View>

        {/* Redeem Rewards Card */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <View style={[styles.iconBox, styles.yellowIcon]}>
              <View style={styles.iconGlow} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Redeem rewards</Text>
              <Text style={styles.cardDescription}>
                Use your points to get discounts and free items
              </Text>
            </View>
          </View>
        </View>

        {/* Support Local Card */}
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <View style={[styles.iconBox, styles.redIcon]}>
              <View style={styles.iconGlow} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Support local</Text>
              <Text style={styles.cardDescription}>
                Help your favorite local businesses grow and thrive
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Error Message */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      )}

      {/* Continue with Apple Button */}
      {Platform.OS === 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={14}
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
    backgroundColor: '#FAFAFA',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#1A202C',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom:10
  },
  barsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  barWrapper: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
    borderRadius: 6,
  },
  bar: {
    height: 14,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  blueBar: {
    backgroundColor: '#3182CE',
  },
  yellowBar: {
    backgroundColor: '#D69E2E',
  },
  redBar: {
    backgroundColor: '#E53E3E',
  },
  cardsContainer: {
    gap: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#4A5568',
  },
  cardInner: {
    flexDirection: 'row',
    padding: 15,
  },
  iconBox: {
    width: 68,
    height: 68,
    borderRadius: 16,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
  },
  iconGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
  },
  blueIcon: {
    backgroundColor: '#3182CE',
  },
  yellowIcon: {
    backgroundColor: '#D69E2E',
  },
  redIcon: {
    backgroundColor: '#E53E3E',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A202C',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
  },
  errorContainer: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEB2B2',
    marginBottom: 10,
  },
  errorText: {
    color: '#E53E3E',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  appleButton: {
    height: 58,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
});
