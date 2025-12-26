import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import type { CustomerProfileResponse } from '../types';

export function useCustomerProfile(): CustomerProfileResponse | null {
  const { session } = useAuth();
  const [profile, setProfile] = useState<CustomerProfileResponse | null>(null);

  useEffect(() => {
    if (!session) return;
    fetch(
      `${process.env.EXPO_PUBLIC_SUPABASE_URL}/functions/v1/api_v1_customers_profile_get`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${session.access_token}` },
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch profile');
        }
        return res.json();
      })
      .then(setProfile)
      .catch(() => setProfile(null));
  }, [session]);

  return profile;
}
