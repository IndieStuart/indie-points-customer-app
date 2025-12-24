import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../lib/test-utils';
import FeedbackCard from './FeedbackCard';

describe('FeedbackCard', () => {
  it('renders feedback title, subtitle, and button', () => {
    const { getByText } = renderWithProviders(<FeedbackCard />);
    expect(getByText("We'd love your feedback!")).toBeTruthy();
    expect(getByText('Help us improve Indie Points')).toBeTruthy();
    expect(getByText('Send Feedback')).toBeTruthy();
  });

  it('calls sendFeedback when button is pressed', () => {
    const openURLMock = jest.fn();
    jest
      .spyOn(require('react-native'), 'Linking', 'get')
      .mockReturnValue({ openURL: openURLMock });
    const { getByText } = renderWithProviders(<FeedbackCard />);
    fireEvent.press(getByText('Send Feedback'));
    expect(openURLMock).toHaveBeenCalledWith(
      expect.stringContaining('mailto:'),
    );
    jest.restoreAllMocks();
  });
});
