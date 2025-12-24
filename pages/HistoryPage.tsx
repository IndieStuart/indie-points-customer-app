import React, { useState } from 'react';
import { View } from 'react-native';
import {
  PageContainer,
  PageHeader,
  TabButton,
  BusinessCard,
  TransactionCard,
  BusinessDetailView,
  Flex,
} from '../components';
import type { Business } from '../types';
import {
  FAKE_BUSINESSES,
  FAKE_TRANSACTIONS,
  FAKE_BUSINESS_TRANSACTIONS,
  FAKE_REWARDS,
} from '../lib/fakeData';
import { spacing } from '../constants/theme';

type TabType = 'businesses' | 'transactions';

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('businesses');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  if (selectedBusiness) {
    const transactions = FAKE_BUSINESS_TRANSACTIONS[selectedBusiness.id] || [];
    const rewards = FAKE_REWARDS[selectedBusiness.id] || [];

    return (
      <PageContainer>
        <PageHeader
          onBack={() => setSelectedBusiness(null)}
          title={selectedBusiness.name}
          subtitle="Transaction history and rewards"
        />

        <BusinessDetailView
          businessId={selectedBusiness.id}
          onBack={() => setSelectedBusiness(null)}
          rewards={rewards}
          transactions={transactions}
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader title="History" subtitle="View your transaction history" />

      <Flex direction="row">
          <TabButton
            active={activeTab === 'businesses'}
            label="Businesses"
            onPress={() => setActiveTab('businesses')}
          />
          <TabButton
            active={activeTab === 'transactions'}
            label="Transactions"
            onPress={() => setActiveTab('transactions')}
          />
        </Flex>
      

      {activeTab === 'businesses' ? (
        <Flex gap={spacing.sm}>
          {FAKE_BUSINESSES.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              onPress={() => setSelectedBusiness(business)}
            />
          ))}
        </Flex>
      ) : (
        <Flex gap={spacing.sm}>
          {FAKE_TRANSACTIONS.map((transaction) => {
            const business = FAKE_BUSINESSES.find((b) => b.id === transaction.businessId);
            return (
              <TransactionCard
                key={transaction.id}
                transaction={transaction}
                onPress={() => business && setSelectedBusiness(business)}
              />
            );
          })}
        </Flex>
      )}
    </PageContainer>
  );
}
 
