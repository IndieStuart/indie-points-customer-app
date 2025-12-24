import React from 'react';
import { Text } from 'react-native';
import { renderWithProviders } from '../../lib/test-utils';
import Flex from './Flex';

describe('Flex', () => {
  it('renders children in column by default', () => {
    const { getByText } = renderWithProviders(
      <Flex>
        <Text>Child 1</Text>
        <Text>Child 2</Text>
      </Flex>,
    );
    expect(getByText('Child 1')).toBeTruthy();
    expect(getByText('Child 2')).toBeTruthy();
  });

  it('renders children in row', () => {
    const { getByText } = renderWithProviders(
      <Flex direction="row">
        <Text>Row 1</Text>
        <Text>Row 2</Text>
      </Flex>,
    );
    expect(getByText('Row 1')).toBeTruthy();
    expect(getByText('Row 2')).toBeTruthy();
  });

  it('renders columns when columns prop is set', () => {
    const { getByText } = renderWithProviders(
      <Flex direction="row" columns={2}>
        <Text>Col 1</Text>
        <Text>Col 2</Text>
      </Flex>,
    );
    expect(getByText('Col 1')).toBeTruthy();
    expect(getByText('Col 2')).toBeTruthy();
  });
});
