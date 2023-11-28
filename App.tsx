import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeTabScreen from './screens/HomeTab';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BookmarksTabScreen from './screens/BookmarksTab';
import SettingsTabScreen from './screens/SettingsTab';
import CartTabScreen from './screens/CartTab';
import I18n from "./localization/I18n";
import {Styles} from "./components/Styles";

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
                color={focused ? Styles.s.colors.secondary : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: Styles.s.colors.secondary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: Styles.s.colors.primary,
          },
        })}>
        <Tab.Screen name="Thumbnail" component={HomeTabScreen} options={{title: I18n.t('Thumbnail')}} />
        <Tab.Screen name="Bookmarks" component={BookmarksTabScreen} options={{title: I18n.t('Bookmarks')}} />
        <Tab.Screen name="Settings" component={SettingsTabScreen} options={{title: I18n.t('Settings')}} />
        <Tab.Screen name="Cart" component={CartTabScreen} options={{title: I18n.t('Cart')}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Inft2508App;
