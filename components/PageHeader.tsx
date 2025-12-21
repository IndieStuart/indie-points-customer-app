import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { ColorBar } from './';
import { spacing, typography } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ 
  title, 
  subtitle
}: PageHeaderProps) {
  const colors = useColors();

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { color: colors.text.dark }]}>{title}</Text>

      <View style={styles.barsContainer}>
        <ColorBar color="blue" />
        <ColorBar color="yellow" />
        <ColorBar color="red" />
      </View>

      <Text style={[styles.subtitle, { color: colors.text.medium }]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.extrabold,
    marginBottom: spacing.sm,
  },
  barsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
    alignSelf: 'stretch',
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
