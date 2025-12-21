import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/theme';

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
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, variant === 'black' ? styles.black : styles.primary]}
    >
      <Text style={[styles.label, variant === 'black' ? styles.labelWhite : styles.labelWhite]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  black: {
    backgroundColor: COLORS.black,
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  labelWhite: {
    color: COLORS.white,
  },
  primary: {
    backgroundColor: COLORS.blue,
  },
});
