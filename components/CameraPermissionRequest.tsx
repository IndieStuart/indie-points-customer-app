import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './';

interface CameraPermissionRequestProps {
  onRequestPermission: () => void;
}

export default function CameraPermissionRequest({ onRequestPermission }: CameraPermissionRequestProps) {
  return (
    <View>
      <Text>
        We need your permission to use the camera
      </Text>
      <Button onPress={onRequestPermission} variant="primary" label='Grant Permission' />
    </View>
  );
}
