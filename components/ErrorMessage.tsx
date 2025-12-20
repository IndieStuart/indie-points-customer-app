import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../constants/theme';

interface ErrorMessageProps {
  message: string;
  style?: ViewStyle;
}

export function ErrorMessage({ message, style }: ErrorMessageProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.error.background,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.error.border,
    padding: spacing.md,
  },
  text: {
    color: colors.error.text,
    textAlign: 'center',
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});
