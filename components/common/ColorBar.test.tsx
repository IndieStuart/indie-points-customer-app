import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import { ColorBar } from './ColorBar';

describe('ColorBar', () => {
  it('renders with primary, secondary, and tertiary variants', () => {
    const { toJSON: toPrimary } = renderWithProviders(
      <ColorBar variant="primary" />,
    );
    expect(toPrimary()).toMatchSnapshot();
    const { toJSON: toSecondary } = renderWithProviders(
      <ColorBar variant="secondary" />,
    );
    expect(toSecondary()).toMatchSnapshot();
    const { toJSON: toTertiary } = renderWithProviders(
      <ColorBar variant="tertiary" />,
    );
    expect(toTertiary()).toMatchSnapshot();
  });
});
