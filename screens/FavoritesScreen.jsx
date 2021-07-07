/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:33
 */

import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList navigation={navigation} displayMeals={favMeals} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your favorites',
    headerLeft: () => (
      <HeaderButtons title="Fav Menu" HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Fav Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
