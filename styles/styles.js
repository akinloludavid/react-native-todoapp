import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    backgroundColor: 'whitesmoke',
    padding: '20px',
    margin: '40px'
  },
  header:{
    height:80,
    paddingTop: 38,
    backgroundColor:'coral'
  }, 
  title:{
  marginLeft:'20px',
  color:'#fff',
  fontSize:20,
  fontWeight:'bold'
  }, 
  item:{
    padding: 16, 
    marginTop:16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle:'dashed',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  
  input:{
    marginBottom: 10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:3,
    borderBottomColor:'#ddd'
  },
  addtodo:{
  
    paddingHorizontal:40,
    marginTop:20
  }
})