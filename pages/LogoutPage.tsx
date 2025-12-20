import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../constants/theme';

export default function LogoutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logged Out</Text>
      <Text style={styles.text}>You have been successfully logged out.</Text>
      <Text style={styles.text}>Redirecting to login...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.xl,
  },
  text: {
    fontSize: typography.fontSize.base,
    color: colors.text.medium,
    marginBottom: spacing.xl,
  },
});
