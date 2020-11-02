import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Terms from '../screens/Terms';
import bottomTabNavigator from '../Navigation/bottomNavigator';

import Forgot from '../screens/Forgot';
const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#f6f5f0',
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
              elevation: 0,
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={bottomTabNavigator}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#f6f5f0',
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
              elevation: 0,
              shadowColor: 'transparent',
            },
          }}
        />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#f6f5f0',
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
              elevation: 0,
              shadowColor: 'transparent',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
