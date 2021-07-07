/*
 * @author: Razvan Rauta
 * Date: 15.02.2020
 * Time: 13:33
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

export default ListItem;
