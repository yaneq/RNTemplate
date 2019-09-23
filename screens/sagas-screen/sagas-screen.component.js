import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class SagasScreenComponent extends Component {
  render() {
    console.log('props', this.props)
    let { loadQuestion, trivia } = this.props;
    return (
      <View>
        <Text> Sagas screen </Text>
        <Text> Question {trivia.loading}</Text>
        <TouchableOpacity onPress={loadQuestion}>
          <Text>Get new question</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
