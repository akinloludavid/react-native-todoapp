import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Header} from './components/Header'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {styles} from './styles/styles' 
export default function App() {
  const [todos, setTodos] = useState ([
    {text:"launch the design", key:'1'},
    {text:"create the app", key:'2'},
    {text:"deploy the app", key:'3'},
  ])

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const addTodos = (text) =>{
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [

          ...prevTodos,
          {
            text,
            key: String(todos.length + 1)
          }
        ]
      })
    }
    else{
      Alert.alert('Omase oo', 'Todos must be 3 chars long', [
        {text:'Understood', onPress:()=>console.log('alert closed')}
      ])
    }
    
  }
  return (
    <View style={styles.container}>
      <Header/>
      <AddTodo todos ={todos} addTodos ={addTodos}/>
      <View style = {styles.content}>

        <View style = {styles.list}>
          <FlatList
            data = {todos}
            renderItem={({item})=>(
              <TodoItem item ={item} pressHandler ={pressHandler}/>
            )}
          />
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

