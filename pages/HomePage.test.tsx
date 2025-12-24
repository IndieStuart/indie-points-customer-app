import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders points summary cards', () => {
    const { getByText } = renderWithProviders(<HomePage />);
    expect(getByText('Active points')).toBeTruthy();
    expect(getByText('Total earned')).toBeTruthy();
    expect(getByText('Total redeemed')).toBeTruthy();
  });

  it('renders feedback card', () => {
    const { getByText } = renderWithProviders(<HomePage />);
    expect(getByText("We'd love your feedback!")).toBeTruthy();
    expect(getByText('Help us improve Indie Points')).toBeTruthy();
    expect(getByText('Send Feedback')).toBeTruthy();
  });
});
