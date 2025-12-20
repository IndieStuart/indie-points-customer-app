import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Linking } from 'react-native';
import { ColorBar } from '../components';
import { colors, spacing, typography, borderRadius, shadows, sizes } from '../constants/theme';

interface LogoutPageProps {
  onSignInAgain?: () => void;
}

export default function LogoutPage({ onSignInAgain }: LogoutPageProps) {

  const handleSendFeedback = () => {
    // Open default mail client or feedback form
    Linking.openURL('mailto:hello@indiepoints.com?subject=Feedback for Indie Points');
  };

  const handleSignInAgain = () => {
    onSignInAgain?.();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Goodbye</Text>

        {/* Three colored bars */}
        <View style={styles.barsContainer}>
          <ColorBar color="blue" />
          <ColorBar color="yellow" />
          <ColorBar color="red" />
        </View>

        <Text style={styles.subheading}>
          Thanks for using Indie Points! We hope to see you again soon.
        </Text>
      </View>

      {/* Feedback Section */}
      <View style={styles.feedbackCard}>
        <View style={styles.feedbackHeader}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>💬</Text>
          </View>
          <View style={styles.feedbackContent}>
            <Text style={styles.feedbackTitle}>We'd love your feedback!</Text>
            <Text style={styles.feedbackSubtitle}>Help us improve Indie Points</Text>
          </View>
        </View>
        
        <Pressable 
          style={({ pressed }) => [
            styles.feedbackButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSendFeedback}
        >
          <Text style={styles.feedbackButtonText}>Send Feedback</Text>
        </Pressable>
      </View>

      {/* Sign In Again Button */}
      <Pressable 
        style={({ pressed }) => [
          styles.signInButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleSignInAgain}
      >
        <Text style={styles.signInButtonText}>Sign In Again</Text>
      </Pressable>
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
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm + spacing.xs,
    paddingTop: spacing.xxxxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.extrabold,
    color: colors.text.dark,
    marginBottom: spacing.sm + spacing.xs,
  },
  barsContainer: {
    flexDirection: 'row',
    gap: spacing.sm + spacing.xs,
    marginBottom: spacing.xl,
    alignSelf: 'stretch',
  },
  subheading: {
    fontSize: typography.fontSize.base,
    color: colors.text.medium,
    textAlign: 'center',
    marginBottom: spacing.sm + spacing.xs,
  },
  feedbackCard: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xxl,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    ...shadows.medium,
    borderWidth: 2,
    borderColor: colors.border.default,
  },
  feedbackHeader: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  iconContainer: {
    width: sizes.icon.sm,
    height: sizes.icon.sm,
    backgroundColor: colors.primary.blue,
    borderRadius: borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
    ...shadows.large,
    borderWidth: 2,
    borderColor: colors.border.dark,
  },
  iconText: {
    fontSize: typography.fontSize.xl,
  },
  feedbackContent: {
    flex: 1,
  },
  feedbackTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.dark,
    marginBottom: spacing.xs,
  },
  feedbackSubtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.medium,
  },
  feedbackButton: {
    backgroundColor: colors.primary.blue,
    height: sizes.button.height,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.large,
    borderWidth: 2,
    borderColor: colors.border.dark,
  },
  feedbackButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  signInButton: {
    backgroundColor: '#000000',
    height: sizes.button.height,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.button,
  },
  signInButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
