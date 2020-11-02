import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = () => {
  return (
    <View style={styles.btn_container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.btn_text_style, styles.btn_text_style_signup]}>
        <Text style={styles.btn_text_style}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
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
