import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface IconButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'black';
}

export default function IconButton({ 
  label, 
  onPress, 
  variant = 'primary'
}: IconButtonProps) {
  const colors = useColors();

  const primaryButtonStyle = {
    backgroundColor: colors.background.card,
    borderWidth: 2,
    borderColor: colors.primary.blue,
  };
  
  const primaryTextStyle = {
    color: colors.primary.blue,
  };

  const blackButtonStyle = {
    backgroundColor: colors.background.card,
    borderWidth: 2,
    borderColor: colors.text.dark,
  };

  const blackTextStyle = {
    color: colors.text.dark,
  };
  
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.button,
        variant === 'primary' ? primaryButtonStyle : blackButtonStyle,
        pressed && styles.buttonPressed
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        variant === 'primary' ? primaryTextStyle : blackTextStyle,
      ]}>{label}</Text>
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
    ...shadows.lg,
  },
  buttonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
