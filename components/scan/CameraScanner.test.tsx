import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import CameraScanner from './CameraScanner';

describe('CameraScanner', () => {
  it('renders camera view', () => {
    const { getByTestId } = renderWithProviders(<CameraScanner />);
    expect(getByTestId('camera-view')).toBeTruthy();
  });

  it('calls onScan when QR code is scanned', () => {
    const onScan = jest.fn();
    const { getByTestId } = renderWithProviders(
      <CameraScanner onScan={onScan} />,
    );
    // Simulate barcode scan
    getByTestId('camera-view').props.onBarcodeScanned({
      type: 'qr',
      data: 'test-qr',
    });
    expect(onScan).toHaveBeenCalledWith('test-qr');
  });
});
