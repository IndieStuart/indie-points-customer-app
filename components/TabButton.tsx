import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { spacing, borderRadius, typography, shadows } from '../constants/theme';
import { useColors, useHapticFeedback } from '../hooks';

interface TabButtonProps {
  active: boolean;
  label: string;
  onPress: () => void;
}

export default function TabButton({ active, label, onPress }: TabButtonProps) {
  const colors = useColors();
  const { triggerSelection } = useHapticFeedback();

  const handlePress = () => {
    triggerSelection();
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.tabButton,
        {
          backgroundColor: active ? colors.primary : 'transparent',
          borderColor: active ? colors.primaryDark : colors.primary,
        },
      ]}
    >
      <Text
        style={[
          styles.tabButtonText,
          { color: active ? colors.surface : colors.primary },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    alignItems: 'center',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    flex: 1,
    paddingVertical: spacing.sm,
    ...shadows.sm,
  },
  tabButtonText: {
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightMedium as any,
  },
});
