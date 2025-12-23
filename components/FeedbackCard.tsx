import React from 'react';
import { useFeedback } from '../hooks';
import Button from './Button';
import CardWithIcon from './CardWithIcon';

type Variant = 'primary' | 'secondary' | 'tertiary';

interface FeedbackCardProps {
  variant: Variant;
}

export default function FeedbackCard({ variant }: FeedbackCardProps) {
  const { sendFeedback } = useFeedback();
  
  return (
    <CardWithIcon
      icon="comment"
      title="We'd love your feedback!"
      subtitle="Help us improve Indie Points"
      variant={variant}
    >
      <Button
        label="Send Feedback"
        onPress={sendFeedback}
        variant={variant}
      />
    </CardWithIcon>
  );
}
