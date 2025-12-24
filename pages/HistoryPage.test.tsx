import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import HistoryPage from './HistoryPage';

describe('HistoryPage', () => {
  it('renders businesses tab by default', () => {
    const { getByText } = renderWithProviders(<HistoryPage />);
    expect(getByText('Businesses')).toBeTruthy();
  });

  it('renders transactions tab when selected', () => {
    const { getByText } = renderWithProviders(<HistoryPage />);
    expect(getByText('Transactions')).toBeTruthy();
  });
});
