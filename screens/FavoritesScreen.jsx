/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  favoritesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const FavoritesScreen = () => {
  return (
    <View style={styles.favoritesScreen}>
      {' '}
      <Text>Favorites Screen</Text>
    </View>
  );
};

export default FavoritesScreen;
