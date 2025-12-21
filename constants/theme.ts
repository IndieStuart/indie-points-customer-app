// Theme tokens for colors, spacing, and typography used across components

export const COLORS = {
	black: '#000',
	blue: '#3182CE',
	yellow: '#D69E2E',
	red: '#E53E3E',
	background: '#F5F5F5',
	border: '#CCCCCC',
	muted: '#666',
	gray: 'gray',
	white: '#FFFFFF',
} as const;

export type ColorVariant = keyof Omit<typeof COLORS, 'black' | 'background' | 'border' | 'muted' | 'gray' | 'white'>;

export const COLOR_VARIANTS = {
	blue: COLORS.blue,
	yellow: COLORS.yellow,
	red: COLORS.red,
} as const;

export const SPACING = {
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 20,
	xxl: 32,
} as const;

export const BORDER_RADIUS = {
	sm: 6,
	md: 8,
	lg: 12,
} as const;

export const CARD_STYLES = {
	container: {
		backgroundColor: COLORS.background,
		borderColor: COLORS.border,
		borderRadius: BORDER_RADIUS.lg,
		borderWidth: 2,
		elevation: 6,
		padding: SPACING.lg,
		shadowColor: COLORS.black,
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.18,
		shadowRadius: 10,
	} as const,
	iconBox: {
		elevation: 3,
		shadowColor: COLORS.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.12,
		shadowRadius: 4,
	} as const,
};

export const TYPOGRAPHY = {
	h1: {
		fontSize: 48,
		fontWeight: 'bold',
	},
	h2: {
		fontSize: 20,
		fontWeight: 'normal',
	},
	h3: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	body: {
		fontSize: 16,
		fontWeight: '600',
	},
	bodyMedium: {
		fontSize: 16,
	},
	caption: {
		fontSize: 14,
	},
	captionMuted: {
		fontSize: 14,
		color: COLORS.muted,
	},
} as const;

export const lightColors = {
	background: COLORS.background,
	text: COLORS.black,
	border: COLORS.border,
	primary: COLORS.blue,
	muted: COLORS.muted,
};

export const darkColors = {
	background: '#000000',
	text: COLORS.white,
	border: '#222222',
	primary: COLORS.blue,
	muted: '#999999',
};
