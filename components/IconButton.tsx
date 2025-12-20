import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';

interface IconButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'black';
  style?: ViewStyle;
}

export default function IconButton({ 
  label, 
  onPress, 
  variant = 'primary',
  style 
}: IconButtonProps) {
  const buttonStyle = variant === 'primary' ? styles.primaryButton : styles.blackButton;
  
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.buttonPressed,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: sizes.button.height,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.md,
  },
  primaryButton: {
    backgroundColor: colors.primary.blue,
    borderWidth: 2,
    borderColor: colors.border.dark,
    ...shadows.lg,
  },
  blackButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
