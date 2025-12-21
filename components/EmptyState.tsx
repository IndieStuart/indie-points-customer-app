import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';

interface EmptyStateProps {
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  title: string;
  description: string;
}

export default function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={64} color={COLORS.muted} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
  },
  icon: {
    marginBottom: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.h3,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  description: {
    ...TYPOGRAPHY.captionMuted,
    textAlign: 'center',
    maxWidth: 300,
  },
});
