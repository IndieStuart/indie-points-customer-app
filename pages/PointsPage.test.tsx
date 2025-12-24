import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import PointsPage from './PointsPage';

describe('PointsPage', () => {
  it('renders points page header and QR code', () => {
    const { getByText } = renderWithProviders(<PointsPage />);
    expect(getByText('Points')).toBeTruthy();
    expect(getByText('Your loyalty card')).toBeTruthy();
    expect(getByText('Visit a participating business')).toBeTruthy();
    expect(getByText('Show your QR code')).toBeTruthy();
    expect(getByText('Earn points automatically')).toBeTruthy();
  });
});
