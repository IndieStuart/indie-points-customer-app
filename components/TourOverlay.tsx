import React, { useEffect } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { useTour } from '../hooks/useTour';
import { useColors } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import CardWithIcon from './CardWithIcon';
import Button from './Button';
import { spacing, typography } from '../constants/theme';

export default function TourOverlay() {
  const {
    isActive,
    currentStep,
    totalSteps,
    currentTourStep,
    nextStep,
  } = useTour();
  const colors = useColors();
  const navigation = useNavigation();

  useEffect(() => {
    if (isActive && currentTourStep) {
      // Navigate to the screen for the current tour step
      navigation.navigate(currentTourStep.screen as never);
    }
  }, [currentTourStep, isActive, navigation]);

  if (!isActive || !currentTourStep) {
    return null;
  }

  return (
    <Modal
      visible={isActive}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.overlay}>
        {/* Semi-transparent background */}
        <View 
          style={[
            styles.backdrop,
            { backgroundColor: 'rgba(0, 0, 0, 0.2)' }
          ]} 
        />

        {/* Tour content card positioned at bottom */}
        <View style={styles.contentContainer}>
          <CardWithIcon
            icon={currentTourStep.icon}
            title={currentTourStep.title}
            subtitle={`Step ${currentStep + 1} of ${totalSteps}`}
            variant="secondary"
          >
            <Text style={[styles.description, { color: colors.secondaryDark }]}>
              {currentTourStep.description}
            </Text>

            <Button 
              label={currentStep < totalSteps - 1 ? 'Next' : 'Finish'}
              onPress={nextStep}
              variant="secondary"
              fullWidth={true}
            />
          </CardWithIcon>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    padding: spacing.md,
  },
  description: {
    fontSize: typography.fontSizeMd,
    marginBottom: spacing.md,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
