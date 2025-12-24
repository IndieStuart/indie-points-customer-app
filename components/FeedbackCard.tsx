import React from 'react';
import { useFeedback } from '../hooks';
import Button from './Button';
import CardWithIcon from './CardWithIcon';

export default function FeedbackCard() {
  const { sendFeedback } = useFeedback();

  return (
    <CardWithIcon
      icon="comment"
      title="We'd love your feedback!"
      subtitle="Help us improve Indie Points"
      variant="primary"
    >
      <Button label="Send Feedback" onPress={sendFeedback} variant="primary" />
    </CardWithIcon>
  );
}
