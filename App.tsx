import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import {
  AuthProvider,
  useAuth,
  ThemeProvider,
  useTheme,
  TourProvider,
} from './hooks';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import BottomTabNavigator from './components/BottomTabNavigator';

function AppContent() {
  const { session, loading } = useAuth();
  const { isDark } = useTheme();
  const [showLogoutPage, setShowLogoutPage] = useState(false);
  const [prevSession, setPrevSession] = useState(session);

  useEffect(() => {
    // Detect when user logs out (session goes from truthy to null)
    if (prevSession && !session && !loading) {
      setShowLogoutPage(true);
    }
    setPrevSession(session);
  }, [session, loading, prevSession]);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (showLogoutPage) {
    return <LogoutPage onSignInAgain={() => setShowLogoutPage(false)} />;
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <BottomTabNavigator />
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TourProvider>
          <AppContent />
        </TourProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
