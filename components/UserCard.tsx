import React from 'react';
import CardWithIcon from './CardWithIcon';
import { useAuth } from '../hooks';

export default function UserCard() {
  const { session } = useAuth();
  const user = session?.user as any | undefined;

  const name =
    user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || 'Unknown user';
  const email = user?.email || '';
  const subtitle = name !== email ? email : undefined;

  return (
    <CardWithIcon
      icon="user"
      title={name}
      subtitle={subtitle}
      variant="primary"
    />
  );
}
