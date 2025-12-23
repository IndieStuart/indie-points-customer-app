import React from 'react';
import { StyleSheet } from 'react-native';
import { useFeedback } from '../hooks';
import Button from './Button';
import CardWithIcon from './CardWithIcon';
import { COLORS } from '../constants/theme';

export default function FeedbackCard() {
  const { sendFeedback } = useFeedback();
  
  return (
    <CardWithIcon
      icon="comment"
      title="We'd love your feedback!"
      subtitle="Help us improve Indie Points"
      style={styles.blueBorder}
    >
      <Button
        label="Send Feedback"
        onPress={sendFeedback}
        variant="primary"
        accessibilityLabel="Send Feedback"
      />
    </CardWithIcon>
  );
}

const styles = StyleSheet.create({
  blueBorder: {
    borderColor: COLORS.blue,
  },
});
