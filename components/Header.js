import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.tabContainer}>
      <View>
        <Text>All</Text>
      </View>
      <View>
        <Text>Drame</Text>
      </View>
      <View>
        <Text>Romance</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#f6f5f0',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    height: '20%',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
  },
});
