import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography, sizes, getIconColor } from '../constants/theme';

interface CardProps {
  title: string;
  description: string;
  iconColor: 'blue' | 'yellow' | 'red';
  style?: ViewStyle;
}

export function Card({ title, description, iconColor, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.cardInner}>
        <View style={[styles.iconBox, { backgroundColor: getIconColor(iconColor) }]}>
          <View style={styles.iconGlow} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    ...shadows.md,
    borderWidth: 2,
    borderColor: colors.border.default,
  },
  cardInner: {
    flexDirection: 'row',
    padding: spacing.lg,
  },
  iconBox: {
    width: sizes.icon.md,
    height: sizes.icon.md,
    borderRadius: borderRadius.lg,
    marginRight: spacing.md,
    ...shadows.lg,
    borderWidth: 2,
    borderColor: colors.border.dark,
  },
  iconGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.overlay.light,
    borderRadius: borderRadius.lg,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.text.medium,
    lineHeight: typography.lineHeight.md,
  },
});
