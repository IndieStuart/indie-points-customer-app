import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../constants/theme';
import { useColors } from '../contexts/ThemeContext';

// Import pages
import HomePage from '../pages/HomePage';
import PointsPage from '../pages/PointsPage';
import ScanPage from '../pages/ScanPage';
import HistoryPage from '../pages/HistoryPage';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

// Simple icon component using text
const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const colors = useColors();

  const iconMap: { [key: string]: string } = {
    Home: '⌂',
    Points: '★',
    Scan: '⊕',
    History: '☰',
    Settings: '⚙',
  };

  return (
    <View style={styles.iconContainer}>
      <Text style={[
        styles.iconText,
        { color: focused ? colors.primary.blue : colors.text.light }
      ]}>
        {iconMap[name] || '•'}
      </Text>
    </View>
  );
};

export default function BottomTabNavigator() {
  const colors = useColors();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon name={route.name} focused={focused} />
          ),
          tabBarActiveTintColor: colors.primary.blue,
          tabBarInactiveTintColor: colors.text.light,
          tabBarStyle: {
            backgroundColor: colors.background.card,
            borderTopWidth: 1,
            borderTopColor: colors.border.default,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Points" component={PointsPage} />
        <Tab.Screen name="Scan" component={ScanPage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: typography.fontSize.sm - 2,
    fontWeight: typography.fontWeight.semibold,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
  },
});
