import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  lightTheme,
  shadows,
  spacing,
  typography,
} from '../../constants/theme';
import { useColors } from '../../hooks';

type Variant = 'primary' | 'secondary' | 'tertiary';

export interface InstructionStep {
  description: string;
  number: number;
  title: string;
  variant?: Variant;
}

interface InstructionListProps {
  steps: InstructionStep[];
  title: string;
}

function Step({
  description,
  number,
  title,
  variant = 'primary',
}: InstructionStep) {
  const colors = useColors();
  const bg = (colors as any)[variant];
  const border = (colors as any)[`${variant}Dark`];

  return (
    <View style={styles.stepRow}>
      <View
        style={[
          styles.numberCircle,
          { backgroundColor: bg, borderColor: border },
        ]}
      >
        <Text style={styles.numberLabel}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export function InstructionList({ steps, title }: InstructionListProps) {
  // `Step` handles color via `useColors()`; no local colors needed here

  return (
    <View>
      <Text style={styles.header}>{title}</Text>
      {steps.map((step) => (
        <Step key={step.number} {...step} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    color: lightTheme.colors.textSecondary,
    fontSize: typography.fontSizeSm,
  },
  header: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeXl,
    fontWeight: typography.fontWeightBold as any,
    marginBottom: spacing.md,
  },
  numberCircle: {
    alignItems: 'center',
    borderRadius: spacing.xxxl / 2,
    borderWidth: 1,
    height: spacing.xxxl,
    justifyContent: 'center',
    marginRight: spacing.md,
    width: spacing.xxxl,
    ...shadows.sm,
  },
  numberLabel: {
    color: lightTheme.colors.surface,
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightBold as any,
  },
  stepContent: {
    flex: 1,
  },
  stepRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  stepTitle: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightBold as any,
    marginBottom: spacing.xs,
  },
});
