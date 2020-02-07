/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:34
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  filtersScreens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const FiltersScreens = () => {
  return (
    <View style={styles.filtersScreens}>
      <Text>Category Meals Screen</Text>
    </View>
  );
};

export default FiltersScreens;
