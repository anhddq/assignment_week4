import React, {Component} from 'react';
import { ScrollView, StyleSheet,View,Text, TextInput,Button, KeyboardAvoidingView} from 'react-native';
import {TODOS} from '../constants/ToDos';
import TodoItem from '../components/TodoItem';

export default class AllScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList : TODOS,
      inputText: ''
    };
  }

  onChange = text => {
    this.setState({
      inputText: text
    });
  };

  onSuibmit = () =>{
    const {todoList} = this.state;
    const newTodoItem = {
      id: todoList.length + 1,      
      status: 'Active',
      body: this.state.inputText,
      
    };
    const newTodoList =[...todoList,newTodoItem];
    this.setState({
      todoList: newTodoList,
      inputText: '',
    })
  }

  onPressTodoItem = id =>{
    const {todoList} = this.state;
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState(
      {
        todoList: newTodoList
      }, 
      () => {
        setTimeout(() =>{
          this.props.navigation.navigate('TodoDetail',{data: todo});
        }, 1000);
      }
    );
  }
  render() {
    const {todoList, inputText} =this.state; 
    return  <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={styles.keyboarAvoidding}
    >
      <ScrollView style={styles.container}>
        {
          todoList.map(item =>{
            return(
              <TodoItem data={item}
              onPressButton={() =>this.onPressTodoItem(item.id)}/>
            )
          })
        }
        <TextInput 
          style={styles.input} 
          onChangeText={this.onChange}
          value={inputText}
          placeholder="add some action"
        />
        <Button title='Suibmit' onPress={this.onSuibmit} style={styles.suibmitButton}/>
      </ScrollView>    
    </KeyboardAvoidingView>    
  }
}

AllScreen.navigationOptions = {
  title: 'To Do List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor: 'grey',
    marginVertical: 15,
    marginRight:10,
    marginLeft:10,
    borderRadius: 12,    
  },
  suibmitButton:{

  },
  keyboarAvoidding:{
    flex: 1,
    justifyContent: 'space-between',
  }
});
