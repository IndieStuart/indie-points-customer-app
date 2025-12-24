import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { borderRadius, shadows, spacing, typography } from '../constants/theme';
import { useColors } from '../hooks';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface PointsSummaryCardProps {
  label: string;
  value: number | string;
  variant?: Variant;
}

export default function PointsSummaryCard({
  label,
  value,
  variant = 'primary',
}: PointsSummaryCardProps) {
  const colors = useColors();
  const backgroundColor = (colors as any)[variant];
  const borderColor = (colors as any)[`${variant}Dark`];
  const textColor = (colors as any).surface;

  return (
    <View style={[styles.container, { backgroundColor, borderColor }]}>
      <View style={styles.content}>
        <Text style={[styles.label, { color: textColor }]} numberOfLines={1}>
          {label}
        </Text>
        <Text style={[styles.value, { color: textColor }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    padding: spacing.md,
    ...shadows.md,
  },
  content: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: typography.fontSizeMd,
    marginBottom: spacing.xs,
  },
  value: {
    fontSize: typography.fontSizeXxl,
    fontWeight: typography.fontWeightBold as TextStyle['fontWeight'],
  },
});
