import React from 'react'
import { Text, View, Screen } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './error-screen.styles'

const errorScreenComponent = ({ params }) => (
  <View style={styles.container}>
    <Text style={styles.message}>This is an error screen</Text>
  </View>
)

export default errorScreenComponent
