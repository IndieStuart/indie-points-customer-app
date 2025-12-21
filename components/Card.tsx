import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

interface CardProps {
  title: string;
  description: string;
  iconColor: 'blue' | 'yellow' | 'red';
}

export function Card({ title, description, iconColor }: CardProps) {
  const colorMap = {
    blue: '#3182CE',
    yellow: '#D69E2E',
    red: '#E53E3E',
  };

  return (
    <View
      style={styles.card}
    >
      <View style={styles.row}>
        <View
          style={[styles.iconWrapper, { backgroundColor: colorMap[iconColor] }]}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 6,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconWrapper: {
    borderRadius: 12,
    elevation: 3,
    height: 60,
    marginRight: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    width: 60,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: COLORS.muted,
    fontSize: 14,
  },
});
