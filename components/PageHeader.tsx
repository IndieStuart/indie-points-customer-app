import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { ColorBar } from './';
import { colors, spacing, typography } from '../constants/theme';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showColorBars?: boolean;
  style?: ViewStyle;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  showColorBars = true,
  style 
}: PageHeaderProps) {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.title}>{title}</Text>

      {showColorBars && (
        <View style={styles.barsContainer}>
          <ColorBar color="blue" />
          <ColorBar color="yellow" />
          <ColorBar color="red" />
        </View>
      )}

      <Text style={styles.subtitle}>{subtitle}</Text>
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
    color: colors.text.dark,
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
    color: colors.text.medium,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
