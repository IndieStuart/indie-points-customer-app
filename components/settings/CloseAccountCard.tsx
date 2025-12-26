import React from 'react';
import { useAlert } from '../../hooks/useAlert';
import CardWithIcon from '../common/CardWithIcon';
import Button from '../common/Button';
import { useCloseAccount } from '../../hooks/useCloseAccount';

export default function CloseAccountCard() {
  const { closeAccount } = useCloseAccount();
  const { alert } = useAlert();

  const handleCloseAccount = () => {
    alert(
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
          onPress: closeAccount,
        },
      ],
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
