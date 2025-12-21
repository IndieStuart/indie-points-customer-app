import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../constants/theme';

interface PointsRowProps {
  children: React.ReactNode;
}

export default function PointsRow({ children }: PointsRowProps) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
});
