import React from 'react';
import CardWithIcon from '../common/CardWithIcon';
import Button from '../common/Button';
import { useTour } from '../../hooks/useTour';

export default function TakeTourCard() {
  const { startTour } = useTour();

  return (
    <CardWithIcon
      icon="compass"
      title="Take a Tour"
      subtitle="Learn how to use Indie Points"
      variant="secondary"
    >
      <Button label="Start Tour" onPress={startTour} variant="secondary" />
    </CardWithIcon>
  );
}
