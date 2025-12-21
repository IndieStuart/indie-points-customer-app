import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface ColorBarProps {
  color: 'blue' | 'yellow' | 'red';
}

export function ColorBar({ color }: ColorBarProps) {
  const colorMap = {
    blue: '#3182CE',
    yellow: '#D69E2E',
    red: '#E53E3E',
  };

  return (
    <View>
      <View
        style={[styles.bar, { backgroundColor: colorMap[color] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 6,
    elevation: 3,
    height: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    width: '100%',
  },
});
