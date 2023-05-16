import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native'

import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function Porfile() {
  return (
    <ScrollView>
      <Text style={{fontSize:18, marginVertical: 10, marginHorizontal: 5}}>Personal Information</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={{paddingHorizontal:10}}>Avatar</Text>
        <Pressable><Text style={[styles.button, {backgroundColor: '#495E57', color:"#EDEFEE"}]}>Change</Text></Pressable>
        <Pressable><Text style={styles.button}>Remove</Text></Pressable>
      </View>
      <View>
        <Text style={styles.label}>First Name</Text>
        <TextInput placeholder="First name" style={styles.input}/>
        <Text style={styles.label}>Last Name</Text>
        <TextInput placeholder="Last name" style={styles.input}/>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" style={styles.input}/>
        <Text style={styles.label}>Phone number</Text>
        <TextInput placeholder="Phone number" style={styles.input}/>
      </View>
      <View>
        <Text style={[styles.label, {fontSize: 14, paddingVertical: 5}]}>Email notifications</Text>
        <BouncyCheckbox text="Order Statuses" textStyle={{ textDecorationLine: 'none'}} />
        <BouncyCheckbox text="Password changes" textStyle={{ textDecorationLine: 'none'}} />
        <BouncyCheckbox text="Special offers" textStyle={{ textDecorationLine: 'none'}} />
        <BouncyCheckbox text="Newsletters" textStyle={{ textDecorationLine: 'none'}} />
      </View>
      <Pressable><Text style={[styles.button, {backgroundColor: '#F4CE14', color:'#333333', marginTop:20}]}>Log out</Text></Pressable>
      <View
        style={{flexDirection: "row", alignSelf:"center"}}
      >
        <Pressable><Text style={[styles.button, {backgroundColor: 'white'}]}>Disard changes</Text></Pressable>
        <Pressable><Text style={[styles.button, {backgroundColor: '#495E57', color:"#EDEFEE"}]}>Save changes</Text></Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#495E57",
    padding:10,
    margin:10,
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
