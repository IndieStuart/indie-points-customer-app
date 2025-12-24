import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import {
  spacing,
  borderRadius,
  shadows,
  typography,
} from '../../constants/theme';
import { useColors } from '../../hooks';

interface ButtonProps {
  label: string;
  onPress: () => void;
  outline?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  style?: any;
}

export default function Button({
  label,
  onPress,
  outline,
  variant = 'primary',
  fullWidth,
  style,
}: ButtonProps) {
  const colors = useColors();

  const variantColor = (colors as any)[variant];
  const variantDarkColor = (colors as any)[`${variant}Dark`] || colors.border;

  const resolvedBg = outline ? 'transparent' : variantColor;
  const resolvedBorder = outline ? variantColor : variantDarkColor;
  const resolvedText = outline ? variantColor : colors.surface;

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={label}
      accessibilityRole="button"
      style={({ pressed }) => [
        { backgroundColor: resolvedBg, borderColor: resolvedBorder },
        fullWidth && { width: '100%' },
        pressed && styles.pressed,
        styles.container,
        style,
      ]}
    >
      <Text style={[styles.label, { color: resolvedText }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    ...shadows.md,
  },
  label: {
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightMedium as any,
  },
  pressed: {
    opacity: 0.85,
  },
});
