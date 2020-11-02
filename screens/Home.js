import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-get-random-values';
import data from '../helpers/data';
import BookItem from '../components/BookItem';
const listTab = [{status: 'All'}, {status: 'Drame'}, {status: 'Romantic'}];
import {filterBooksByTitle} from '../helpers/functions';
const Home = () => {
  const [status, setStatus] = useState('All');
  const [filteredBooks, setFilteredBooks] = useState(data);
  const [loading, setLoading] = useState(false);
  const changeStatus = (tab) => {
    if (tab.status !== 'All') {
      setFilteredBooks([...data.filter((e) => e.category === tab.status)]);
    } else {
      setFilteredBooks(data);
    }
    setStatus(tab.status);
  };
  const onChangeText = (text) => {
    setLoading(true);
    const dataFiltered = data.filter((el) => {
      if (el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        setLoading(false);
        return el;
      }
    });
    if (text.toString().length > 0) {
      setFilteredBooks(dataFiltered);
    } else {
      setLoading(false);
      setFilteredBooks(data);
    }
  };
  return (
    <View>
      <Text style={styles.home_title_style}>What would you read ?</Text>
      <Icon style={styles.icon_style} name="search" size={20} color="#A4A3A0" />
      <TextInput
        style={styles.input_style}
        placeholder="title, genre, author"
        onChangeText={(text) => onChangeText(text)}
      />
      <View style={styles.listTab}>
        {listTab.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.btn_tab,
              status === tab.status && styles.btnTabActive,
            ]}
            onPress={() => changeStatus(tab)}>
            <Text
              style={[
                styles.btnTitle,
                status === tab.status && styles.btnTitleActive,
              ]}>
              {tab.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.list_title}>Most Recent</Text>

      <FlatList
        data={filteredBooks}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <BookItem book={item} />}
      />
      <View style={styles.loading_style}>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home_title_style: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10,
  },
  input_style: {
    marginHorizontal: 10,
    height: 60,
    borderRadius: 15,
    marginTop: 40,
    borderWidth: 1,
    paddingLeft: 70,
    position: 'relative',
  },
  icon_style: {
    position: 'absolute',
    top: 135,
    left: 30,
  },
  listTab: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 15,
  },

  btn_tab: {
    padding: 10,
  },
  btnTabActive: {
    borderWidth: 2,
    borderColor: '#00F',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  btnTitleActive: {
    fontWeight: 'bold',
  },
  btnTitle: {
    fontSize: 20,
  },
  list_title: {
    fontSize: 25,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 15,
  },
  view_container: {
    margin: 5,
  },
  loading_style: {
    position: 'absolute',
    top: 500,
    left: 90,
    height: 0,
  },
});
