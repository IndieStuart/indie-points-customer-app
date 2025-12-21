import { Linking } from 'react-native';

const FEEDBACK_EMAIL = 'hello@indiepoints.com';
const FEEDBACK_SUBJECT = 'Feedback for Indie Points';

export const useFeedback = () => {
  const sendFeedback = async () => {
    try {
      const mailto = `mailto:${FEEDBACK_EMAIL}?subject=${FEEDBACK_SUBJECT}`;
      await Linking.openURL(mailto);
    } catch (error) {
      console.error('Failed to open email client:', error);
    }
  };

  return { sendFeedback };
};
