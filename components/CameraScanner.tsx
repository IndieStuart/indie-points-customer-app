import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';
import { borderRadius, spacing } from '../constants/theme';

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
      <View style={styles.scannerWrapper}>
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    aspectRatio: 1,
    width: '100%',
  },
  container: {
    alignItems: 'center',
  },
  scannerWrapper: {
    borderColor: '#000',
    borderRadius: borderRadius.lg,
    borderWidth: 4,
    overflow: 'hidden',
    width: '100%',
  },
});
