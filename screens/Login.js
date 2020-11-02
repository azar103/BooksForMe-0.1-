import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.login_label_style}>Login </Text>
      <View style={styles.form_container_style}>
        <View style={styles.form_group_style}>
          <Text style={styles.label_style}>Email</Text>
          <TextInput style={styles.input_style} />
        </View>

        <View style={styles.form_group_style}>
          <Text style={styles.label_style}>Password</Text>
          <TextInput style={styles.input_style} secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
          style={[styles.btn_container, styles.btn_container_login]}>
          <Text style={styles.btn_text_style}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.forgot_password_style}
        onPress={() => navigation.navigate('Forgot')}>
        Forgot your password ?
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F0',
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  login_label_style: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  form_container_style: {
    marginTop: 60,
  },
  form_group_style: {
    marginHorizontal: 5,
    marginTop: 20,
  },
  input_style: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    backgroundColor: 'red',
    backgroundColor: '#F6F5F0',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  btn_container: {
    marginTop: 15,
    marginHorizontal: 3,
    borderRadius: 25,
    height: 50,
    width: 370,
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
    alignItems: 'center',
  },
  btn_text_style_signup: {
    color: '#8E7C7A',
    fontWeight: 'bold',
  },
  btn_text_style: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  forgot_password_style: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
  label_style: {
    color: 'gray',
  },
});
