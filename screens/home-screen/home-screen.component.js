import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Button } from '../../components/button/button.component'
import { commonStyles } from '../../common/styles/common.style'
// import { MainNavigator } from '../../navigation/screens'

export const HomeScreenComponent = ({ navigation }) => (
  <View style={commonStyles.container}>
    <TouchableOpacity
      style={commonStyles.button}
      onPress={() => navigation.navigate('SimpleScreen')}
    >
      <Text>Open simple screen</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={commonStyles.button}
      onPress={() => navigation.navigate('ReduxScreen')}
    >
      <Text>Open redux screen</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={commonStyles.button}
      onPress={() => navigation.navigate('SagasScreen')}
    >
      <Text>Open sagas screen</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={commonStyles.button}
      onPress={() => navigation.navigate('ErrorScreen')}
    >
      <Text>Open Error (via navigate)</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={commonStyles.button}
      onPress={() => navigation.navigate('BuggyScreen')}
    >
      <Text>Buggy Screen</Text>
    </TouchableOpacity>
  </View>
)
