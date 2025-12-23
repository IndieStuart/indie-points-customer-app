import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './';
import { SPACING, COLORS, TYPOGRAPHY } from '../constants/theme';

interface CameraPermissionRequestProps {
  onRequestPermission: () => void;
}

export default function CameraPermissionRequest({ onRequestPermission }: CameraPermissionRequestProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We need your permission to use the camera
      </Text>
      <Button onPress={onRequestPermission} variant="primary" label='Grant Permission' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.xl,
    alignItems: 'center',
    gap: SPACING.lg,
  },
  text: {
    ...TYPOGRAPHY.body,
    color: COLORS.gray,
    textAlign: 'center',
  },
});
