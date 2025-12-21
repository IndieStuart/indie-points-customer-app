import { useState } from 'react';
import { Alert } from 'react-native';

interface AuthError {
  message: string;
  code?: string;
}

export const useAuthError = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthError = (err: unknown) => {
    const authError = err as AuthError;
    const errorMessage = authError?.message || 'An unexpected error occurred';
    setError(errorMessage);
    Alert.alert('Authentication Error', errorMessage);
  };

  const clearError = () => {
    setError(null);
  };

  const withLoading = async <T,>(fn: () => Promise<T>): Promise<T | undefined> => {
    try {
      setIsLoading(true);
      clearError();
      return await fn();
    } catch (err) {
      handleAuthError(err);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    clearError,
    handleAuthError,
    withLoading,
  };
};
