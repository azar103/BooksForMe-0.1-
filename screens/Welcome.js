import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.img_style}
        source={require('../assets/books_welcome.jpg')}
      />
      <Text style={styles.title_style}>Begin your journey</Text>
      <Text style={styles.description_style}>
        Enjoy the world's best book. save your favorite book or buy it
      </Text>
      <View style={styles.btn_group_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Login')}
          style={[styles.btn_container, styles.btn_container_login]}>
          <Text style={styles.btn_text_style}>Login</Text>
        </TouchableOpacity>
        <View style={styles.btn_container}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Signup')}
            style={[styles.btn_text_style, styles.btn_text_style_signup]}>
            <Text style={styles.btn_text_style}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={styles.terms_service_style}
        onPress={() => navigation.navigate('Terms')}>
        Terms of service
      </Text>
    </View>
  );
};

export default Button;

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
  terms_service_style: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});
