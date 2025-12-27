import React from 'react';
import { renderWithProviders, fireEvent } from '../../lib/test-utils';
import AppleSignInButton from './AppleSignInButton';

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

describe('AppleSignInButton', () => {
  it('renders Apple button', () => {
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={jest.fn()} />,
    );
    expect(getByText('Apple Sign In')).toBeTruthy();
  });

  it('calls onPress when pressed and not loading', () => {
    const onPress = jest.fn();
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={onPress} />,
    );
    fireEvent.press(getByText('Apple Sign In'));
    expect(onPress).toHaveBeenCalled();
  });

  it('does not call onPress when loading', () => {
    const onPress = jest.fn();
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={onPress} loading />,
    );
    fireEvent.press(getByText('Apple Sign In'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
