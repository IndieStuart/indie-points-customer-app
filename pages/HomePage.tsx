import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const { session, signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home</Text>
      <Text style={{ marginBottom: 20 }}>
        Welcome! You are logged in.
      </Text>
      {session?.user?.email && (
        <Text style={{ marginBottom: 20 }}>Email: {session.user.email}</Text>
      )}
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
