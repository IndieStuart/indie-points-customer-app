import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, borderRadius, shadows, sizes, getIconColor } from '../constants/theme';

interface ColorBarProps {
  color: 'blue' | 'yellow' | 'red';
}

export function ColorBar({ color }: ColorBarProps) {
  return (
    <View style={styles.barWrapper}>
      <View style={[styles.bar, { backgroundColor: getIconColor(color) }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  barWrapper: {
    flex: 1,
    ...shadows.sm,
    borderRadius: borderRadius.sm,
  },
  bar: {
    height: sizes.bar.height,
    borderRadius: borderRadius.sm,
    borderWidth: 3,
    borderColor: colors.border.dark,
  },
});
