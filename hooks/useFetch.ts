import { useCallback } from 'react';

export function useFetch(customFetch?: typeof fetch) {
  const fetcher = useCallback(
    (...args: Parameters<typeof fetch>) => {
      return (customFetch || fetch)(...args);
    },
    [customFetch],
  );

  return fetcher;
}
