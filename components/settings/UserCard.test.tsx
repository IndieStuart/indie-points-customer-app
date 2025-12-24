import React from 'react';
import { fireEvent, renderWithProviders } from '../../lib/test-utils';

const mockSignOut = jest.fn();
jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useAuth: () => ({
    session: {
      user: { email: 'test@example.com', created_at: '2023-01-01T00:00:00Z' },
    },
    signOut: mockSignOut,
  }),
}));
import UserCard from './UserCard';

describe('UserCard', () => {
  beforeEach(() => {
    mockSignOut.mockClear();
  });

  it('renders user email and sign up date', () => {
    const { getByText } = renderWithProviders(<UserCard />);
    expect(getByText('test@example.com')).toBeTruthy();
    expect(getByText(/Member since/)).toBeTruthy();
    expect(getByText('Sign Out')).toBeTruthy();
  });

  it('calls signOut when button is pressed', () => {
    const { getByText } = renderWithProviders(<UserCard />);
    fireEvent.press(getByText('Sign Out'));
    expect(mockSignOut).toHaveBeenCalled();
  });
});
