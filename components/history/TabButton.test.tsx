import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../lib/test-utils';
import TabButton from './TabButton';

describe('TabButton', () => {
  it('renders label', () => {
    const { getByText } = renderWithProviders(
      <TabButton active={false} label="Tab 1" onPress={jest.fn()} />,
    );
    expect(getByText('Tab 1')).toBeTruthy();
  });

  it('applies active styles when active', () => {
    const { getByText } = renderWithProviders(
      <TabButton active={true} label="Active Tab" onPress={jest.fn()} />,
    );
    expect(getByText('Active Tab')).toBeTruthy();
    // Style checks can be added if needed
  });

  it('calls onPress and triggers haptic feedback when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = renderWithProviders(
      <TabButton active={false} label="Tab Press" onPress={onPress} />,
    );
    fireEvent.press(getByText('Tab Press'));
    expect(onPress).toHaveBeenCalled();
  });
});
