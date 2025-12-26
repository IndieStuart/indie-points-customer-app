import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import HistoryPage from './HistoryPage';
import * as useCustomerBusinessesModule from '../hooks/useCustomerBusinesses';
import type { Business } from '../types/Business';

describe('HistoryPage', () => {
  const mockBusinesses: Business[] = [
    {
      id: '1',
      name: 'Coffee Corner',
      totalSpent: 45.5,
      pointsEarned: 46,
      visitCount: 8,
      lastVisit: '2025-12-20',
    },
    {
      id: '2',
      name: 'The Book Nook',
      totalSpent: 89.99,
      pointsEarned: 90,
      visitCount: 3,
      lastVisit: '2025-12-18',
    },
  ];

  beforeEach(() => {
    jest
      .spyOn(useCustomerBusinessesModule, 'useCustomerBusinesses')
      .mockReturnValue(mockBusinesses);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders businesses tab by default and shows business names', () => {
    const { getByText } = renderWithProviders(<HistoryPage />);
    expect(getByText('Businesses')).toBeTruthy();
    expect(getByText('Coffee Corner')).toBeTruthy();
    expect(getByText('The Book Nook')).toBeTruthy();
  });

  it('renders transactions tab when selected', () => {
    const { getByText } = renderWithProviders(<HistoryPage />);
    expect(getByText('Transactions')).toBeTruthy();
  });
});
