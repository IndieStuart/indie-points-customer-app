import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { BORDER_RADIUS, SPACING, COLORS } from '../constants/theme';

interface AppleSignInButtonProps {
  onPress: () => void;
  loading?: boolean;
}

export default function AppleSignInButton({ 
  onPress,
  loading = false,
}: AppleSignInButtonProps) {

  if (Platform.OS !== 'ios') {
    return null;
  }

  const handlePress = () => {
    if (loading) return;
    onPress();
  };

  return (
    <View style={styles.wrapper}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
        cornerRadius={BORDER_RADIUS.lg}
        onPress={handlePress}
        style={[styles.appleButton, loading && styles.appleButtonDisabled]}
      />
      {loading && (
        <ActivityIndicator
          color={COLORS.white}
          style={styles.spinner}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: SPACING.lg,
    width: '100%',
  },
  appleButton: {
    height: 48,
    width: '100%',
  },
  appleButtonDisabled: {
    opacity: 0.7,
  },
  spinner: {
    marginTop: SPACING.md,
  },
});
