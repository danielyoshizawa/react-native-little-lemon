import {
  View,
  Text,
  Pressable,
  TextInput
} from 'react-native'

import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function Porfile() {
  return (
    <View>
      <Text>Personal Information</Text>
      <View>
        <Text>Avatar</Text>
        <Pressable><Text>Change</Text></Pressable>
        <Pressable><Text>Remove</Text></Pressable>
      </View>
      <TextInput placeholder="First name" />
      <TextInput placeholder="Last name" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Phone number" />
      <Text>Email notifications</Text>
      <BouncyCheckbox text="Order Statuses" textStyle={{ textDecorationLine: 'none'}} />
      <BouncyCheckbox text="Password changes" textStyle={{ textDecorationLine: 'none'}} />
      <BouncyCheckbox text="Special offers" textStyle={{ textDecorationLine: 'none'}} />
      <BouncyCheckbox text="Newsletters" textStyle={{ textDecorationLine: 'none'}} />
      <Pressable><Text>Log out</Text></Pressable>
      <View>
        <Pressable><Text>Disard changes</Text></Pressable>
        <Pressable><Text>Save changes</Text></Pressable>
      </View>
    </View>
  )
}
