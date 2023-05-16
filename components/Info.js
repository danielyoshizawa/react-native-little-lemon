import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable
} from 'react-native';

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <Pressable style={styles.button}>
        <Text>Next</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    marginVertical: 10,
    marginHorizontal: 3
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#495E57",
    backgroundColor: '#F4CE14',
    color: '#495E57',
    padding:10,
    margin:10,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "black",
    minHeight: 35,
    marginVertical:5,
    marginHorizontal:3,
    paddingHorizontal: 8
  },
  label: {
    fontSize: 10,
    marginHorizontal: 3,
  }
})
