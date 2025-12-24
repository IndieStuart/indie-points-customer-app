import React from 'react';
import { fireEvent, renderWithProviders } from '../../lib/test-utils';
import CameraPermissionRequest from './CameraPermissionRequest';

describe('CameraPermissionRequest', () => {
  it('renders permission text and button', () => {
    const { getByText } = renderWithProviders(
      <CameraPermissionRequest onRequestPermission={jest.fn()} />,
    );
    expect(getByText('We need your permission to use the camera')).toBeTruthy();
    expect(getByText('Grant Permission')).toBeTruthy();
  });

  it('calls onRequestPermission when button is pressed', () => {
    const onRequestPermission = jest.fn();
    const { getByText } = renderWithProviders(
      <CameraPermissionRequest onRequestPermission={onRequestPermission} />,
    );
    fireEvent.press(getByText('Grant Permission'));
    expect(onRequestPermission).toHaveBeenCalled();
  });
});
