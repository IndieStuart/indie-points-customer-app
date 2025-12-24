import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import BottomTabNavigator from './BottomTabNavigator';

describe('BottomTabNavigator', () => {
  it('renders without crashing', () => {
    const { toJSON } = renderWithProviders(<BottomTabNavigator />);
    expect(toJSON()).toBeTruthy();
  });
});
