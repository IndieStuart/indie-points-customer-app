import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import type { Business } from '../types';

interface ApiBusiness {
  businessId: string;
  businessName: string;
  lastTransactionDate: string;
  totalSpent: number;
  totalPointsEarned: number;
  activePointsEarned: number;
  visitCount?: number;
}

export function useCustomerBusinesses(): Business[] | null {
  const { session } = useAuth();
  const [businesses, setBusinesses] = useState<Business[] | null>(null);

  useEffect(() => {
    if (!session) return;
    fetch(
      `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/api_v1_customers_businesses_get`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${session.access_token}` },
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch businesses');
        }
        return res.json();
      })
      .then((data) => {
        if (!data.data || !data.data.businesses) {
          setBusinesses([]);
          return;
        }
        setBusinesses(
          data.data.businesses.map((b: ApiBusiness) => ({
            id: b.businessId,
            name: b.businessName,
            totalSpent: b.totalSpent,
            pointsEarned: b.totalPointsEarned,
            visitCount: b.visitCount ?? 0,
            lastVisit: b.lastTransactionDate,
          })),
        );
      })
      .catch(() => setBusinesses(null));
  }, [session]);

  return businesses;
}
