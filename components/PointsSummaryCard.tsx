import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR_VARIANTS, CARD_STYLES, BORDER_RADIUS, SPACING, TYPOGRAPHY, type ColorVariant } from '../constants/theme';

interface PointsSummaryCardProps {
  label: string;
  value: number | string;
  variant: ColorVariant;
  spaced?: boolean;
}

export default function PointsSummaryCard({ 
  label, 
  value, 
  variant,
  spaced = false,
}: PointsSummaryCardProps) {
  return (
    <View style={[styles.container, spaced && styles.spaced, VARIANT_BORDER[variant]]}>
      <View style={[styles.colorPill, VARIANT_PILL[variant]]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CARD_STYLES.container,
    alignItems: 'flex-start',
    flex: 1,
    padding: SPACING.md,
  },
  spaced: {
    marginBottom: SPACING.lg,
  },
  colorPill: {
    borderRadius: BORDER_RADIUS.sm,
    height: 8,
    marginBottom: SPACING.sm,
    width: '100%',
  },
  label: {
    ...TYPOGRAPHY.captionMuted,
    marginBottom: SPACING.xs,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
  },
});

const VARIANT_BORDER: Record<ColorVariant, any> = StyleSheet.create({
  blue: { borderColor: COLOR_VARIANTS.blue },
  yellow: { borderColor: COLOR_VARIANTS.yellow },
  red: { borderColor: COLOR_VARIANTS.red },
});

const VARIANT_PILL: Record<ColorVariant, any> = StyleSheet.create({
  blue: { backgroundColor: COLOR_VARIANTS.blue },
  yellow: { backgroundColor: COLOR_VARIANTS.yellow },
  red: { backgroundColor: COLOR_VARIANTS.red },
});
