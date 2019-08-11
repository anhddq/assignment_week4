import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TodoDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log(this.props.navigation);
      const {navigation} = this.props;
      const todoItem = navigation.getParam('data', '');
      const{
          status,
          body
      }= todoItem;
    return (
      <View style= {styles.container}>
      <Text style={styles.status}> {status} </Text>
        <Text style={styles.bodyText}> {body} </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',        
    },
    status:{
        fontSize: 20,
        fontWeight:'bold',
    },
    bodyText:{
        fontSize:40,
        color:'gray',
    }
})