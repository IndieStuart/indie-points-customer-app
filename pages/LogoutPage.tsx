import React from 'react';
import { View, Text } from 'react-native';

export default function LogoutPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Logged Out</Text>
      <Text style={{ marginBottom: 20 }}>You have been successfully logged out.</Text>
      <Text>Redirecting to login...</Text>
    </View>
  );
}
