import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing, borderRadius } from '../../constants/theme';
import { useColors } from '../../hooks';

type ColorVariant = 'primary' | 'secondary' | 'tertiary';

interface ColorBarProps {
  variant: ColorVariant;
}

export function ColorBar({ variant }: ColorBarProps) {
  const colors = useColors();
  const backgroundColor = (colors as any)[variant];
  const borderColor = (colors as any)[`${variant}Dark`];

  return (
    <View style={styles.wrapper}>
      <View style={[styles.bar, { backgroundColor, borderColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    height: spacing.sm,
    width: '100%',
  },
  wrapper: {
    width: '100%',
  },
});
