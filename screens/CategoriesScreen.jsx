/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:28
 */

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  categoriesScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.categoriesScreen}>
      <Text>The Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          navigation.navigate('CategoryMeals');
        }}
      />
    </View>
  );
};

export default CategoriesScreen;
