import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import HistoryPage from './HistoryPage';
import * as useCustomerBusinessesModule from '../hooks/useCustomerBusinesses';
import * as useCustomerTransactionsModule from '../hooks/useCustomerTransactions';
import { fireEvent } from '@testing-library/react-native';

const mockBusinesses = [
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

const mockTransactions = [
  {
    id: 't1',
    businessId: '1',
    businessName: 'Coffee Corner',
    amountSpent: 4.5,
    pointsAwarded: 5,
    date: '2025-12-20',
    type: 'earn' as 'earn',
  },
  {
    id: 't2',
    businessId: '2',
    businessName: 'The Book Nook',
    amountSpent: 10,
    pointsAwarded: 10,
    date: '2025-12-18',
    type: 'redeem' as 'redeem',
  },
];

describe('HistoryPage', () => {
  beforeEach(() => {
    jest
      .spyOn(useCustomerBusinessesModule, 'useCustomerBusinesses')
      .mockReturnValue(mockBusinesses);
    jest
      .spyOn(useCustomerTransactionsModule, 'useCustomerTransactions')
      .mockReturnValue(mockTransactions);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('shows the Businesses tab by default and lists businesses', () => {
    const { getByText } = renderWithProviders(<HistoryPage />);

    expect(getByText('Businesses')).toBeTruthy();
    expect(getByText('Coffee Corner')).toBeTruthy();
    expect(getByText('The Book Nook')).toBeTruthy();
  });

  it('switches to Transactions tab and lists transactions', () => {
    const { getByText, queryByText } = renderWithProviders(<HistoryPage />);

    const transactionsTab = getByText('Transactions');
    fireEvent.press(transactionsTab);

    expect(getByText('Coffee Corner')).toBeTruthy();
    expect(getByText('The Book Nook')).toBeTruthy();
    expect(getByText('£4.50')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
    expect(queryByText('visitCount')).toBeNull();
  });

  it('navigates to BusinessDetailView when a business is pressed', () => {
    const { getByText, getAllByText } = renderWithProviders(<HistoryPage />);

    const businessCard = getByText('Coffee Corner');
    fireEvent.press(businessCard);

    expect(getByText('Transaction history and rewards')).toBeTruthy();
    expect(getAllByText('Coffee Corner').length).toBeGreaterThan(0);
  });

  it('shows empty state if no businesses', () => {
    jest
      .spyOn(useCustomerBusinessesModule, 'useCustomerBusinesses')
      .mockReturnValue([]);

    const { getByText } = renderWithProviders(<HistoryPage />);

    expect(getByText(/no businesses/i)).toBeTruthy();
  });

  it('shows empty state if no transactions', () => {
    jest
      .spyOn(useCustomerTransactionsModule, 'useCustomerTransactions')
      .mockReturnValue([]);

    const { getByText } = renderWithProviders(<HistoryPage />);
    fireEvent.press(getByText('Transactions'));

    expect(getByText(/no transactions/i)).toBeTruthy();
  });

  it('shows error message if businesses hook throws', () => {
    jest
      .spyOn(useCustomerBusinessesModule, 'useCustomerBusinesses')
      .mockImplementation(() => {
        throw new Error('Failed to load');
      });

    const { getByText } = renderWithProviders(<HistoryPage />);

    expect(getByText(/failed to load/i)).toBeTruthy();
  });

  it('shows error message if transactions hook throws', () => {
    jest
      .spyOn(useCustomerTransactionsModule, 'useCustomerTransactions')
      .mockImplementation(() => {
        throw new Error('Failed to load');
      });

    const { getByText } = renderWithProviders(<HistoryPage />);
    fireEvent.press(getByText('Transactions'));

    expect(getByText(/failed to load/i)).toBeTruthy();
  });
});
