import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorBar } from './ColorBar';
import Flex from './Flex';
import { spacing, typography, lightTheme } from '../../constants/theme';

interface PageHeaderProps {
  onBack?: () => void;
  subtitle?: string;
  title: string;
}

export default function PageHeader({
  onBack,
  subtitle,
  title,
}: PageHeaderProps) {
  return (
    <View style={styles.container}>
      {onBack && (
        <Pressable
          testID="back-button"
          onPress={onBack}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={20} />
        </Pressable>
      )}
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
  backButton: {
    left: 0,
    padding: spacing.sm,
    position: 'absolute',
    top: 0,
  },
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
