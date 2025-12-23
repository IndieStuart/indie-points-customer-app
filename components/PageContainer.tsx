import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { spacing, lightTheme } from '../constants/theme';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: lightTheme.colors.surface,
    gap: spacing.md,
    minHeight: '100%',
    padding: spacing.md,
  },
});
