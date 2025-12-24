import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Flex from './Flex';
import TabButton from './TabButton';
import TransactionCard from './TransactionCard';
import RewardCard from './RewardCard';
import type { Transaction, Reward } from '../types';
import { spacing, typography } from '../constants/theme';
import { useColors, useHapticFeedback } from '../hooks';

type DetailTabType = 'transactions' | 'rewards';

interface BusinessDetailViewProps {
  businessId: string;
  transactions: Transaction[];
  rewards: Reward[];
  onBack: () => void;
}

export default function BusinessDetailView({
  businessId,
  transactions,
  rewards,
  onBack,
}: BusinessDetailViewProps) {
  const [detailTab, setDetailTab] = useState<DetailTabType>('transactions');
  const colors = useColors();
  const { triggerSelection } = useHapticFeedback();

  const handleBack = () => {
    triggerSelection();
    onBack();
  };

  return (
    <View style={styles.detailContainer}>
      <View style={styles.tabContainer}>
        <TabButton
          active={detailTab === 'transactions'}
          label="Transactions"
          onPress={() => setDetailTab('transactions')}
        />
        <TabButton
          active={detailTab === 'rewards'}
          label="Rewards"
          onPress={() => setDetailTab('rewards')}
        />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {detailTab === 'transactions' ? (
          <Flex gap={spacing.sm}>
            {transactions.map((transaction) => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
            {transactions.length === 0 && (
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                No transactions found
              </Text>
            )}
          </Flex>
        ) : (
          <Flex gap={spacing.sm}>
            {rewards.map((reward) => (
              <RewardCard key={reward.id} reward={reward} />
            ))}
            {rewards.length === 0 && (
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                No rewards available
              </Text>
            )}
          </Flex>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  emptyText: {
    fontSize: typography.fontSizeMd,
    paddingVertical: spacing.xl,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});
