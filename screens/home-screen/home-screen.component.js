import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Button } from '../../components/button/button.component'
// import { MainNavigator } from '../../navigation/screens'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Simple')}>
          <Text>Open simple screen 2</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
