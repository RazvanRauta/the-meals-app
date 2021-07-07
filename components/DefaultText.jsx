/*
 * @author: Razvan Rauta
 * Date: 15.02.2020
 * Time: 12:11
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'open-sans'
  }
});

const DefaultText = ({ children }) => {
  return <Text style={styles.defaultText}>{children}</Text>;
};

export default DefaultText;
