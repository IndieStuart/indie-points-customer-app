/**
 * Design System Tokens
 * Centralized theme configuration for scalable styling
 */

// Color Palette - Light Mode
export const lightColors = {
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

// Color Palette - Dark Mode
export const darkColors = {
  // Primary Colors
  primary: {
    blue: '#63B3ED',
    yellow: '#ECC94B',
    red: '#FC8181',
  },

  // Background Colors
  background: {
    primary: '#1A202C',
    card: '#2D3748',
  },

  // Text Colors
  text: {
    dark: '#F7FAFC',
    medium: '#CBD5E0',
    light: '#A0AEC0',
  },

  // Error/Alert Colors
  error: {
    background: '#742A2A',
    border: '#FC8181',
    text: '#FEB2B2',
  },

  // Border Colors
  border: {
    default: 'rgba(255, 255, 255, 0.12)',
    dark: 'rgba(255, 255, 255, 0.18)',
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(255, 255, 255, 0.15)',
  },
};

// Default export for backward compatibility
export const colors = lightColors;

// Spacing Scale
export const spacing = {
  sm: 4,    // Small - tight spacing
  md: 12,   // Medium - standard gaps/margins
  lg: 20,   // Large - section spacing
  xl: 40,   // Extra Large - top padding
};

// Typography
export const typography = {
  fontSize: {
    sm: 14,   // Small text
    md: 16,   // Body text
    lg: 20,   // Subheadings
    xl: 24,   // Headings
    xxl: 36,  // Page titles
  },
  fontWeight: {
    normal: '400' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeight: {
    sm: 18,
    md: 22,
    lg: 28,
  },
};

// Border Radius
export const borderRadius = {
  sm: 6,    // Small - bars, chips
  md: 14,   // Medium - buttons
  lg: 16,   // Large - icons
  xl: 20,   // Extra Large - cards
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
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
    height: 48,
  },
  bar: {
    height: 12,
  },
};

// Helper Functions
export const getIconColor = (color: 'blue' | 'yellow' | 'red', isDark: boolean = false): string => {
  const colorScheme = isDark ? darkColors : lightColors;
  switch (color) {
    case 'blue':
      return colorScheme.primary.blue;
    case 'yellow':
      return colorScheme.primary.yellow;
    case 'red':
      return colorScheme.primary.red;
  }
};

export const getColors = (isDark: boolean) => isDark ? darkColors : lightColors;

/**
 * Get icon color using the colors object directly
 */
export const getIconColorFromScheme = (color: 'blue' | 'yellow' | 'red', colors: typeof lightColors): string => {
  switch (color) {
    case 'blue':
      return colors.primary.blue;
    case 'yellow':
      return colors.primary.yellow;
    case 'red':
      return colors.primary.red;
  }
};
