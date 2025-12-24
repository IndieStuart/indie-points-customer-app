import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../lib/test-utils';
import BusinessCard from './BusinessCard';
import type { Business } from '../../types/Business';

describe('BusinessCard', () => {
  const business: Business = {
    id: '1',
    name: 'Test Business',
    totalSpent: 123.45,
    pointsEarned: 200,
    visitCount: 5,
    lastVisit: new Date('2023-12-24').toISOString(),
  };

  it('renders business name, last visit, amount, and points', () => {
    const { getByText } = renderWithProviders(
      <BusinessCard business={business} onPress={jest.fn()} />,
    );
    expect(getByText('Test Business')).toBeTruthy();
    expect(getByText('Last visit: 12/24/2023')).toBeTruthy();
    expect(getByText('£123.45')).toBeTruthy();
    expect(getByText('200')).toBeTruthy();
  });

  it('calls onPress and triggers haptic feedback when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = renderWithProviders(
      <BusinessCard business={business} onPress={onPress} />,
    );
    const pressable = getByRole('button');
    fireEvent.press(pressable);
    expect(onPress).toHaveBeenCalled();
  });
});
