import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface EmptyStateProps {
  description: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  title: string;
}

export default function EmptyState({ description, icon, title }: EmptyStateProps) {
  return (
    <View>
      <FontAwesome name={icon} size={64} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
