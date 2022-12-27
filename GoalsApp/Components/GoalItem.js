import { StyleSheet } from "react-native";
import { Text,Pressable, View} from 'react-native';
function GoalItem(props) {
  return (
    <View style={styles.goalItem} >
        <Pressable 
    onPress={props.onDeleteItem.bind(this,props.id)}
    android_ripple={{color:"#ffffff"}}
    style={({pressed})=>pressed && styles.pressedItem}>
        
      <Text style={styles.goalText}>{props.text}</Text>
     
    </Pressable>
    </View>
    
    
  )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
       
        margin:8,
        backgroundColor:'#5e0acc',
        borderRadius:6,
     
      },
      pressedItem:{
        opacity:0.5
      },
      goalText:{
        padding:8,
        color:'white',
      }
})