import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useHapticFeedback } from '../hooks';
import TourOverlay from './TourOverlay';

// Import pages
import HomePage from '../pages/HomePage';
import PointsPage from '../pages/PointsPage';
import ScanPage from '../pages/ScanPage';
import HistoryPage from '../pages/HistoryPage';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();

type TabConfig = {
  name: string;
  component: React.ComponentType<any>;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
  title: string;
};

const TAB_SCREENS: TabConfig[] = [
  { name: 'Home', component: HomePage, icon: 'home', title: 'Home' },
  { name: 'Points', component: PointsPage, icon: 'gift', title: 'Points' },
  { name: 'Scan', component: ScanPage, icon: 'camera', title: 'Scan' },
  {
    name: 'History',
    component: HistoryPage,
    icon: 'file-text-o',
    title: 'History',
  },
  { name: 'Settings', component: SettingsPage, icon: 'cog', title: 'Settings' },
];

function TabBarIcon(props: {
  color: string;
  name: React.ComponentProps<typeof FontAwesome>['name'];
}) {
  return <FontAwesome size={18} {...props} />;
}

export default function BottomTabNavigator() {
  const { triggerSelection } = useHapticFeedback();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {TAB_SCREENS.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) => (
                <TabBarIcon name={tab.icon} color={color} />
              ),
            }}
            listeners={{
              tabPress: triggerSelection,
            }}
          />
        ))}
      </Tab.Navigator>
      <TourOverlay />
    </NavigationContainer>
  );
}
