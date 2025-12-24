import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CardWithIcon from '../common/CardWithIcon';
import { typography } from '../../constants/theme';
import { useColors, useHapticFeedback } from '../../hooks';
import type { Transaction } from '../../types';

interface TransactionCardProps {
  transaction: Transaction;
  onPress?: () => void;
}

export default function TransactionCard({
  transaction,
  onPress,
}: TransactionCardProps) {
  const colors = useColors();
  const { triggerSelection } = useHapticFeedback();

  const showChevron = !!onPress;

  const handlePress = () => {
    if (onPress) {
      triggerSelection();
      onPress();
    }
  };

  const variant = transaction.type === 'earn' ? 'primary' : 'secondary';
  const icon = transaction.type === 'earn' ? 'plus-circle' : 'minus-circle';

  const CardContent = (
    <CardWithIcon
      compact={true}
      icon={icon}
      showChevron={showChevron}
      subtitle={new Date(transaction.date).toLocaleDateString()}
      title={transaction.businessName}
      variant={variant}
      transparent={true}
    >
      <View style={styles.transactionDetails}>
        <View style={styles.transactionRow}>
          <Text
            style={[styles.transactionLabel, { color: colors.textSecondary }]}
          >
            Amount:
          </Text>
          <Text style={[styles.transactionValue, { color: colors.text }]}>
            £{transaction.amount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.transactionRow}>
          <Text
            style={[styles.transactionLabel, { color: colors.textSecondary }]}
          >
            Points {transaction.type === 'earn' ? 'earned' : 'redeemed'}:
          </Text>
          <Text style={[styles.transactionValue, { color: colors.text }]}>
            {transaction.points}
          </Text>
        </View>
      </View>
    </CardWithIcon>
  );

  if (onPress) {
    return <Pressable onPress={handlePress}>{CardContent}</Pressable>;
  }

  return CardContent;
}

const styles = StyleSheet.create({
  transactionDetails: {
    gap: 2,
  },
  transactionLabel: {
    fontSize: typography.fontSizeXs,
  },
  transactionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionValue: {
    fontSize: typography.fontSizeSm,
    fontWeight: typography.fontWeightMedium as any,
  },
});
