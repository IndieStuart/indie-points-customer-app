import { useCallback } from 'react';
import { useAlert } from './useAlert';
import { useAuth } from '.';

import { useFetch } from './useFetch';

export function useCloseAccount() {
  const { session, signOut } = useAuth();

  const { alert } = useAlert();
  const fetcher = useFetch();
  const closeAccount = useCallback(async () => {
    if (!session) {
      alert('Error', 'You must be signed in to close your account.');
      return;
    }

    try {
      const res = await fetcher(
        `${
          process.env.EXPO_PUBLIC_SUPABASE_URL || ''
        }/functions/v1/api_v1_customers_profile_delete`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to delete account');
      }

      alert('Account Closed', 'Your account has been permanently deleted.');
      await signOut();
    } catch (err: any) {
      console.error(err);
      alert('Error', err.message || 'Failed to close account.');
    }
  }, [session, signOut, alert, fetcher]);

  return { closeAccount };
}
