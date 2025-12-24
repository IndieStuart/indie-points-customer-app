import React from 'react';
import CardWithIcon from './CardWithIcon';
import Button from './Button';
import { useAuth } from '../hooks';

export default function UserCard() {
  const { session, signOut } = useAuth();
  const user = session?.user as any | undefined;

  const email = user?.email || 'Unknown user';
  const signUpDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined;

  return (
    <CardWithIcon
      icon="user"
      title={email}
      subtitle={signUpDate ? `Member since ${signUpDate}` : undefined}
      variant="primary"
    >
      <Button label="Sign Out" onPress={signOut} variant="primary" />
    </CardWithIcon>
  );
}
