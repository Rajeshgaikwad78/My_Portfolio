import { StyleSheet } from "react-native";
import {useState} from 'react';
import {  View,Button,Modal, TextInput,Image } from 'react-native';
function GoalInput(props) {
    const [enterdGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enterdText){
      setEnteredGoalText(enterdText)
  
    }
  function addGoalHandler(){
    props.onAddGoal(enterdGoalText);
    setEnteredGoalText('')
  }

   
  return (
    <Modal visible={props.visible} animationType="slide">
         <View style={styles.inputContainer}>
         <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
      <TextInput style={styles.textInput} placeholder='Your course goal !' 
      value={enterdGoalText}
        onChangeText={goalInputHandler}
      />
      <View style={styles.buttonContainer}> 
      <View style={styles.button}>
      <Button title='Add goal' onPress={addGoalHandler} color="#5e0acc"/>
      </View> 
      <View style={styles.button}>
      <Button title="cancel" onPress={props.onCancel} color="#f31282"/>
      </View>    
    
    
     </View>
    </View>
     </Modal>
   
  )
}
export default GoalInput;

const styles= StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding:16,
    backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput:{
    borderColor:'#ffffff',
    backgroundColor:'#ffffff',
    borderRadius:3,
    borderWidth:1,
    width:'90%',
    padding:8,
    marginRight:8
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:16
  },
  button:{
    width:'30%',
    marginHorizontal:8
  }
})