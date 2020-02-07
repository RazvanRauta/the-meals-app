/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const styles = StyleSheet.create({
  categoryMealsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  return (
    <View style={styles.categoryMealsScreen}>
      <FlatList
        data={displayMeals}
        renderItem={itemData => (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
              navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: itemData.item.id
                }
              });
            }}
          />
        )}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCat.title
  };
};

export default CategoryMealsScreen;
