import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import ScanPage from './ScanPage';

describe('ScanPage', () => {
  it('renders scan page header and instructions', () => {
    const { getByText } = renderWithProviders(<ScanPage />);
    expect(getByText('Scan')).toBeTruthy();
    expect(getByText('Scan a business QR code')).toBeTruthy();
    expect(getByText('Visit a participating business')).toBeTruthy();
    expect(getByText('Open the scan tab')).toBeTruthy();
    expect(getByText('Claim your bonus point')).toBeTruthy();
  });
});
