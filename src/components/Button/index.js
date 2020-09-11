import React, {Component} from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import Styles from './styles';
import colors from '../../utils/color';

export default ({
  containerStyle = {},
  label = '',
  textStyle = {},
  onPress,
  disabled = false,
  loader = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        Styles.buttonView,
        containerStyle,
        {backgroundColor: disabled ? colors.lightgray : colors.themeColor},
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.6}>
      {loader ? (
        <ActivityIndicator
          style={[Styles.buttonLabel, textStyle]}
          color={'white'}
        />
      ) : (
        <Text style={[Styles.buttonLabel, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
