import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { borderRadius, shadows, sizes } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';

interface AppleSignInButtonProps {
  onPress: () => void;
}

/**
 * Styled Apple Sign In button with consistent sizing and shadows
 */
export default function AppleSignInButton({ 
  onPress
}: AppleSignInButtonProps) {
  const { isDark } = useTheme();

  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
      buttonStyle={isDark 
        ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
        : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
      }
      cornerRadius={borderRadius.md}
      style={styles.button}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: sizes.button.height,
    ...shadows.md,
  },
});
