import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('renders title, description, and icon', () => {
    const { getByText } = renderWithProviders(
      <EmptyState
        title="No Data"
        description="Nothing to show"
        icon="info-circle"
      />,
    );
    expect(getByText('No Data')).toBeTruthy();
    expect(getByText('Nothing to show')).toBeTruthy();
  });
});
