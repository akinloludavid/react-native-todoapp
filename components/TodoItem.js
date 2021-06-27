import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/styles';
import {MaterialIcons} from '@expo/vector-icons'
const TodoItem = ({item, pressHandler}) =>{
  return (
    <TouchableOpacity>
      <View style = {styles.item} >
        <Text >{item.text}</Text>
        <MaterialIcons 
         onPress = {
           () => pressHandler(item.key)
         }
        style = {styles.text} 
        name = 'delete' 
        size={18} 
        color='#333'/>
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem