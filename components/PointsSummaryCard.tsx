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
    <View style={[styles.container, spaced && styles.spaced]}>
      <View style={[styles.colorPill, { backgroundColor: COLOR_VARIANTS[variant] }]} />
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
