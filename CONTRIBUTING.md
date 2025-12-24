# Contribution Guide for AI Coding Agents

This guide documents the conventions, patterns, and best practices used in the Indie Points Customer App codebase. Follow these guidelines to ensure consistency and maintainability.

## Technology Stack

- **Framework**: React Native with Expo (v53)
- **Language**: TypeScript 5.8+ with strict mode enabled
- **Navigation**: React Navigation (Bottom Tabs)
- **Authentication**: Supabase with Apple Sign-In
- **State Management**: React Context API
- **Runtime**: React 19.0.0, React Native 0.79.3

## Project Structure

```
/
├── components/     # Reusable UI components
├── pages/          # Screen-level components
├── hooks/          # Custom React hooks
├── constants/      # Theme tokens and constants
├── lib/            # External service clients
├── assets/         # Static assets (images, fonts)
├── App.tsx         # Root component
└── index.ts        # Entry point
```

## File Naming Conventions

### Components

- **Format**: PascalCase (e.g., `Button.tsx`, `PageContainer.tsx`)
- **Export**: Use `export default` for the main component
- **Location**: `/components` for reusable, `/pages` for screens

### Hooks

- **Format**: camelCase with `use` prefix (e.g., `useAuth.tsx`, `useTheme.tsx`)
- **Export**: Named exports for hooks and providers
- **Location**: `/hooks` directory

### Constants

- **Format**: camelCase for files (e.g., `theme.ts`)
- **Export**: Named exports in UPPER_CASE (e.g., `COLORS`, `SPACING`)
- **Location**: `/constants` directory

### Pages

- **Format**: PascalCase with `Page` suffix (e.g., `HomePage.tsx`, `LoginPage.tsx`)
- **Export**: Use `export default`
- **Location**: `/pages` directory

## Code Style and Patterns

### Import Organization

1. External libraries (React, React Native)
2. Expo packages
3. Third-party libraries
4. Internal hooks and contexts
5. Internal components
6. Constants and utilities

**Example:**

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useAuth, useTheme } from '../hooks';
import { Button, PageContainer } from '../components';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';
```

### Export Patterns

#### Barrel Exports (index.ts files)

- **Components**: Both default and named exports

  ```typescript
  export { Card } from './Card';
  export { default as Button } from './Button';
  ```

- **Hooks**: Named exports only
  ```typescript
  export { useFeedback } from './useFeedback';
  export { AuthProvider, useAuth } from './useAuth';
  ```

#### Component Files

- Use `export default` for the main component
- Named exports for TypeScript interfaces/types are optional
- Place interface definitions above the component

### TypeScript Guidelines

1. **Strict Mode**: Always enabled (`"strict": true`)
2. **Interfaces**: Define props interfaces with the `Props` suffix

   ```tsx
   interface ButtonProps {
     label: string;
     onPress: () => void;
     variant?: 'primary' | 'black';
   }
   ```

3. **Type Imports**: Use `type` keyword for type-only imports

   ```typescript
   import { type ColorVariant } from '../constants/theme';
   ```

4. **Const Assertions**: Use `as const` for constant objects

   ```typescript
   export const COLORS = {
     black: '#000',
     blue: '#3182CE',
   } as const;
   ```

5. **Type Inference**: Leverage TypeScript's inference; avoid redundant type annotations

### Component Patterns

#### Functional Components

- Use arrow functions for components
- Define props interface before the component
- Use destructuring in function parameters

**Example:**

```tsx
interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
```

#### StyleSheet Convention

- Define styles at the bottom of the file using `StyleSheet.create()`
- Reference theme constants instead of hardcoding values
- Use inline styles only for dynamic values

**Example:**

```tsx
const styles = StyleSheet.create({
  container: {
    ...CARD_STYLES.container,
    padding: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.h3,
    color: COLORS.black,
  },
});
```

### Theme System

#### Color Usage

- **Never hardcode colors** - always use `COLORS` or `COLOR_VARIANTS` from theme
- **Dynamic theming**: Use `useColors()` hook for light/dark mode support
  ```tsx
  const colors = useColors();
  const backgroundColor = colors.background;
  ```

#### Spacing

- Use `SPACING` constants (xs, sm, md, lg, xl, xxl)
- Values range from 4px to 32px

#### Typography

- Use `TYPOGRAPHY` constants (h1, h2, h3, body, caption, etc.)
- Spread typography styles: `...TYPOGRAPHY.h3`

#### Border Radius

- Use `BORDER_RADIUS` constants (sm, md, lg)
- Values: 6px, 8px, 12px

#### Card Styles

- Use `CARD_STYLES.container` for card containers
- Use `CARD_STYLES.iconBox` for icon wrappers with shadows

### Context and Hooks Patterns

#### Context Creation

```tsx
interface ThemeContextType {
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Implementation
  return (
    <ThemeContext.Provider value={{ isDark }}>{children}</ThemeContext.Provider>
  );
}
```

#### Hook Creation

```tsx
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

**Critical**: Always validate context is defined and throw descriptive errors

### Provider Nesting Order

In `App.tsx`, nest providers from outermost to innermost:

```tsx
<ThemeProvider>
  <AuthProvider>
    <AppContent />
  </AuthProvider>
</ThemeProvider>
```

### Page Component Structure

1. Import statements
2. Component definition with hooks at the top
3. Return JSX wrapped in `<PageContainer>`
4. Use `<PageHeader>` for title/subtitle

**CRITICAL: Page components should NEVER contain StyleSheet definitions or inline styles.**

- All styling belongs in reusable components (in `/components`)
- Pages are for composition only, not styling
- If you need custom styling, create a new component

**Example:**

```tsx
export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader title="Page Title" subtitle="Page description" />
      {/* Page content - use styled components, no styles here */}
    </PageContainer>
  );
}
```

### Error Handling

1. **Try-catch blocks**: Use for async operations
2. **Graceful degradation**: Silent failures for non-critical features (e.g., haptics)
   ```typescript
   try {
     await Haptics.selectionAsync();
   } catch (error) {
     console.debug('Haptic feedback not available:', error);
   }
   ```
3. **User-facing errors**: Display with `<ErrorMessage>` component
4. **Auth errors**: Handle with dedicated `useAuthError` hook

### Accessibility

1. Add `accessibilityLabel` to interactive components
2. Add `accessibilityRole` to buttons, links, etc.
3. Provide fallback labels when needed

**Example:**

```tsx
<Pressable
  accessibilityLabel={accessibilityLabel || label}
  accessibilityRole="button"
>
  <Text>{label}</Text>
</Pressable>
```

### State Management

1. **Local state**: `useState` for component-level state
2. **Shared state**: Context API with custom hooks
3. **Session state**: Managed by `AuthProvider`
4. **Loading states**: Always provide loading indicators
   ```tsx
   if (loading) {
     return <ActivityIndicator size="large" />;
   }
   ```

### Environment Variables

- Use Expo's environment variable system
- Prefix with `EXPO_PUBLIC_` for client-side variables
- Access via `process.env.EXPO_PUBLIC_VARIABLE_NAME`
- Provide empty string fallback: `process.env.EXPO_PUBLIC_VAR || ''`

### Component Props Guidelines

1. **Required vs Optional**: Mark optional with `?`
2. **Default values**: Provide in function parameters
   ```tsx
   function Button({ variant = 'primary' }: ButtonProps);
   ```
3. **Variants**: Use union types for limited options
   ```typescript
   variant?: 'primary' | 'black';
   ```

### Layout Components

#### Flex Component

- Unified layout component for rows and columns
- Use `direction="row"` for horizontal layouts
- Use `direction="column"` for vertical layouts (default)
- Use `gap` prop for spacing between children
- Use `columns` with `direction="row"` for multi-column layouts

**Example:**

```tsx
<Flex direction="row">
  <PointsSummaryCard />
  <PointsSummaryCard />
</Flex>
```

### Reusable Component Design

1. **Single Responsibility**: Each component does one thing well
2. **Composition over Configuration**: Favor composable components
3. **Props over State**: Keep components stateless when possible
4. **Consistent API**: Similar components should have similar props

### Documentation

1. **JSDoc comments**: Add for complex functions or non-obvious behavior

   ```tsx
   /**
    * Hook that returns the current color scheme based on system theme
    */
   export function useColors() {
     // ...
   }
   ```

2. **Inline comments**: Explain why, not what
3. **TODO comments**: Use sparingly and include context

### Testing Considerations

- Components should be pure and testable
- Avoid side effects in render
- Mock Supabase and Expo modules in tests
- Isolate business logic in hooks

## Common Patterns

### Conditional Rendering

```tsx
if (loading) {
  return <ActivityIndicator />;
}

if (!session) {
  return <LoginPage />;
}

return <MainContent />;
```

### Effect Hook for Auth State

```tsx
useEffect(() => {
  // Get initial session
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
    setLoading(false);
  });

  // Listen for auth changes
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}, []);
```

### Style Composition

```tsx
<View style={[styles.base, isActive && styles.active]} />
<Text style={[styles.text, { color: dynamicColor }]} />
```

## Anti-Patterns to Avoid

1. ❌ Hardcoding colors, spacing, or typography
2. ❌ Inline styles for static values
3. ❌ StyleSheet or inline styles in page components (pages are for composition only)
4. ❌ Default exports without naming the function
5. ❌ Mutating props or state
6. ❌ Deep component nesting (> 3 levels)
7. ❌ Logic in JSX (extract to variables/functions)
8. ❌ Unused imports
9. ❌ Any type usage (use specific types)

## Best Practices

1. ✅ Use TypeScript strict mode
2. ✅ Leverage theme constants
3. ✅ Create reusable components
4. ✅ Use Context for cross-cutting concerns
5. ✅ Implement proper error boundaries
6. ✅ Add accessibility labels
7. ✅ Clean up side effects (unsubscribe, clear timers)
8. ✅ Use meaningful variable names
9. ✅ Keep components focused and small
10. ✅ Follow the existing code style

## Scripts

- `npm start` - Start Expo dev server (with cache clear)
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

## Version Control

- Use meaningful commit messages
- Keep commits focused and atomic
- Follow conventional commits format (optional but recommended)

## Summary

When contributing to this codebase:

1. Match the existing TypeScript/React Native patterns
2. Use the theme system for all styling values
3. Follow the established file structure and naming
4. Create reusable, composable components
5. Implement proper error handling and loading states
6. Add accessibility support
7. Document complex logic with JSDoc comments
8. Test your changes on iOS, Android, and Web where applicable

This codebase values **consistency**, **type safety**, **reusability**, and **accessibility**. When in doubt, look at existing similar components and follow their patterns.
