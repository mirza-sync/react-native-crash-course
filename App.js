import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalIntput';
import GoalItem from './components/GoalItem';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export default function App() {
  const [goals, setGoals] = useState([])

  function addGoalHandler(goal) {
    setGoals(currentGoals => [...currentGoals, {id: uuidv4(), text: goal}])
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== id))
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem goal={itemData.item} onDeleteGoal={deleteGoalHandler} />
          }}
          keyExtractor={itemData => itemData.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
