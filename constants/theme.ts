// theme.ts
export const lightTheme = {
  colors: {
    primary: '#3182CE',
    primaryLight: '#BEE3F8',
    primaryDark: '#2C5282',
    secondary: '#D69E2E',
    secondaryLight: '#FEEBC8',
    secondaryDark: '#744210',
    tertiary: '#E53E3E',
    tertiaryLight: '#FED7D7',
    tertiaryDark: '#742A2A',
    error: '#E53E3E',
    errorLight: '#FED7D7',
    errorDark: '#742A2A',
    success: '#38A169',
    successLight: '#C6F6D5',
    successDark: '#22543D',
    warning: '#D69E2E',
    warningLight: '#FEEBC8',
    warningDark: '#744210',
    background: '#FFFFFF',
    surface: '#F7FAFC',
    text: '#1A202C',
    textSecondary: '#4A5568',
    textTertiary: '#718096',
    border: '#E2E8F0',
    borderLight: '#F7FAFC',
  },
};

export const darkTheme = {
  colors: {
    primary: '#63B3ED',
    primaryLight: '#90CDF4',
    primaryDark: '#2C5282',
    secondary: '#F6AD55',
    secondaryLight: '#FBD38D',
    secondaryDark: '#744210',
    tertiary: '#FC8181',
    tertiaryLight: '#F687B3',
    tertiaryDark: '#742A2A',
    error: '#FC8181',
    errorLight: '#F687B3',
    errorDark: '#742A2A',
    success: '#68D391',
    successLight: '#9AE6B4',
    successDark: '#22543D',
    warning: '#F6AD55',
    warningLight: '#FBD38D',
    warningDark: '#744210',
    background: '#111827',
    surface: '#1F2937',
    text: '#F7FAFC',
    textSecondary: '#D1D5DB',
    textTertiary: '#9CA3AF',
    border: '#374151',
    borderLight: '#4B5563',
  },
};

export type Theme = typeof lightTheme;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 56,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const typography = {
  fontSizeXs: 12,
  fontSizeSm: 14,
  fontSizeMd: 16,
  fontSizeLg: 18,
  fontSizeXl: 20,
  fontSizeXxl: 24,
  fontSizeTitle: 32,
  fontWeightLight: '300',
  fontWeightNormal: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
};

export const shadows = {
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};
