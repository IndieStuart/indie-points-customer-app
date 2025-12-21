import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { borderRadius, shadows, sizes } from '../constants/theme';
import { useTheme } from '../contexts/ThemeContext';

interface AppleSignInButtonProps {
  onPress: () => void;
  buttonType?: AppleAuthentication.AppleAuthenticationButtonType;
}

/**
 * Styled Apple Sign In button with consistent sizing and shadows
 */
export default function AppleSignInButton({ 
  onPress, 
  buttonType = AppleAuthentication.AppleAuthenticationButtonType.CONTINUE 
}: AppleSignInButtonProps) {
  const { isDark } = useTheme();

  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={buttonType}
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
