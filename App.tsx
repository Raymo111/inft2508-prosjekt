import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeTabScreen from './screens/HomeTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BookmarksTabScreen from './screens/BookmarksTab';
import SettingsTabScreen from './screens/SettingsTab';
import CartTabScreen from './screens/CartTab';

const Tab = createBottomTabNavigator();

const Inft2508App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = 'grid-view';
            } else if (route.name === 'BookmarksTab') {
              iconName = 'favorite';
            } else if (route.name === 'SettingsTab') {
              iconName = 'settings';
            } else if (route.name === 'CartTab') {
                iconName = 'shopping-cart';
            } else {
              iconName = 'help';
            }
            return (
              <MaterialIcons
                name={iconName}
                size={28}
                color={focused ? 'white' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#222',
          },
        })}>
        <Tab.Screen name="HomeTab" component={HomeTabScreen} />
        <Tab.Screen name="BookmarksTab" component={BookmarksTabScreen} />
        <Tab.Screen name="SettingsTab" component={SettingsTabScreen} />
        <Tab.Screen name="CartTab" component={CartTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inft2508App;
