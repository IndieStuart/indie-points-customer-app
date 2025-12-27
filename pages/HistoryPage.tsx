import React, { useState } from 'react';
import {
  PageContainer,
  PageHeader,
  TabButton,
  BusinessCard,
  TransactionCard,
  BusinessDetailView,
  Flex,
  EmptyState,
} from '../components';
import type { Business } from '../types';
import { FAKE_BUSINESS_TRANSACTIONS, FAKE_REWARDS } from '../lib/fakeData';
import { useCustomerTransactions } from '../hooks/useCustomerTransactions';
import { useCustomerBusinesses } from '../hooks/useCustomerBusinesses';
import { spacing } from '../constants/theme';

type TabType = 'businesses' | 'transactions';

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('businesses');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null,
  );
  let businesses: Business[] = [];
  let transactions: any[] = [];
  let businessesError: Error | null = null;
  let transactionsError: Error | null = null;
  try {
    businesses = useCustomerBusinesses() ?? [];
  } catch (e) {
    businessesError = e instanceof Error ? e : new Error('Unknown error');
  }
  try {
    transactions = useCustomerTransactions() ?? [];
  } catch (e) {
    transactionsError = e instanceof Error ? e : new Error('Unknown error');
  }

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
        businessesError ? (
          <Flex>
            <EmptyState
              icon="exclamation-circle"
              title="Error"
              description={businessesError.message}
            />
          </Flex>
        ) : businesses.length === 0 ? (
          <Flex>
            <EmptyState
              icon="building-o"
              title="No businesses"
              description="You have not visited any businesses yet."
            />
          </Flex>
        ) : (
          <Flex gap={spacing.sm}>
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onPress={() => setSelectedBusiness(business)}
              />
            ))}
          </Flex>
        )
      ) : transactionsError ? (
        <Flex>
          <EmptyState
            icon="exclamation-circle"
            title="Error"
            description={transactionsError.message}
          />
        </Flex>
      ) : transactions.length === 0 ? (
        <Flex>
          <EmptyState
            icon="history"
            title="No transactions"
            description="You have not made any transactions yet."
          />
        </Flex>
      ) : (
        <Flex gap={spacing.sm}>
          {transactions.map((transaction) => {
            const business = (businesses ?? []).find(
              (b) => b.id === transaction.businessId,
            );
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
