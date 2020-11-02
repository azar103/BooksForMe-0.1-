/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import Navigation from './Navigation/Navigation';
import Welcome from './screens/Welcome';

const App = () => {
  return <Navigation />;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
  },
  title_style: {
    color: '#1F2C3C',
    fontSize: 30,
    marginTop: 40,
  },
  img_style: {
    width: 340,
    height: 340,
    marginTop: 40,
  },
  description_style: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    marginHorizontal: 28,
  },
  btn_group_container: {
    marginTop: 60,
  },
  btn_container: {
    marginTop: 5,
    marginHorizontal: 10,
    borderRadius: 25,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn_container_login: {
    backgroundColor: '#8E7C7A',
  },
  btn_text_style_signup: {
    color: '#8E7C7A',
    fontWeight: 'bold',
  },
  btn_text_style: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default App;
