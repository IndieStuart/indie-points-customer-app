import React from 'react';
import { View, StyleSheet } from 'react-native';
import { borderRadius, shadows, sizes, getIconColorFromScheme } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface ColorBarProps {
  color: 'blue' | 'yellow' | 'red';
}

export function ColorBar({ color }: ColorBarProps) {
  const colors = useColors();

  return (
    <View style={styles.barWrapper}>
      <View style={[
        styles.bar, 
        { 
          backgroundColor: getIconColorFromScheme(color, colors),
          borderColor: colors.border.dark,
        }
      ]} />
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
  },
});
