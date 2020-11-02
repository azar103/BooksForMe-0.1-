import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Terms = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.service_container}>
        <Text style={styles.title_style}>Terms Of Service</Text>
        <ScrollView style={styles.scrollview}>
          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>

          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>

          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>

          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>

          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>
          <Text style={styles.paragraph_style}>
            Cupidatat consequat occaecat nisi cillum esse consectetur id ad
            deserunt aute. Non commodo aliqua dolore occaecat id do laboris
            incididunt ea excepteur non eiusmod sint. Est mollit sint cillum
            elit proident cillum amet sit nostrud dolore proident. Enim ex
            labore velit consequat irure excepteur cupidatat et. Velit aliquip
            laborum deserunt excepteur aute Lorem.
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.btn_style}
        onPress={() => navigation.goBack()}>
        <Text style={styles.btn_text_style}>I understand</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
  },
  title_style: {
    fontSize: 20,
  },
  paragraph_style: {
    marginTop: 20,
  },
  scrollview: {
    paddingVertical: 20,
    height: 300,
  },
  btn_text_style: {
    color: '#FFF',
  },
  btn_style: {
    backgroundColor: '#8E7C7A',
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 15,
    marginTop: 100,
    marginBottom: 10,
  },
  service_container: {
    flex: 3,
  },
});
