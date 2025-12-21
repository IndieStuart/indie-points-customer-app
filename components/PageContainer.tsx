import React from 'react';
import { ScrollView, View, StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  const colors = useColors();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={[styles.scrollView, { backgroundColor: colors.background.primary }]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    paddingTop: spacing.xl,
  },
});
