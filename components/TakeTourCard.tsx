import React from 'react';
import { Alert } from 'react-native';
import CardWithIcon from './CardWithIcon';
import Button from './Button';

export default function TakeTourCard() {
  const handleTakeTour = () => {
    Alert.alert('Coming Soon', 'The tour feature is coming soon!');
  };

  return (
    <CardWithIcon
      icon="compass"
      title="Take a Tour"
      subtitle="Learn how to use Indie Points"
      variant="secondary"
    >
      <Button 
        label="Start Tour"
        onPress={handleTakeTour}
        variant="secondary"
      />
    </CardWithIcon>
  );
}
