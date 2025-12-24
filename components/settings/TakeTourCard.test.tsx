import React from 'react';
import { fireEvent, renderWithProviders } from '../../lib/test-utils';

const mockStartTour = jest.fn();
jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useTour: () => ({ startTour: mockStartTour }),
}));
import TakeTourCard from './TakeTourCard';

describe('TakeTourCard', () => {
  beforeEach(() => {
    mockStartTour.mockClear();
  });

  it('renders card and button', () => {
    const { getByText } = renderWithProviders(<TakeTourCard />);
    expect(getByText('Take a Tour')).toBeTruthy();
    expect(getByText('Learn how to use Indie Points')).toBeTruthy();
    expect(getByText('Start Tour')).toBeTruthy();
  });

  it('calls startTour when button is pressed', () => {
    const { getByText } = renderWithProviders(<TakeTourCard />);
    fireEvent.press(getByText('Start Tour'));
    expect(mockStartTour).toHaveBeenCalled();
  });
});
