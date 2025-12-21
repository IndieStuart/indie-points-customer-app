import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, Linking } from 'react-native';
import { spacing, borderRadius, shadows, typography } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

export default function FeedbackCard() {
  const colors = useColors();
  const handleSendFeedback = () => {
    Linking.openURL('mailto:hello@indiepoints.com?subject=Feedback for Indie Points');
  };
  return (
    <View style={[
      styles.card,
      {
        backgroundColor: colors.background.card,
        borderColor: colors.primary.blue,
      }
    ]}>
      <View style={styles.header}>
        <View style={[
          styles.iconContainer,
          {
            backgroundColor: colors.primary.blue,
            borderColor: colors.border.dark,
          }
        ]}>
          <Text style={styles.iconText}>💬</Text>
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, { color: colors.text.dark }]}>
            We'd love your feedback!
          </Text>
          <Text style={[styles.subtitle, { color: colors.text.medium }]}>
            Help us improve Indie Points
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors.primary.blue,
            borderColor: colors.border.dark,
          }
        ]}
        onPress={handleSendFeedback}
      >
        <Text style={[styles.buttonText, { color: colors.background.card }]}>
          Send Feedback
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadows.md,
    borderWidth: 2,
    marginBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    ...shadows.lg,
    borderWidth: 2,
  },
  iconText: {
    fontSize: 36,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
  },
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
  },
});
