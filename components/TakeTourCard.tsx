import React from 'react';
import CardWithIcon from './CardWithIcon';
import Button from './Button';
import { useTour } from '../hooks/useTour';

export default function TakeTourCard() {
  const { startTour } = useTour();

  return (
    <CardWithIcon
      icon="compass"
      title="Take a Tour"
      subtitle="Learn how to use Indie Points"
      variant="secondary"
    >
      <Button 
        label="Start Tour"
        onPress={startTour}
        variant="secondary"
      />
    </CardWithIcon>
  );
}
