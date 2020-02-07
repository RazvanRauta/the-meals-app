/*
 * @author: Razvan Rauta
 * Date: 07.02.2020
 * Time: 22:17
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const styles = StyleSheet.create({
  categoryGridTile: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

const CategoryGridTile = ({ itemData, navigation }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.categoryGridTile}>
      <TouchableCmp
        style={{ flex: 1 }}
        onPress={() =>
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          })
        }
      >
        <View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};
export default CategoryGridTile;
