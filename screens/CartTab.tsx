import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './Cart';
import React from 'react';
import SettingsScreen from './Settings';

const CartStack = createNativeStackNavigator();

const SettingsTabScreen = () => {
  return (
    <CartStack.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'white',
        },
      }}>
      <CartStack.Screen
        name="News"
        component={SettingsScreen}
      />
      <CartStack.Screen name="NewsStory" component={CartScreen} />
    </CartStack.Navigator>
  );
};

export default SettingsTabScreen;
