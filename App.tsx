import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import LogoutPage from './pages/LogoutPage';

function AppContent() {
  const { session, loading } = useAuth();
  const [showLogoutPage, setShowLogoutPage] = useState(false);
  const [prevSession, setPrevSession] = useState(session);

  useEffect(() => {
    // Detect when user logs out (session goes from truthy to null)
    if (prevSession && !session && !loading) {
      setShowLogoutPage(true);
      // Redirect to login after 2 seconds
      const timer = setTimeout(() => {
        setShowLogoutPage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    setPrevSession(session);
  }, [session, loading, prevSession]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (showLogoutPage) {
    return <LogoutPage />;
  }

  if (!session) {
    return <LoginPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
