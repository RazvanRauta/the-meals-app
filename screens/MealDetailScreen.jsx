/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const styles = StyleSheet.create({
  mealDetailScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.mealDetailScreen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons title="Favorite" HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Marked as favorite');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default MealDetailScreen;
