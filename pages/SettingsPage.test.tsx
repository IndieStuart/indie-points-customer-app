import React from 'react';
import { renderWithProviders } from '../lib/test-utils';
import SettingsPage from './SettingsPage';

describe('SettingsPage', () => {
  it('renders settings page header and cards', () => {
    const { getByText, getAllByText } = renderWithProviders(<SettingsPage />);
    expect(getByText('Settings')).toBeTruthy();
    expect(getByText('Manage your account')).toBeTruthy();
    expect(getByText('Unknown user')).toBeTruthy();
    expect(getByText("Take a Tour")).toBeTruthy();
    expect(getAllByText("Close Account").length).toBeGreaterThan(0);
    expect(getByText("Sign Out")).toBeTruthy();
    expect(getByText("Start Tour")).toBeTruthy();
  });
});
