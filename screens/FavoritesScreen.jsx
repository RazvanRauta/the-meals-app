/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList navigation={navigation} displayMeals={favMeals} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your favorites'
};

export default FavoritesScreen;
