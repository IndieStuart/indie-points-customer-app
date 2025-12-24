import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardWithIcon from './CardWithIcon';
import { typography } from '../constants/theme';
import { useColors } from '../hooks';
import type { Reward } from '../types';

interface RewardCardProps {
  reward: Reward;
}
export default function RewardCard({ reward }: RewardCardProps) {
  const colors = useColors();
  const variant = reward.available ? 'primary' : 'tertiary';

  return (
    <CardWithIcon
    compact={true}
      icon="gift"
      subtitle={reward.description}
      title={reward.name}
      variant={variant}
      transparent={true}
    >
      <View style={styles.rewardDetails}>
        <View style={styles.rewardRow}>
          <Text style={[styles.rewardLabel, { color: colors.textSecondary }]}>Points required:</Text>
          <Text style={[styles.rewardValue, { color: colors.text }]}>{reward.pointsRequired}</Text>
        </View>
        <View style={styles.rewardRow}>
          <Text style={[styles.rewardLabel, { color: colors.textSecondary }]}>Status:</Text>
          <Text style={[styles.rewardValue, { color: colors.text }]}>{reward.available ? 'Available' : 'Not enough points'}</Text>
        </View>
      </View>
    </CardWithIcon>
  );
}

const styles = StyleSheet.create({
  rewardDetails: {
    gap: 2,
  },
  rewardLabel: {
    fontSize: typography.fontSizeXs,
  },
  rewardRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardValue: {
    fontSize: typography.fontSizeSm,
    fontWeight: typography.fontWeightMedium as any,
  },
});
