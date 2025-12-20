import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';

interface InfoCardProps {
  icon: string;
  title: string;
  subtitle: string;
  iconColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export default function InfoCard({ 
  icon, 
  title, 
  subtitle, 
  iconColor = colors.primary.blue,
  children,
  style 
}: InfoCardProps) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
    borderWidth: 2,
    borderColor: colors.border.default,
  },
  header: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  iconContainer: {
    width: sizes.icon.sm,
    height: sizes.icon.sm,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    ...shadows.lg,
    borderWidth: 2,
    borderColor: colors.border.dark,
  },
  iconText: {
    fontSize: typography.fontSize.xl,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.text.medium,
  },
});
