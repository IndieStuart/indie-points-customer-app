import React from 'react';
import { ActivityIndicator, Platform, View, StyleSheet } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { borderRadius, shadows } from '../constants/theme';

interface AppleSignInButtonProps {
  loading?: boolean;
  onPress: () => void;
}

export default function AppleSignInButton({ 
  loading = false,
  onPress,
}: AppleSignInButtonProps) {

  if (Platform.OS !== 'ios') {
    return null;
  }

  const handlePress = () => {
    if (loading) return;
    onPress();
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <AppleAuthentication.AppleAuthenticationButton
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          onPress={handlePress}
          style={styles.button}
        />
        {loading && (
          <ActivityIndicator style={styles.loader} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    width: '100%',
  },
  container: {
    borderRadius: borderRadius.md,
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  loader: {
    marginTop: -9,
    position: 'absolute',
    right: 12,
    top: '50%',
  },
  shadowContainer: {
    borderRadius: borderRadius.md,
    height: 48,
    width: '100%',
    ...shadows.lg,
  },
});
