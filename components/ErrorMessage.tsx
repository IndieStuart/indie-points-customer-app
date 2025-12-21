import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { spacing, borderRadius, typography } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface ErrorMessageProps {
  message: string;
  style?: ViewStyle;
}

export function ErrorMessage({ message, style }: ErrorMessageProps) {
  const colors = useColors();

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: colors.error.background,
        borderColor: colors.error.border,
      },
      style
    ]}>
      <Text style={[styles.text, { color: colors.error.text }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  text: {
    textAlign: 'center',
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});
