import { Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
  const { goal } = props

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteGoal.bind(this, goal.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    padding: 8,
    color: '#fff'
  },
  pressedItem: {
    opacity: 0.5,
  }
})

export default GoalItem