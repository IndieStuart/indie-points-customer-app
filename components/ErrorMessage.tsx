import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, TYPOGRAPHY } from '../constants/theme';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED7D7',
    borderColor: COLORS.red,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    marginVertical: SPACING.md,
    padding: SPACING.md,
  },
  text: {
    color: '#C53030',
    ...TYPOGRAPHY.bodyMedium,
  },
});
