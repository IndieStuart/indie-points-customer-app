import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

// Import pages
import HomePage from '../pages/HomePage';
import PointsPage from '../pages/PointsPage';
import ScanPage from '../pages/ScanPage';
import HistoryPage from '../pages/HistoryPage';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const iconMap: { [key: string]: string } = {
    Home: '⌂',
    Points: '★',
    Scan: '⊕',
    History: '☰',
    Settings: '⚙',
  };

  return (
    <View>
      <Text>
        {iconMap[name] || '•'}
      </Text>
    </View>
  );
};

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name={route.name} />
          ),
          headerShown: false,
        })}
      >
        <Tab.Screen component={HomePage} name="Home" />
        <Tab.Screen component={PointsPage} name="Points" />
        <Tab.Screen component={ScanPage} name="Scan" />
        <Tab.Screen component={HistoryPage} name="History" />
        <Tab.Screen component={SettingsPage} name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
