import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/main/HomeScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack Navigator
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
    </Stack.Navigator>
  );
};

// Profile Stack Navigator
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

// Settings Stack Navigator
const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E1E8ED',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: '#7F8C8D',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            // You can replace this with an icon component
            <div style={{ 
              width: size, 
              height: size, 
              backgroundColor: color, 
              borderRadius: size/4 
            }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            // You can replace this with an icon component
            <div style={{ 
              width: size, 
              height: size, 
              backgroundColor: color, 
              borderRadius: size/2 
            }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            // You can replace this with an icon component
            <div style={{ 
              width: size, 
              height: size, 
              backgroundColor: color, 
              borderRadius: 2 
            }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;