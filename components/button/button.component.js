import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import buttonStyles from './button.styles';

export const Button = ({onPress, children, disabled}) =>
  disabled ? (
    <View style={[buttonStyles.container, buttonStyles.disabled]}>
      {children}
    </View>
  ) : (
    <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
      <Text>This is text</Text>
    </TouchableOpacity>
  );
