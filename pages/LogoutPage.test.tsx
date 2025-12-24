import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import LogoutPage from './LogoutPage';

describe('LogoutPage', () => {
  it('renders goodbye message and sign in again button', () => {
    const { getByText } = renderWithProviders(<LogoutPage />);
    expect(getByText('Goodbye')).toBeTruthy();
    expect(getByText('Sign In Again')).toBeTruthy();
  });
});
