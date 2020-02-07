/*
 * @author: Razvan Rauta
 * Date: 07.02.2020
 * Time: 23:16
 */

import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
      background={TouchableNativeFeedback.Ripple('#fff', false)}
      buttonWrapperStyle={{ flex: 1 }}
    />
  );
};

export default CustomHeaderButton;
