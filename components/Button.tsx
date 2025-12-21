import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, TYPOGRAPHY } from '../constants/theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'black';
  accessibilityLabel?: string;
}

export default function Button({ 
  label, 
  onPress, 
  variant = 'primary',
  accessibilityLabel,
}: ButtonProps) {
  const backgroundColor = variant === 'black' ? COLORS.black : COLORS.blue;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="button"
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  label: {
    ...TYPOGRAPHY.body,
    color: COLORS.white,
  },
});
