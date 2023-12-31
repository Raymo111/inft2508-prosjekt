import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Home';
import FiltersScreen from './Filters';
import ItemScreen from './Item';
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Pressable} from "react-native";
import I18n from "../localization/I18n";

const HomeStack = createNativeStackNavigator();

const HomeTabScreen = ({navigation}: { navigation: any }) => {
  const handleFiltersPress = () => {
    navigation.navigate('Filters');
  };
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
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
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <Pressable onPress={handleFiltersPress}><MaterialIcons name="menu" size={24} color="grey"/></Pressable>,
          headerTitle: I18n.t('Home'),
        })}
      />
      <HomeStack.Screen name='Filters' component={FiltersScreen}
      options={() => ({
        headerTitle: I18n.t('Filters'),
      })}/>
      <HomeStack.Screen name='Item' component={ItemScreen}/>
    </HomeStack.Navigator>
  );
};

export default HomeTabScreen;
