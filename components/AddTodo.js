import React, {useState}from 'react';
import { Text, Button, TextInput, View , TouchableOpacity} from 'react-native'
import { styles } from '../styles/styles';


const AddTodo = ({addTodos}) =>{
  const [todo, setTodo] = useState('')
  const changeHandler = (val) =>{
    setTodo(val)
    
  }
 
  
  return (
    <View style = {styles.addtodo}>
      <TextInput
        style = {styles.input}
       onChangeText = {changeHandler}/>
      <TouchableOpacity>
        <Button title="Add Todo" 
        onPress = {()=>addTodos(todo)}/>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo;