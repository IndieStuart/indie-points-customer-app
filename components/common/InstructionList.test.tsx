import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import { InstructionList } from './InstructionList';

describe('InstructionList', () => {
  it('renders the title and steps', () => {
    const steps = [
      { number: 1, title: 'Step 1', description: 'Do this' },
      { number: 2, title: 'Step 2', description: 'Do that' },
    ];
    const { getByText } = renderWithProviders(
      <InstructionList title="How to use" steps={steps} />,
    );
    expect(getByText('How to use')).toBeTruthy();
    expect(getByText('Step 1')).toBeTruthy();
    expect(getByText('Step 2')).toBeTruthy();
    expect(getByText('Do this')).toBeTruthy();
    expect(getByText('Do that')).toBeTruthy();
  });
});
