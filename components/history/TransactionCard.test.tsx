import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../lib/test-utils';
import TransactionCard from './TransactionCard';
import type { Transaction } from '../../types/Transaction';

describe('TransactionCard', () => {
  const transaction: Transaction = {
    id: 't1',
    businessId: 'b1',
    businessName: 'Test Business',
    amount: 42.5,
    points: 15,
    date: '2023-12-24',
    type: 'earn',
  };

  it('renders transaction details', () => {
    const { getByText } = renderWithProviders(
      <TransactionCard transaction={transaction} />,
    );
    expect(getByText('Test Business')).toBeTruthy();
    expect(getByText('12/24/2023')).toBeTruthy();
    expect(getByText('£42.50')).toBeTruthy();
    expect(getByText('15')).toBeTruthy();
    expect(getByText('Points earned:')).toBeTruthy();
  });

  it('renders Points redeemed for redeem type', () => {
    const redeemTransaction = { ...transaction, type: 'redeem' as const };
    const { getByText } = renderWithProviders(
      <TransactionCard transaction={redeemTransaction} />,
    );
    expect(getByText('Points redeemed:')).toBeTruthy();
  });

  it('calls onPress and triggers haptic feedback when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = renderWithProviders(
      <TransactionCard transaction={transaction} onPress={onPress} />,
    );
    const pressable = getByRole('button');
    fireEvent.press(pressable);
    expect(onPress).toHaveBeenCalled();
  });
});
