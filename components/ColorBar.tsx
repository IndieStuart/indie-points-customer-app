import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, borderRadius, shadows, sizes } from '../constants/theme';

interface ColorBarProps {
  color: 'blue' | 'yellow' | 'red';
}

export function ColorBar({ color }: ColorBarProps) {
  const barColorStyle = color === 'blue' 
    ? styles.blueBar 
    : color === 'yellow' 
    ? styles.yellowBar 
    : styles.redBar;

  return (
    <View style={styles.barWrapper}>
      <View style={[styles.bar, barColorStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  barWrapper: {
    flex: 1,
    ...shadows.small,
    borderRadius: borderRadius.sm,
  },
  bar: {
    height: sizes.bar.height,
    borderRadius: borderRadius.sm,
    borderWidth: 3,
    borderColor: colors.border.dark,
  },
  blueBar: {
    backgroundColor: colors.primary.blue,
  },
  yellowBar: {
    backgroundColor: colors.primary.yellow,
  },
  redBar: {
    backgroundColor: colors.primary.red,
  },
});
