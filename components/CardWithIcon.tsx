import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS, CARD_STYLES, BORDER_RADIUS, SPACING, TYPOGRAPHY } from '../constants/theme';

interface CardWithIconProps {
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  iconColor?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'bordered';
}

/**
 * A card component with an icon, title, subtitle, and optional children.
 * Used as the base for FeedbackCard and InfoCard.
 */
export default function CardWithIcon({ 
  icon,
  iconColor = COLORS.blue,
  title, 
  subtitle, 
  children,
  style,
  variant = 'default',
}: CardWithIconProps) {
  const containerStyle = variant === 'bordered' 
    ? styles.containerBordered 
    : styles.container;

  return (
    <View style={[containerStyle, style]}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <FontAwesome name={icon} size={20} color={iconColor} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CARD_STYLES.container,
    marginVertical: SPACING.md,
    padding: SPACING.md,
    gap: SPACING.md,
  },
  containerBordered: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    padding: SPACING.lg,
    marginVertical: SPACING.sm,
    gap: SPACING.md,
  },
  children: {
    width: '100%',
  },
  content: {
    flex: 1,
  },
  iconBox: {
    ...CARD_STYLES.iconBox,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
    width: 48,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    ...TYPOGRAPHY.captionMuted,
  },
  title: {
    ...TYPOGRAPHY.h3,
  },
});
