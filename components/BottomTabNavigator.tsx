import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Haptics from 'expo-haptics';

// Import pages
import HomePage from '../pages/HomePage';
import PointsPage from '../pages/PointsPage';
import ScanPage from '../pages/ScanPage';
import HistoryPage from '../pages/HistoryPage';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Tab.Screen
          component={HomePage}
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
          listeners={{
            tabPress: () => {
              Haptics.selectionAsync();
            },
          }}
        />
        <Tab.Screen
          component={PointsPage}
          name="Points"
          options={{
            title: 'Points',
            tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          }}
          listeners={{
            tabPress: () => {
              Haptics.selectionAsync();
            },
          }}
        />
        <Tab.Screen
          component={ScanPage}
          name="Scan"
          options={{
            title: 'Scan',
            tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
          }}
          listeners={{
            tabPress: () => {
              Haptics.selectionAsync();
            },
          }}
        />
        <Tab.Screen
          component={HistoryPage}
          name="History"
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <TabBarIcon name="file-text-o" color={color} />,
          }}
          listeners={{
            tabPress: () => {
              Haptics.selectionAsync();
            },
          }}
        />
        <Tab.Screen
          component={SettingsPage}
          name="Settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          }}
          listeners={{
            tabPress: () => {
              Haptics.selectionAsync();
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
