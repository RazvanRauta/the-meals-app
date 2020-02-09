/*
 * @author: Razvan Rauta
 * Date: 09.02.2020
 * Time: 22:50
 */

import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

const renderMealItem = (itemData, navigation) => {
  return (
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
  );
};

const MealList = ({ displayMeals, navigation }) => {
  return (
    <View style={styles.mealList}>
      <FlatList data={displayMeals} renderItem={itemData => renderMealItem(itemData, navigation)} />
    </View>
  );
};

export default MealList;
