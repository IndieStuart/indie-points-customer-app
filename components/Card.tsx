import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { spacing, borderRadius, shadows, typography, sizes, getIconColorFromScheme } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface CardProps {
  title: string;
  description: string;
  iconColor: 'blue' | 'yellow' | 'red';
  style?: ViewStyle;
}

export function Card({ title, description, iconColor, style }: CardProps) {
  const colors = useColors();

  return (
    <View style={[
      styles.card, 
      { 
        backgroundColor: colors.background.card,
        borderColor: colors.border.default,
      },
      style
    ]}>
      <View style={styles.cardInner}>
        <View style={[
          styles.iconBox, 
          { 
            backgroundColor: getIconColorFromScheme(iconColor, colors),
            borderColor: colors.border.dark,
          }
        ]}>
          <View style={[styles.iconGlow, { backgroundColor: colors.overlay.light }]} />
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.cardTitle, { color: colors.text.dark }]}>{title}</Text>
          <Text style={[styles.cardDescription, { color: colors.text.medium }]}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    ...shadows.md,
    borderWidth: 2,
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
  },
  iconGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.lg,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
  },
  cardDescription: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.md,
  },
});
