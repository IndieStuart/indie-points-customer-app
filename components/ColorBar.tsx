import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_VARIANTS, CARD_STYLES, BORDER_RADIUS, type ColorVariant } from '../constants/theme';

interface ColorBarProps {
  variant: ColorVariant;
}

export function ColorBar({ variant }: ColorBarProps) {
  return (
    <View>
      <View
        style={[styles.bar, { backgroundColor: COLOR_VARIANTS[variant] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    ...CARD_STYLES.iconBox,
    borderRadius: BORDER_RADIUS.sm,
    height: 12,
    width: '100%',
  },
});
