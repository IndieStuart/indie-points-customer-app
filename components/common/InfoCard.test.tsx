import React from 'react';
import { Text } from 'react-native';
import { renderWithProviders } from '../../lib/test-utils';
import InfoCard from './InfoCard';

describe('InfoCard', () => {
  it('renders title, subtitle, and children', () => {
    const { getByText } = renderWithProviders(
      <InfoCard title="Info Title" subtitle="Info Subtitle" icon="info">
        <Text>Info Child</Text>
      </InfoCard>,
    );
    expect(getByText('Info Title')).toBeTruthy();
    expect(getByText('Info Subtitle')).toBeTruthy();
    expect(getByText('Info Child')).toBeTruthy();
  });
});
