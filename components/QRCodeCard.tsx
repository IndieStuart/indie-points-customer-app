import React, { useState } from 'react';
import { LayoutChangeEvent, View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { borderRadius, spacing } from '../constants/theme';
const appIcon = require('../assets/images/icon.png');

interface QRCodeCardProps {
  userId: string;
}

export function QRCodeCard({ userId }: QRCodeCardProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const fullWidth = e.nativeEvent.layout.width;
    const borderWidth = 4;
    const innerWidth = Math.max(
      0,
      Math.floor(fullWidth - spacing.md * 2 - borderWidth * 2),
    );
    setContainerWidth(innerWidth);
  };

  const qrSize = containerWidth > 0 ? containerWidth : 0;
  const logoSize = Math.max(0, Math.floor(qrSize * 0.2));

  return (
    <View style={styles.container}>
      <View style={styles.qrWrapper} onLayout={onLayout}>
        {qrSize > 0 && (
          <QRCode
            value={userId}
            size={qrSize}
            logo={appIcon}
            logoBackgroundColor="transparent"
            logoBorderRadius={borderRadius.md}
            logoMargin={spacing.xs}
            logoSize={logoSize}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  qrWrapper: {
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: borderRadius.lg,
    borderWidth: 4,
    padding: spacing.md,
    width: '100%',
  },
});
