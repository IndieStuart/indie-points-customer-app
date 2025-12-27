import React from 'react';
import { renderWithProviders } from '../lib/test-utils';

jest.mock('expo-apple-authentication', () => {
  const { View, Text } = require('react-native');
  return {
    AppleAuthenticationButton: ({ onPress }: any) => (
      <View accessibilityRole="button" onTouchEnd={onPress}>
        <Text>Apple Sign In</Text>
      </View>
    ),
    AppleAuthenticationButtonStyle: { BLACK: 'black' },
    AppleAuthenticationButtonType: { CONTINUE: 'continue' },
  };
});

jest.mock('@react-native-google-signin/google-signin', () => {
  const { View, Text } = require('react-native');
  const GoogleSigninButton = ({ onPress }: any) => (
    <View accessibilityRole="button" onTouchEnd={onPress}>
      <Text>Google Sign In</Text>
    </View>
  );
  GoogleSigninButton.Size = { Wide: 'wide' };
  GoogleSigninButton.Color = { Dark: 'dark', Light: 'light' };
  return {
    GoogleSignin: {
      configure: jest.fn(),
      signIn: jest.fn(),
      signOut: jest.fn(),
    },
    GoogleSigninButton,
  };
});

jest.mock('../hooks/useGoogleSignIn', () => ({
  useGoogleSignIn: () => ({
    signIn: jest.fn(),
    signOut: jest.fn(),
  }),
}));

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders all cards', () => {
    const { getByText } = renderWithProviders(<LoginPage />);
    expect(getByText('Earn points')).toBeTruthy();
    expect(getByText('Redeem rewards')).toBeTruthy();
    expect(getByText('Support local')).toBeTruthy();
  });

  it('renders sign in button based on platform', () => {
    const { queryByText } = renderWithProviders(<LoginPage />);
    const hasApple = queryByText('Apple Sign In') !== null;
    const hasGoogle = queryByText('Google Sign In') !== null;
    expect(hasApple || hasGoogle).toBe(true);
  });
});
