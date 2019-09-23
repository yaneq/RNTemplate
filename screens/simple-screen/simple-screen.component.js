import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// export default SimpleScreen = ({color, onPress}) => ( // unNamed
export const SimpleScreenComponent = (
  {color, changeColor}, // Named
) => (
  <View>
    <TouchableOpacity
      onPress={changeColor}
      style={{borderColor: 'red', borderWidth: 1}}>
      <Text style={{color: color}}>{color}</Text>
    </TouchableOpacity>
  </View>
);
