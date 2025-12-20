/**
 * Design System Tokens
 * Centralized theme configuration for scalable styling
 */

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    blue: '#3182CE',
    yellow: '#D69E2E',
    red: '#E53E3E',
  },

  // Background Colors
  background: {
    primary: '#FAFAFA',
    card: '#FFFFFF',
  },

  // Text Colors
  text: {
    dark: '#1A202C',
    medium: '#4A5568',
    light: '#718096',
  },

  // Error/Alert Colors
  error: {
    background: '#FFF5F5',
    border: '#FEB2B2',
    text: '#E53E3E',
  },

  // Border Colors
  border: {
    default: 'rgba(0, 0, 0, 0.08)',
    dark: 'rgba(0, 0, 0, 0.12)',
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(255, 255, 255, 0.2)',
  },
};

// Spacing Scale (consistent increments)
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
};

// Typography
export const typography = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 15,
    base: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 42,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeight: {
    tight: 18,
    normal: 22,
    relaxed: 28,
  },
};

// Border Radius
export const borderRadius = {
  sm: 6,
  md: 12,
  lg: 14,
  xl: 16,
  xxl: 20,
};

// Shadows (platform-specific)
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
};

// Common Sizes
export const sizes = {
  icon: {
    sm: 48,
    md: 68,
    lg: 80,
  },
  button: {
    height: 58,
  },
  bar: {
    height: 14,
  },
};
