import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, COLOR_VARIANTS, COLOR_VARIANTS_DARK, CARD_STYLES, BORDER_RADIUS, SPACING, TYPOGRAPHY, type ColorVariant } from '../constants/theme';

interface CardProps {
  title: string;
  description: string;
  variant: ColorVariant;
}

export function Card({ title, description, variant }: CardProps) {
  return (
    <View style={[styles.card, { borderColor: COLOR_VARIANTS[variant] }]}>
      <View style={styles.row}>
        <View
          style={[
            styles.iconWrapper,
            { backgroundColor: COLOR_VARIANTS[variant], borderColor: COLOR_VARIANTS_DARK[variant], borderWidth: 1 },
          ]}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: CARD_STYLES.container,
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconWrapper: {
    ...CARD_STYLES.iconBox,
    borderRadius: BORDER_RADIUS.lg,
    height: 60,
    marginRight: SPACING.md,
    width: 60,
  },
  content: {
    flex: 1,
  },
  title: {
    ...TYPOGRAPHY.h3,
    marginBottom: SPACING.xs,
  },
  description: {
    ...TYPOGRAPHY.captionMuted,
  },
});
