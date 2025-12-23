import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { COLORS, CARD_STYLES, BORDER_RADIUS, SPACING, TYPOGRAPHY } from '../constants/theme';
import { ColorBar } from './ColorBar';
import Button from './Button';
import Flex from './Flex';

interface QRCodeCardProps {
  userId: string;
  onRegenerate: () => void;
}

export function QRCodeCard({ userId, onRegenerate }: QRCodeCardProps) {
  return (
    <View style={styles.container}>

      <View style={styles.qrContainer}>
        <QRCode
          value={userId}
          size={280}
          backgroundColor={COLORS.white}
          color={COLORS.black}
          logo={require('../assets/images/icon.png')}
          logoSize={50}
          logoBackgroundColor={COLORS.white}
          logoBorderRadius={8}
        />
      </View>

      <Button
        label="Regenerate"
        onPress={onRegenerate}
        variant="primary"
        accessibilityLabel="Regenerate QR code"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.lg,
  },
  cardTitle: {
    ...TYPOGRAPHY.h2,
    textAlign: 'center',
  },
  qrContainer: {
    ...CARD_STYLES.container,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
});
