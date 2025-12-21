import React from 'react';
import { View, Text } from 'react-native';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
