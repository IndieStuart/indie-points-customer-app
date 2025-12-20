import React from 'react';
import { ScrollView, View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing } from '../constants/theme';

interface PageContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function PageContainer({ children, style }: PageContainerProps) {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, style]}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    paddingTop: spacing.xl,
  },
});
