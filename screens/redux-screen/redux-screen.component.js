import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class ReduxScreenComponent extends Component {
  render() {
    let { login, user } = this.props;
    return (
      <View>
        <Text> Redux screen </Text>
        <Text> Logins {user.logins}</Text>
        <TouchableOpacity onPress={login}>
          <Text>Add login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
