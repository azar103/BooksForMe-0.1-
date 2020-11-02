import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllBooks from '../screens/AllBooks';
import DramaticBooks from '../screens/DramaticBooks';
import React from 'react';
import RomanticBooks from '../screens/RomanticBooks';
import {NavigationContainer} from '@react-navigation/native';
import Header from '../components/Header';
const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1BA1F3',
      }}>
      <Tab.Screen name="Header" component={Header} />
    </Tab.Navigator>
  );
}

export default TopNavigator;
