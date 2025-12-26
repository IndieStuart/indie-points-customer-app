const mockAlert = jest.fn();
const mockCloseAccount = jest.fn();

jest.mock('../../hooks/useAlert', () => ({
  useAlert: () => ({ alert: mockAlert }),
}));
jest.mock('../../hooks/useCloseAccount', () => ({
  useCloseAccount: () => ({ closeAccount: mockCloseAccount }),
}));

import React from 'react';
import { fireEvent, renderWithProviders } from '../../lib/test-utils';
import CloseAccountCard from './CloseAccountCard';

describe('CloseAccountCard', () => {
  beforeEach(() => {
    mockCloseAccount.mockClear();
    mockAlert.mockClear();
  });

  it('renders card and button', () => {
    const { getAllByText, getByText } = renderWithProviders(
      <CloseAccountCard />,
    );

    expect(getAllByText('Close Account').length).toBeGreaterThan(1);
    expect(
      getByText(
        'Permanently delete your account, lose all your points and rewards, and erase all data forever',
      ),
    ).toBeTruthy();
  });

  it('shows alert and calls closeAccount when confirm pressed', () => {
    mockAlert.mockImplementation((_title, _msg, buttons) => {
      const destructive = buttons.find((b) => b.style === 'destructive');
      if (destructive && destructive.onPress) destructive.onPress();
    });

    const { getAllByText } = renderWithProviders(<CloseAccountCard />);
    fireEvent.press(getAllByText('Close Account')[1]);

    expect(mockAlert).toHaveBeenCalledWith(
      'Close Account',
      expect.any(String),
      expect.any(Array),
    );
    expect(mockCloseAccount).toHaveBeenCalled();
  });
});
