import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CardWithIcon from '../common/CardWithIcon';
import { typography } from '../../constants/theme';
import { useColors, useHapticFeedback } from '../../hooks';
import type { Business } from '../../types';

interface BusinessCardProps {
  business: Business;
  onPress: () => void;
}

export default function BusinessCard({ business, onPress }: BusinessCardProps) {
  const colors = useColors();
  const { triggerSelection } = useHapticFeedback();

  const handlePress = () => {
    triggerSelection();
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      <CardWithIcon
        compact={true}
        icon="shopping-bag"
        showChevron={true}
        subtitle={`Last visit: ${new Date(
          business.lastVisit,
        ).toLocaleDateString()}`}
        title={business.name}
        variant="primary"
        transparent={true}
      >
        <View style={styles.statsContainer}>
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Amount:
            </Text>
            <Text style={[styles.statValue, { color: colors.text }]}>
              £{business.totalSpent.toFixed(2)}
            </Text>
          </View>
          <View style={styles.statRow}>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              Points earned:
            </Text>
            <Text style={[styles.statValue, { color: colors.text }]}>
              {business.pointsEarned}
            </Text>
          </View>
        </View>
      </CardWithIcon>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  statLabel: {
    fontSize: typography.fontSizeXs,
  },
  statRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statValue: {
    fontSize: typography.fontSizeSm,
    fontWeight: typography.fontWeightMedium as any,
  },
  statsContainer: {
    gap: 2,
  },
});
