import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import PointsSummaryCard from './PointsSummaryCard';

describe('PointsSummaryCard', () => {
  it('renders label and value', () => {
    const { getByText } = renderWithProviders(
      <PointsSummaryCard label="Total Points" value={123} />,
    );
    expect(getByText('Total Points')).toBeTruthy();
    expect(getByText('123')).toBeTruthy();
  });

  it('renders string value', () => {
    const { getByText } = renderWithProviders(
      <PointsSummaryCard label="Points" value="N/A" />,
    );
    expect(getByText('Points')).toBeTruthy();
    expect(getByText('N/A')).toBeTruthy();
  });

  it('applies variant styles', () => {
    const { getByText } = renderWithProviders(
      <PointsSummaryCard label="Secondary" value={0} variant="secondary" />,
    );
    expect(getByText('Secondary')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });
});
