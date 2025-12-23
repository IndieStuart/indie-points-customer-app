import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ColorBar } from './ColorBar';
import Flex from './Flex';
import { spacing, typography, lightTheme } from '../constants/theme';

interface PageHeaderProps {
  subtitle?: string;
  title: string;
}

export default function PageHeader({ 
  subtitle,
  title,
}: PageHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Flex direction="row" columns={3} gap={8} style={styles.colorBars}>
        <ColorBar variant="primary" />
        <ColorBar variant="secondary" />
        <ColorBar variant="tertiary" />
      </Flex>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  colorBars: {
    marginBottom: spacing.md,
  },
  container: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  subtitle: {
    color: lightTheme.colors.textSecondary,
    fontSize: typography.fontSizeLg,
    textAlign: 'center',
  },
  title: {
    color: lightTheme.colors.text,
    fontSize: typography.fontSizeTitle,
    fontWeight: typography.fontWeightBold as any,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
});
