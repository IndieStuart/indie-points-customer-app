import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, COLOR_VARIANTS, CARD_STYLES, BORDER_RADIUS, SPACING, TYPOGRAPHY, type ColorVariant } from '../constants/theme';

export interface InstructionStep {
  number: number;
  title: string;
  description: string;
  color: ColorVariant;
}

interface InstructionStepProps extends InstructionStep {}

function Step({ number, title, description, color }: InstructionStepProps) {
  return (
    <View style={styles.step}>
      <View style={[styles.numberCircle, { backgroundColor: COLOR_VARIANTS[color] }]}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  );
}

interface InstructionListProps {
  title: string;
  steps: InstructionStep[];
}

export function InstructionList({ title, steps }: InstructionListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      
      {steps.map((step) => (
        <Step key={step.number} {...step} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.lg,
    paddingBottom: SPACING.lg,
  },
  heading: {
    ...TYPOGRAPHY.h2,
    fontWeight: 'bold',
  },
  step: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: SPACING.md,
  },
  numberCircle: {
    ...CARD_STYLES.iconBox,
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  numberText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
    gap: SPACING.xs,
  },
  stepTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: 'bold',
  },
  stepDescription: {
    ...TYPOGRAPHY.captionMuted,
  },
});
