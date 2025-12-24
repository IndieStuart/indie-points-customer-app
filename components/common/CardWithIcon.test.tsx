import React from 'react';
import { Text } from 'react-native';
import { renderWithProviders } from '../../lib/test-utils';
import CardWithIcon from './CardWithIcon';

describe('CardWithIcon', () => {
  it('renders title, subtitle, and icon', () => {
    const { getByText } = renderWithProviders(
      <CardWithIcon
        title="Test Title"
        subtitle="Test Subtitle"
        icon="star"
        variant="primary"
      />,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Subtitle')).toBeTruthy();
  });

  it('renders children', () => {
    const { getByText } = renderWithProviders(
      <CardWithIcon title="t" subtitle="s" icon="star" variant="primary">
        <Text>Child Content</Text>
      </CardWithIcon>,
    );
    expect(getByText('Child Content')).toBeTruthy();
  });

  it('renders with transparent background when transparent is true', () => {
    const { getByText } = renderWithProviders(
      <CardWithIcon
        title="t"
        subtitle="s"
        icon="star"
        variant="primary"
        transparent
      >
        <Text>Transparent</Text>
      </CardWithIcon>,
    );
    expect(getByText('Transparent')).toBeTruthy();
  });
});
