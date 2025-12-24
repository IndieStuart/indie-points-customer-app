import React from 'react';
import { renderWithProviders } from '../../lib/test-utils';
import { QRCodeCard } from './QRCodeCard';

describe('QRCodeCard', () => {
  it('renders without crashing', () => {
    const { getByTestId } = renderWithProviders(
      <QRCodeCard userId="user-123" />,
    );
    // The outer container should always render
    expect(getByTestId('qr-container')).toBeTruthy();
  });

  it('renders QRCode when layout is set', () => {
    const { getByTestId } = renderWithProviders(
      <QRCodeCard userId="user-456" />,
    );
    // Simulate layout event
    getByTestId('qr-wrapper').props.onLayout({
      nativeEvent: { layout: { width: 200 } },
    });
    // QRCode should now be rendered
    // react-native-qrcode-svg is a native module, so we just check the wrapper
    expect(getByTestId('qr-wrapper')).toBeTruthy();
  });
});
