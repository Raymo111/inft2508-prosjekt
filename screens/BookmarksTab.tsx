import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarkScreen from './Result';
import BookmarksScreen from './Results';

const BookmarksStack = createNativeStackNavigator();

const BookmarksTabScreen = () => {
  return (
    <BookmarksStack.Navigator
      initialRouteName="Results"
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
      <BookmarksStack.Screen
        name="Results"
        component={BookmarksScreen}
      />
      <BookmarksStack.Screen name="Bookmarks" component={BookmarkScreen} />
    </BookmarksStack.Navigator>
  );
};

export default BookmarksTabScreen;
