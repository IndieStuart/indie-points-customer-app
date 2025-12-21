import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../constants/theme';

interface CardListProps {
  children: React.ReactNode;
}

export default function CardList({ children }: CardListProps) {
  return (
    <View style={styles.container}>
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
