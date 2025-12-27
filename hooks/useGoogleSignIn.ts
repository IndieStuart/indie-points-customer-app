import { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import { supabase } from '../lib/supabase';

let GoogleSignin: any = null;

if (Platform.OS === 'android') {
  GoogleSignin =
    require('@react-native-google-signin/google-signin').GoogleSignin;
}

export function useGoogleSignIn() {
  useEffect(() => {
    if (!GoogleSignin) return;

    GoogleSignin.configure({
      offlineAccess: true,
      scopes: ['profile', 'email'],
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    });
  }, []);

  const signIn = useCallback(async () => {
    if (!GoogleSignin) {
      throw new Error('Google Sign-In is not available on this platform');
    }

    try {
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data?.idToken;

      if (!idToken) {
        throw new Error('No ID token received from Google Sign-In');
      }

      const { error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: idToken,
      });

      if (error) {
        throw error;
      }

      return userInfo;
    } catch (error: any) {
      if (error.code !== 'CANCELED') {
        console.error('Google Sign-In error:', error);
        throw error;
      }
      return null;
    }
  }, []);

  const signOut = useCallback(async () => {
    if (!GoogleSignin) {
      return;
    }

    try {
      await GoogleSignin.signOut();
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Google Sign-Out error:', error);
      throw error;
    }
  }, []);

  return { signIn, signOut };
}
