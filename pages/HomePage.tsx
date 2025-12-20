import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { colors, spacing, typography } from '../constants/theme';

export default function HomePage() {
  const { session, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>
        Welcome! You are logged in.
      </Text>
      {session?.user?.email && (
        <Text style={styles.text}>Email: {session.user.email}</Text>
      )}
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background.primary,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.lg,
  },
  text: {
    fontSize: typography.fontSize.md,
    color: colors.text.medium,
    marginBottom: spacing.lg,
  },
});
