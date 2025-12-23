import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { CameraView } from 'expo-camera';
import { SPACING, BORDER_RADIUS, COLORS, CARD_STYLES } from '../constants/theme';

interface CameraScannerProps {
  onScan?: (data: string) => void;
}

export default function CameraScanner({ onScan }: CameraScannerProps) {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    
    if (onScan) {
      onScan(data);
    } else {
      Alert.alert(
        'QR Code Scanned',
        `Data: ${data}`,
        [{ text: 'OK', onPress: () => setScanned(false) }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CARD_STYLES.container,
    borderColor: COLORS.black,
    gap: 8,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    height: 300,
    padding: 0,
  },
  camera: {
    flex: 1,
  },
});
