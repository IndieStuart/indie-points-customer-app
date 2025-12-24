import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import LoginPage from './LoginPage';

jest.mock('expo-apple-authentication', () => ({
  AppleAuthenticationButton: () => null,
  AppleAuthenticationButtonStyle: { BLACK: 'BLACK' },
  AppleAuthenticationButtonType: { CONTINUE: 'CONTINUE' },
}));

describe('LoginPage', () => {
  it('renders all cards', () => {
    const { getByText } = renderWithProviders(<LoginPage />);
    expect(getByText('Earn points')).toBeTruthy();
    expect(getByText('Redeem rewards')).toBeTruthy();
    expect(getByText('Support local')).toBeTruthy();
  });
});
