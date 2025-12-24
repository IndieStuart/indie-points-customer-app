import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { AuthProvider, ThemeProvider, TourProvider } from '../hooks';

/**
 * Custom render function that wraps components with all app providers
 * Use this instead of the default render from @testing-library/react-native
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider>
        <AuthProvider>
          <TourProvider>{children}</TourProvider>
        </AuthProvider>
      </ThemeProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-export everything from React Native Testing Library
export * from '@testing-library/react-native';
