import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';

interface AppleSignInButtonProps {
  onPress: () => void;
}

export default function AppleSignInButton({ 
  onPress
}: AppleSignInButtonProps) {

  if (Platform.OS !== 'ios') {
    return null;
  }

  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
      cornerRadius={12}
      onPress={onPress}
      style={styles.appleButton}
    />
  );
}

const styles = StyleSheet.create({
  appleButton: {
    height: 48,
    marginVertical: 16,
    width: '100%',
  },
});
