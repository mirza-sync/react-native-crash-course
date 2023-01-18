import { Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
  const { goal } = props

  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, goal.index)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.item}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#fff'
  },
})

export default GoalItem