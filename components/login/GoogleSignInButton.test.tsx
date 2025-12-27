import React from 'react';
import { renderWithProviders, fireEvent, waitFor } from '../../lib/test-utils';
import GoogleSignInButton from './GoogleSignInButton';

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
      signIn: jest.fn().mockResolvedValue({ data: { idToken: 'mock-token' } }),
      signOut: jest.fn(),
    },
    GoogleSigninButton,
  };
});

jest.mock('../../hooks/useGoogleSignIn', () => ({
  useGoogleSignIn: () => ({
    signIn: jest.fn().mockResolvedValue(null),
    signOut: jest.fn(),
  }),
}));

describe('GoogleSignInButton', () => {
  it('renders Google button', () => {
    const { getByText } = renderWithProviders(<GoogleSignInButton />);
    expect(getByText('Google Sign In')).toBeTruthy();
  });

  it('calls onError when sign in fails', async () => {
    const mockError = new Error('Sign in failed');
    jest
      .spyOn(require('../../hooks/useGoogleSignIn'), 'useGoogleSignIn')
      .mockReturnValue({
        signIn: jest.fn().mockRejectedValue(mockError),
        signOut: jest.fn(),
      });

    const onError = jest.fn();
    const { getByText } = renderWithProviders(
      <GoogleSignInButton onError={onError} />,
    );

    fireEvent.press(getByText('Google Sign In'));

    await waitFor(() => {
      expect(onError).toHaveBeenCalledWith('Sign in failed');
    });
  });

  it('does not call onError when sign in succeeds', async () => {
    const onError = jest.fn();
    const { getByText } = renderWithProviders(
      <GoogleSignInButton onError={onError} />,
    );

    fireEvent.press(getByText('Google Sign In'));

    await waitFor(() => {
      expect(onError).not.toHaveBeenCalled();
    });
  });
});
