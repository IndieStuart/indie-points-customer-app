import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import type { Transaction } from '../types';

export function useCustomerTransactions(
  page: number = 1,
): Transaction[] | null {
  const { session } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  useEffect(() => {
    if (!session) return;
    fetch(
      `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/api_v1_customers_transactions_get?page=${page}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${session.access_token}` },
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch transactions');
        }
        return res.json();
      })
      .then((data) => {
        if (!data.data || !data.data.transactions) {
          setTransactions([]);
          return;
        }
        setTransactions(
          data.data.transactions.map((t: any) => ({
            id: t.transactionId,
            businessId: t.businessId,
            businessName: t.businessName,
            amountSpent: t.amountSpent,
            pointsAwarded: t.pointsAwarded,
            date: t.createdAt,
            type: t.type === 'redeem' ? 'redeem' : 'earn',
          })),
        );
      })
      .catch(() => setTransactions(null));
  }, [session, page]);

  return transactions;
}
