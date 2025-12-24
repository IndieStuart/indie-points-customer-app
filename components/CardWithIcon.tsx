import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { lightTheme, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useColors } from '../hooks';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface CardWithIconProps {
  children?: React.ReactNode;
  compact?: boolean;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  showChevron?: boolean;
  subtitle?: string;
  title: string;
  transparent?: boolean;
  variant: Variant;
}

export default function CardWithIcon({
  children,
  compact = false,
  icon,
  showChevron = false,
  subtitle,
  title,
  transparent = false,
  variant,
}: CardWithIconProps) {
  const colors = useColors();
  const borderColor = (colors as any)[variant];
  const backgroundColor = transparent ? 'transparent' : (colors as any)[`${variant}Light`];
  const variantColor = (colors as any)[variant];
  const variantDark = (colors as any)[`${variant}Dark`];
  const iconColor = colors.surface;

  return (
    <View style={[compact ? styles.containerCompact : styles.container, { borderColor, backgroundColor }]}> 
      <View style={styles.row}>
        <View style={[compact ? styles.iconWrapperCompact : styles.iconWrapper, { backgroundColor: variantColor, borderColor: variantDark }]}> 
          <FontAwesome name={icon} size={compact ? 16 : 20} color={iconColor} />
        </View>
        <View style={styles.text}> 
          <Text style={[compact ? styles.titleCompact : styles.title, { color: variantDark }]}>{title}</Text>
          {subtitle ? (
            <Text style={[compact ? styles.subtitleCompact : styles.subtitle, { color: variantDark }]}>{subtitle}</Text>
          ) : null}
        </View>
        {showChevron && (
          <FontAwesome name="chevron-right" size={16} color={variantDark} style={styles.chevron} />
        )}
      </View>
      {children && <View style={compact ? styles.childrenCompact : styles.children}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  chevron: {
    marginLeft: spacing.sm,
  },
  children: {
    marginTop: spacing.md,
  },
  childrenCompact: {
    marginTop: spacing.sm,
  },
  container: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    padding: spacing.md,
    ...shadows.md,
  },
  containerCompact: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    padding: spacing.sm,
    ...shadows.md,
  },
  iconWrapper: {
    alignItems: 'center',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    height: spacing.xxxl,
    justifyContent: 'center',
    marginRight: spacing.md,
    width: spacing.xxxl,
  },
  iconWrapperCompact: {
    alignItems: 'center',
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    height: spacing.xl,
    justifyContent: 'center',
    marginRight: spacing.sm,
    width: spacing.xl,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: typography.fontSizeSm,
  },
  subtitleCompact: {
    fontSize: typography.fontSizeXs,
  },
  text: {
    flex: 1,
  },
  title: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeMd,
    fontWeight: typography.fontWeightBold as any,
    marginBottom: spacing.xs,
  },
  titleCompact: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeSm,
    fontWeight: typography.fontWeightBold as any,
    marginBottom: 2,
  },
});
