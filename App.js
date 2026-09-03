import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import DevicesScreen from './screens/DevicesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerStyle: { backgroundColor: '#ffffff', },
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: '800', fontSize: 20, },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#999', }}
        >

        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Smart Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
          }} />

        <Tab.Screen
          name="Devices"
          component={DevicesScreen}
          options={{
            title: 'Devices',
            tabBarLabel: 'Devices',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="hardware-chip-outline"
                size={size}
                color={color}
              />
            ),
          }} />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="settings-outline"
                size={size}
                color={color}
              />
            ),
          }} />
          
      </Tab.Navigator>
    </NavigationContainer>

  );
}