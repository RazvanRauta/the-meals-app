/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:34
 */

import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import FiltersSwitch from '../components/FiltersSwitch';

const styles = StyleSheet.create({
  filtersScreens: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

const FiltersScreens = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.filtersScreens}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FiltersSwitch label="Gluten-Free" onChange={setIsGlutenFree} value={isGlutenFree} />
      <FiltersSwitch label="Lactose-Free" onChange={setIsLactoseFree} value={isLactoseFree} />
      <FiltersSwitch label="Vegan" onChange={setIsVegan} value={isVegan} />
      <FiltersSwitch label="Vegetarian" onChange={setIsVegetarian} value={isVegetarian} />
    </View>
  );
};

FiltersScreens.navigationOptions = navData => {
  return {
    headerTitle: 'Filtered Meals',
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
    ),
    headerRight: () => (
      <HeaderButtons title="Save" HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    )
  };
};

export default FiltersScreens;
