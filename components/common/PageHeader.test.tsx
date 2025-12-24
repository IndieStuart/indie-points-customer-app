import React from 'react';
import { renderWithProviders, fireEvent } from '../../lib/test-utils';
import PageHeader from './PageHeader';

describe('PageHeader', () => {
  it('renders title and subtitle', () => {
    const { getByText } = renderWithProviders(
      <PageHeader title="Header Title" subtitle="Header Subtitle" />,
    );
    expect(getByText('Header Title')).toBeTruthy();
    expect(getByText('Header Subtitle')).toBeTruthy();
  });

  it('calls onBack when back button is pressed', () => {
    const onBack = jest.fn();
    const { getByTestId } = renderWithProviders(
      <PageHeader title="Header" onBack={onBack} />,
    );
    const button = getByTestId('back-button');
    fireEvent.press(button);
    expect(onBack).toHaveBeenCalled();
  });
});
