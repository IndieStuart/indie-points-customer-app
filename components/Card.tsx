import React from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { lightTheme, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useColors } from '../hooks';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface CardProps {
  description: string;
  title: string;
  variant?: Variant;
}

export function Card({ description, title, variant = 'primary' }: CardProps) {
  const colors = useColors();
  const borderColor = (colors as any)[`${variant}Light`];
  const leftBarColor = (colors as any)[variant];
  const leftBarBorderColor = (colors as any)[`${variant}Dark`];
  
    return (
      <View style={[styles.container, { borderColor: borderColor }]}> 
        <View style={styles.innerRow}>
          <View style={[styles.leftBar, { backgroundColor: leftBarColor, borderColor: leftBarBorderColor }]} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    marginBottom: spacing.sm,
    padding: spacing.md,
    ...shadows.md,
  },
  content: {
    flex: 1,
  },
  description: {
    color: lightTheme.colors.textSecondary,
    fontSize: typography.fontSizeSm,
  },
  innerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftBar: {
    borderRadius: borderRadius.md,
    borderWidth: 1,
    height: spacing.xxxl,
    marginRight: spacing.md,
    width: spacing.xxxl,
  },
  title: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightBold as TextStyle['fontWeight'],
    marginBottom: spacing.xs,
  },
});
