import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../constants/theme';

interface CardListProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function CardList({ children, style }: CardListProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
});
