/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  categoryMealsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View style={styles.categoryMealsScreen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;
