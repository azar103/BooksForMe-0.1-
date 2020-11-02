import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const BookItem = ({book: {title, url}}) => {
  return (
    <TouchableOpacity style={styles.img_container}>
      <Image
        style={styles.img_style}
        source={{
          uri: url,
        }}
      />
      <View style={styles.title_container_style}>
        <Text style={styles.title_style}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  img_container: {
    margin: 10,
  },
  img_style: {
    width: 190,
    height: 290,
    borderRadius: 25,
  },
  title_style: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  title_container_style: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    top: 205,
    backgroundColor: '#000',
    justifyContent: 'center',
    opacity: 0.7,
    padding: 10,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title_style: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: '7%',
  },
});
