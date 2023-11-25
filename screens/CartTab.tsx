import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsStoryScreen from './NewsStory';
import React from 'react';
import SettingsScreen from './News';

const NewsStack = createNativeStackNavigator();

const SettingsTabScreen = () => {
  return (
    <NewsStack.Navigator
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
      <NewsStack.Screen
        name="News"
        component={SettingsScreen}
      />
      <NewsStack.Screen name="NewsStory" component={NewsStoryScreen} />
    </NewsStack.Navigator>
  );
};

export default SettingsTabScreen;
