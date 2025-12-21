import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

export default function FeedbackCard() {
  const handleSendFeedback = () => {
    Linking.openURL('mailto:hello@indiepoints.com?subject=Feedback for Indie Points');
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>💬</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>We'd love your feedback!</Text>
          <Text style={styles.subtitle}>Help us improve Indie Points</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSendFeedback}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Send Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 2,
    elevation: 6,
    marginVertical: 12,
    padding: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  content: {
    flex: 1,
  },
  icon: {
    fontSize: 20,
  },
  iconBox: {
    alignItems: 'center',
    elevation: 3,
    justifyContent: 'center',
    marginRight: 12,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    width: 48,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
