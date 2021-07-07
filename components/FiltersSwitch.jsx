/*
 * @author: Razvan Rauta
 * Date: 15.02.2020
 * Time: 15:15
 */

import React from 'react';
import { Text, Switch, Platform, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

const FiltersSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.switch}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={value}
        onValueChange={newValue => onChange(newValue)}
      />
    </View>
  );
};

export default FiltersSwitch;
