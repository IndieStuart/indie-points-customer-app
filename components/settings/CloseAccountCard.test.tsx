import React from 'react';
import { fireEvent, renderWithProviders } from '../../lib/test-utils';
import CloseAccountCard from './CloseAccountCard';

describe('CloseAccountCard', () => {
  beforeAll(() => {
    jest.spyOn(require('react-native'), 'Alert', 'get').mockReturnValue({
      alert: jest.fn(),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
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

  it('shows alert when button is pressed', () => {
    const { getAllByText } = renderWithProviders(<CloseAccountCard />);
    fireEvent.press(getAllByText('Close Account')[1]);
    const Alert = require('react-native').Alert;
    expect(Alert.alert).toHaveBeenCalledWith(
      'Close Account',
      expect.any(String),
      expect.any(Array),
    );
  });
});
