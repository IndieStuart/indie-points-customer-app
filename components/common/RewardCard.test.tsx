import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import RewardCard from './RewardCard';

describe('RewardCard', () => {
  const rewardAvailable = {
    id: '1',
    name: 'Free Coffee',
    description: 'Get a free coffee',
    pointsRequired: 100,
    available: true,
  };
  const rewardUnavailable = {
    id: '2',
    name: 'Discount',
    description: '10% off',
    pointsRequired: 200,
    available: false,
  };

  it('renders reward name, description, and points', () => {
    const { getByText } = renderWithProviders(
      <RewardCard reward={rewardAvailable} />,
    );
    expect(getByText('Free Coffee')).toBeTruthy();
    expect(getByText('Get a free coffee')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
  });

  it('shows available status', () => {
    const { getByText } = renderWithProviders(
      <RewardCard reward={rewardAvailable} />,
    );
    expect(getByText('Available')).toBeTruthy();
  });

  it('shows not enough points status', () => {
    const { getByText } = renderWithProviders(
      <RewardCard reward={rewardUnavailable} />,
    );
    expect(getByText('Not enough points')).toBeTruthy();
  });
});
