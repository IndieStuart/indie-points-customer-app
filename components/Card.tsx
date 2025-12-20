import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, shadows, typography, sizes } from '../constants/theme';

interface CardProps {
  title: string;
  description: string;
  iconColor: 'blue' | 'yellow' | 'red';
  style?: ViewStyle;
}

export function Card({ title, description, iconColor, style }: CardProps) {
  const iconColorStyle = iconColor === 'blue' 
    ? styles.blueIcon 
    : iconColor === 'yellow' 
    ? styles.yellowIcon 
    : styles.redIcon;

  return (
    <View style={[styles.card, style]}>
      <View style={styles.cardInner}>
        <View style={[styles.iconBox, iconColorStyle]}>
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
    borderRadius: borderRadius.xxl,
    ...shadows.medium,
    borderWidth: 2,
    borderColor: colors.border.default,
  },
  cardInner: {
    flexDirection: 'row',
    padding: spacing.md + spacing.xs, // 16
  },
  iconBox: {
    width: sizes.icon.md,
    height: sizes.icon.md,
    borderRadius: borderRadius.xl,
    marginRight: spacing.sm + spacing.xs, // 12
    ...shadows.large,
    borderWidth: 2,
    borderColor: colors.border.dark,
  },
  iconGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.overlay.light,
    borderRadius: borderRadius.xl,
  },
  blueIcon: {
    backgroundColor: colors.primary.blue,
  },
  yellowIcon: {
    backgroundColor: colors.primary.yellow,
  },
  redIcon: {
    backgroundColor: colors.primary.red,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.xs + 1, // 5
  },
  cardDescription: {
    fontSize: typography.fontSize.md,
    color: colors.text.medium,
    lineHeight: typography.lineHeight.normal,
  },
});
