/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  mealDetailScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const MealDetailScreen = () => {
  return (
    <View style={styles.mealDetailScreen}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
};

export default MealDetailScreen;
