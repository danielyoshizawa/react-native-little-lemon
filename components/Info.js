import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function Info() {
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <Pressable>
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black'
  }
})
