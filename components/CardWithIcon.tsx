import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { lightTheme, spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useColors } from '../hooks';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface CardWithIconProps {
  children?: React.ReactNode;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  subtitle?: string;
  title: string;
  variant: Variant;
}

export default function CardWithIcon({
  title,
  subtitle,
  icon,
  children,
  variant,
}: CardWithIconProps) {
  const colors = useColors();
  const borderColor = (colors as any)[variant];
  const backgroundColor = (colors as any)[`${variant}Light`];
  const variantColor = (colors as any)[variant];
  const variantDark = (colors as any)[`${variant}Dark`];
  const iconColor = colors.surface;

  return (
    <View style={[styles.container, { borderColor, backgroundColor }]}> 
      <View style={styles.row}>
        <View style={[styles.iconWrapper, { backgroundColor: variantColor, borderColor: variantDark }]}> 
          <FontAwesome name={icon} size={20} color={iconColor} />
        </View>
        <View style={styles.text}> 
          <Text style={[styles.title, { color: variantDark }]}>{title}</Text>
          {subtitle ? (
            <Text style={[styles.subtitle, { color: variantDark }]}>{subtitle}</Text>
          ) : null}
        </View>
      </View>
      {children && <View style={styles.children}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  children: {
    marginTop: spacing.md,
  },
  container: {
    backgroundColor: lightTheme.colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    padding: spacing.md,
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
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: lightTheme.colors.textSecondary,
    fontSize: typography.fontSizeSm,
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
});
