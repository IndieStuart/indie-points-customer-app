import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface InfoCardProps {
  icon: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function InfoCard({ 
  icon, 
  title, 
  subtitle, 
  children
}: InfoCardProps) {
  const colors = useColors();

  return (
    <View style={[
      styles.card,
      {
        backgroundColor: colors.background.card,
        borderColor: colors.border.default,
      }
    ]}>
      <View style={styles.header}>
        <View style={[
          styles.iconContainer,
          {
            backgroundColor: colors.primary.blue,
            borderColor: colors.border.dark,
          }
        ]}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, { color: colors.text.dark }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: colors.text.medium }]}>{subtitle}</Text>
        </View>
      </View>
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
    borderWidth: 2,
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
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
  },
});
