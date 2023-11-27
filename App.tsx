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
            if (route.name === 'Thumbnail') {
              iconName = 'grid-view';
            } else if (route.name === 'Bookmarks') {
              iconName = 'favorite';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Cart') {
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
        <Tab.Screen name="Thumbnail" component={HomeTabScreen} />
        <Tab.Screen name="Bookmarks" component={BookmarksTabScreen} />
        <Tab.Screen name="Settings" component={SettingsTabScreen} />
        <Tab.Screen name="Cart" component={CartTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inft2508App;
