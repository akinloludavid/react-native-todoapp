import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {styles} from '../styles/styles'
export const Header = () =>{
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>My Todos</Text>
    </View>
  )
}
