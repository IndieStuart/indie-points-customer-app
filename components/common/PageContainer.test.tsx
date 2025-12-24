import React from 'react';
import { Text } from 'react-native';
import { renderWithProviders } from '../../lib/test-utils';
import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('renders children', () => {
    const { getByText } = renderWithProviders(
      <PageContainer>
        <Text>Page Content</Text>
      </PageContainer>,
    );
    expect(getByText('Page Content')).toBeTruthy();
  });
});
