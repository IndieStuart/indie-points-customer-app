import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, TYPOGRAPHY } from '../constants/theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'black' | 'danger';
  accessibilityLabel?: string;
}

export default function Button({ 
  label, 
  onPress, 
  variant = 'primary',
  accessibilityLabel,
}: ButtonProps) {
  let backgroundColor: string = COLORS.blue;
  if (variant === 'black') backgroundColor = COLORS.black;
  if (variant === 'danger') backgroundColor = COLORS.red;
  let borderColor: string = COLORS.border;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor, borderColor }]}
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
    borderWidth: 1,
    elevation: 3,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  label: {
    ...TYPOGRAPHY.body,
    color: COLORS.white,
  },
});
