import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { commonStyles } from '../../common/styles/common.style'

export const BuggyScreenComponent = () => (
  <View style={commonStyles.container}>
    <TouchableOpacity
      onPress={() => {
        // TASK 4: catch this error and show error screen via saga
        throw 'uh oh'
      }}
      style={commonStyles.button}
    >
      <Text>Risky Click</Text>
    </TouchableOpacity>
  </View>
)
