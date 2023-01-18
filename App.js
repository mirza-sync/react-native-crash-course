import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalIntput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([])

  function addGoalHandler(goal) {
    setGoals(currentGoals => [...currentGoals, goal])
  }

  function deleteGoalHandler(index) {
    setGoals(currentGoals => currentGoals.filter(goal => goal.index !== index))
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem goal={itemData} onDeleteGoal={deleteGoalHandler} />
          }}
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
