/*
 * @author: Razvan Rauta
 * Date: 02.02.2020
 * Time: 16:28
 */

import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={itemData => <CategoryGridTile itemData={itemData} navigation={navigation} />}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
