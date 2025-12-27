import React, { useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn';
import { borderRadius, shadows } from '../../constants/theme';

interface GoogleSignInButtonProps {
  onError?: (error: string) => void;
}

export default function GoogleSignInButtonComponent({
  onError,
}: GoogleSignInButtonProps) {
  const [loading, setLoading] = useState(false);
  const { signIn } = useGoogleSignIn();

  const handlePress = async () => {
    if (loading) return;

    setLoading(true);
    try {
      await signIn();
    } catch (error: any) {
      if (onError) {
        onError(error.message || 'Failed to sign in with Google');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handlePress}
          disabled={loading}
          style={styles.button}
        />
        {loading && <ActivityIndicator style={styles.loader} />}
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
    ...shadows.sm,
  },
});
