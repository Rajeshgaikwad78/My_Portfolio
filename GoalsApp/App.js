import { useState } from 'react';
import { StyleSheet, View, Button,FlatList} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible]= useState(false)

  function addGoalHandler(enterdGoalText) {
    setCourseGoals((currentGoals) =>
      [...currentGoals,
      { text: enterdGoalText, id: Math.random().toString() }
      ])

      endAddGoalHandler();
  }

  function startAddGoalHandler(){
    setModelIsVisible(true)
  }

  function endAddGoalHandler(){
    setModelIsVisible(false)
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentGoals)=>{
      return currentGoals.filter((goal)=> goal.id !== id)
    })
  }
  return (
   <>
     <StatusBar style='light' />
    <View style={styles.appContainer}>
    <Button title='Add new goal! ' onPress={startAddGoalHandler}/>
      <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}
            id={itemData.item.id} 
            onDeleteItem={deleteGoalHandler}/>
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return (item.id)
          }}

        />


      </View>


    </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    padding: 16,
    backgroundColor:'#1e0a5a'
  },
  goalsContainer: {
    flex: 5
  }

});