import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import randomColors from './simple-screen.handlers'

const randomColor = randomColors();

export default class SimpleScreen extends Component {

  constructor(props) {
    super(props);
      this.state = {
        color: randomColor.next().value,
    };
  }
  
    _updateColor() {
      let nextColor = randomColor.next()
      console.log( nextColor );
      this.setState({ color: nextColor.value }) 
    }

  render() {

    return (
      <View>
        <TouchableOpacity onPress={ () => this._updateColor() } style={{ borderColor: 'red', borderWidth: 1 }} >
          <Text style={{color: this.state.color}} >{this.state.color}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
