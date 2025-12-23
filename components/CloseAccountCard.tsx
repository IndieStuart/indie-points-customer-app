import React from 'react';
import { Alert } from 'react-native';
import CardWithIcon from './CardWithIcon';
import Button from './Button';

export default function CloseAccountCard() {
  const handleCloseAccount = () => {
    Alert.alert(
      'Close Account',
      'This action is irreversible. Are you sure you want to close your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Close Account',
          style: 'destructive',
          onPress: () => {
            // TODO: Implement account closure
            Alert.alert('Coming Soon', 'Account closure feature is coming soon!');
          },
        },
      ]
    );
  };

  return (
    <CardWithIcon
      icon="warning"
      title="Close Account"
      subtitle="Permanently delete your account, lose all your points and rewards, and erase all data forever"
      variant="tertiary"
    >
      <Button 
        label="Close Account"
        onPress={handleCloseAccount}
        variant="tertiary"
      />
    </CardWithIcon>
  );
}
