import * as Haptics from 'expo-haptics';

export const useHapticFeedback = () => {
  const triggerSelection = async () => {
    try {
      await Haptics.selectionAsync();
    } catch (error) {
      // Silently fail if haptics not supported
      console.debug('Haptic feedback not available:', error);
    }
  };

  const triggerImpact = async (
    style: Haptics.ImpactFeedbackStyle = Haptics.ImpactFeedbackStyle.Medium,
  ) => {
    try {
      await Haptics.impactAsync(style);
    } catch (error) {
      console.debug('Haptic feedback not available:', error);
    }
  };

  const triggerNotification = async (
    type: Haptics.NotificationFeedbackType = Haptics.NotificationFeedbackType
      .Success,
  ) => {
    try {
      await Haptics.notificationAsync(type);
    } catch (error) {
      console.debug('Haptic feedback not available:', error);
    }
  };

  return {
    triggerSelection,
    triggerImpact,
    triggerNotification,
  };
};
