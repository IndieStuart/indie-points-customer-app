import React from 'react';
import { renderWithProviders, fireEvent } from '../../lib/test-utils';
import AppleSignInButton from './AppleSignInButton';
import { Platform } from 'react-native';

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
  const originalPlatform = Platform.OS;

  afterEach(() => {
    Object.defineProperty(Platform, 'OS', { value: originalPlatform });
  });

  it('renders nothing on non-iOS platforms', () => {
    Object.defineProperty(Platform, 'OS', { value: 'android' });
    const { toJSON } = renderWithProviders(
      <AppleSignInButton onPress={jest.fn()} />,
    );
    expect(toJSON()).toBeNull();
  });

  it('renders Apple button on iOS', () => {
    Object.defineProperty(Platform, 'OS', { value: 'ios' });
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={jest.fn()} />,
    );
    expect(getByText('Apple Sign In')).toBeTruthy();
  });

  it('calls onPress when pressed and not loading', () => {
    Object.defineProperty(Platform, 'OS', { value: 'ios' });
    const onPress = jest.fn();
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={onPress} />,
    );
    fireEvent.press(getByText('Apple Sign In'));
    expect(onPress).toHaveBeenCalled();
  });

  it('does not call onPress when loading', () => {
    Object.defineProperty(Platform, 'OS', { value: 'ios' });
    const onPress = jest.fn();
    const { getByText } = renderWithProviders(
      <AppleSignInButton onPress={onPress} loading />,
    );
    fireEvent.press(getByText('Apple Sign In'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
