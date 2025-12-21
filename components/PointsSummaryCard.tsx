import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { spacing, borderRadius, shadows, typography, getIconColorFromScheme } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface PointsSummaryCardProps {
  label: string;
  value: number | string;
  color: 'blue' | 'yellow' | 'red';
}

export default function PointsSummaryCard({ 
  label, 
  value, 
  color
}: PointsSummaryCardProps) {
  const colors = useColors();
  const backgroundColor = getIconColorFromScheme(color, colors);

  return (
    <View style={[
      styles.card,
      {
        backgroundColor,
        borderColor: colors.border.dark,
      }
    ]}>
      <Text style={[styles.label, { color: colors.background.card }]}>{label}</Text>
      <Text style={[styles.value, { color: colors.background.card }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.lg,
    borderWidth: 4,
    marginBottom: spacing.lg,
    flex: 1,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.sm,
  },
  value: {
    fontWeight: typography.fontWeight.bold,
    fontSize: 32,
    lineHeight: 40,
  },
});
