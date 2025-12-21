import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface PointsSummaryCardProps {
  label: string;
  value: number | string;
  color: 'blue' | 'yellow' | 'red';
  spaced?: boolean;
}

export default function PointsSummaryCard({ 
  label, 
  value, 
  color,
  spaced = false,
}: PointsSummaryCardProps) {
  return (
    <View style={[styles.container, spaced && styles.spaced]}>
      <View style={[styles.colorPill, { backgroundColor: colorMap[color] }]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const colorMap = {
  blue: COLORS.blue,
  yellow: COLORS.yellow,
  red: COLORS.red,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 6,
    flex: 1,
    padding: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  spaced: {
    marginBottom: 12,
  },
  colorPill: {
    borderRadius: 6,
    height: 8,
    marginBottom: 8,
    width: '100%',
  },
  label: {
    color: COLORS.muted,
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
  },
});
