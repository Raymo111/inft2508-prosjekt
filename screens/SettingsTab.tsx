import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SettingsScreen from './Settings';

const SettingStack = createNativeStackNavigator();

const SettingsTabScreen = () => {
  return (
    <SettingStack.Navigator
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
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="NewsStory" component={SettingsScreen}/>
    </SettingStack.Navigator>
  );
};

export default SettingsTabScreen;
