/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:34
 */

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const styles = StyleSheet.create({
  filtersScreens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const FiltersScreens = () => {
  return (
    <View style={styles.filtersScreens}>
      <Text>Category Meals Screen</Text>
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
    )
  };
};

export default FiltersScreens;
