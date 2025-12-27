import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../lib/test-utils';
import BusinessDetailView from './BusinessDetailView';
import type { Transaction } from '../../types/Transaction';
import type { Reward } from '../../types/Reward';

describe('BusinessDetailView', () => {
  const transactions: Transaction[] = [
    {
      id: 't1',
      businessId: 'b1',
      businessName: 'Test Business',
      amountSpent: 50,
      pointsAwarded: 10,
      date: '2023-12-24',
      type: 'earn',
    },
  ];
  const rewards: Reward[] = [
    {
      id: 'r1',
      name: 'Free Coffee',
      description: 'Get a free coffee',
      pointsRequired: 100,
      available: true,
    },
  ];

  it('renders transactions tab and shows transactions', () => {
    const { getByText } = renderWithProviders(
      <BusinessDetailView
        businessId="b1"
        transactions={transactions}
        rewards={rewards}
        onBack={jest.fn()}
      />,
    );
    expect(getByText('Transactions')).toBeTruthy();
    expect(getByText('Test Business')).toBeTruthy();
    expect(getByText('10')).toBeTruthy(); // points
  });

  it('switches to rewards tab and shows rewards', () => {
    const { getByText } = renderWithProviders(
      <BusinessDetailView
        businessId="b1"
        transactions={transactions}
        rewards={rewards}
        onBack={jest.fn()}
      />,
    );
    const rewardsTab = getByText('Rewards');
    fireEvent.press(rewardsTab);
    expect(getByText('Free Coffee')).toBeTruthy();
    expect(getByText('Get a free coffee')).toBeTruthy();
  });

  it('shows empty state for no transactions', () => {
    const { getByText } = renderWithProviders(
      <BusinessDetailView
        businessId="b1"
        transactions={[]}
        rewards={rewards}
        onBack={jest.fn()}
      />,
    );
    expect(getByText('No transactions found')).toBeTruthy();
  });

  it('shows empty state for no rewards', () => {
    const { getByText } = renderWithProviders(
      <BusinessDetailView
        businessId="b1"
        transactions={transactions}
        rewards={[]}
        onBack={jest.fn()}
      />,
    );
    const rewardsTab = getByText('Rewards');
    fireEvent.press(rewardsTab);
    expect(getByText('No rewards available')).toBeTruthy();
  });
});
