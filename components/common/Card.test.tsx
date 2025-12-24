import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import { Card } from './Card';

describe('Card', () => {
  it('renders title and description', () => {
    const { getByText } = renderWithProviders(
      <Card title="Test Title" description="Test Description" />,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });

  it('renders with primary variant by default', () => {
    const { getByText } = renderWithProviders(
      <Card title="Primary" description="desc" />,
    );
    expect(getByText('Primary')).toBeTruthy();
  });

  it('renders with secondary and tertiary variants', () => {
    const { getByText: getByTextSecondary } = renderWithProviders(
      <Card title="Secondary" description="desc" variant="secondary" />,
    );
    expect(getByTextSecondary('Secondary')).toBeTruthy();

    const { getByText: getByTextTertiary } = renderWithProviders(
      <Card title="Tertiary" description="desc" variant="tertiary" />,
    );
    expect(getByTextTertiary('Tertiary')).toBeTruthy();
  });
});
