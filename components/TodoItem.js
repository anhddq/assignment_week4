import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';

export default class TodoItem extends Component {
  render() {
    const {
      data:{body, status},
      onPressButton
    } = this.props;
    const buttonStyle= status ==='Active' ? styles.normalButton:styles.doneButton
    return (
      <TouchableOpacity style={buttonStyle} onPress={onPressButton}>
          <Text style ={styles.text}> {body}</Text>
      </TouchableOpacity>
    );
  }
}

const styles=StyleSheet.create({
  normalButton:{
     backgroundColor:'blue',
     borderRadius: 20,
     justifyContent:'center',
     alignItems:'center',
     paddingVertical: 8,
     marginTop:15,
     marginRight: 15,
     marginLeft:15,
  },
  doneButton:{
    backgroundColor:'green',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 8,
    marginTop:15,
    marginRight: 15,
    marginLeft:15,
 },
  text:{
    fontWeight:'bold',
    fontSize: 18,
    color: 'white',
  }
})

