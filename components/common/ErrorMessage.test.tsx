import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders the error message', () => {
    const { getByText } = renderWithProviders(
      <ErrorMessage message="Something went wrong" />,
    );
    expect(getByText('Something went wrong')).toBeTruthy();
  });
});
