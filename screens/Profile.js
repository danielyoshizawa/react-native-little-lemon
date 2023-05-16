import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native'

import {useState, useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

import BouncyCheckbox from "react-native-bouncy-checkbox"

export default function Porfile({navigation}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notifications, setNotifications] = useState({
    order: false,
    password: false,
    special: false,
    news : false
  })

  let orderCB: BouncyCheckbox | null = null;
  let passwordCB: BouncyCheckbox | null = null;
  let specialCB: BouncyCheckbox | null = null;
  let newsCB: BouncyCheckbox | null = null;

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@profile', jsonValue)
    } catch (e) {
      // console.err(e)
    }
  }

  useEffect(() => {
    ( async () => {
      try {
        const dt = await AsyncStorage.getItem('@profile')
        const dataObj = JSON.parse(dt)
        const ob = await AsyncStorage.getItem('@onboarding')
        const obObj = JSON.parse(ob)
        setFirstName(dataObj.firstName ? dataObj.firstName : obObj.name ? obObj.name : "")
        setLastName(dataObj.lastName ? dataObj.lastName : "")
        setEmail(dataObj.email ? dataObj.email : obObj.email ? obObj.email : "")
        setPhone(dataObj.phone ? dataObj.phone : "")
        setNotifications({...dataObj.notifications})
        orderCB.isChecked(notifications.order)
        passwordCB.isChecked(notifications.password)
        specialCB.isChecked(notifications.special)
        newsCB.isChecked(notifications.news)
      } catch (e) {
        // console.err(e)
      }
    })()
  }, [])

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
        <TextInput placeholder="First name" style={styles.input} onChangeText={(data) => setFirstName(data)} value={firstName}/>
        <Text style={styles.label}>Last Name</Text>
        <TextInput placeholder="Last name" style={styles.input} onChangeText={(data) => setLastName(data)} value={lastName}/>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" style={styles.input} onChangeText={(data) => setEmail(data)} value={email}/>
        <Text style={styles.label}>Phone number</Text>
        <TextInput placeholder="Phone number" style={styles.input} onChangeText={(data) => setPhone(data)} value={phone}/>
      </View>
      <View>
        <Text style={[styles.label, {fontSize: 14, paddingVertical: 5}]}>Email notifications</Text>
        <BouncyCheckbox text="Order Statuses" textStyle={{ textDecorationLine: 'none'}} onPress={(isChecked) => {
            setNotifications({...notifications, order: !isChecked})
          }}
          isChecked={notifications.order}
          fillColor={'#495E57'}
          disableBuiltInState
          ref={(ref) => (orderCB = ref)}
        />
        <BouncyCheckbox text="Password changes" textStyle={{ textDecorationLine: 'none'}} onPress={(isChecked) => {
            setNotifications({...notifications, password: !isChecked})
          }}
          isChecked={notifications.password}
          fillColor={'#495E57'}
          disableBuiltInState
          ref={(ref) => (passwordCB = ref)}
        />
        <BouncyCheckbox text="Special offers" textStyle={{ textDecorationLine: 'none'}} onPress={(isChecked) => {
            setNotifications({...notifications, special: !isChecked})
          }}
          isChecked={notifications.special}
          fillColor={'#495E57'}
          disableBuiltInState
          ref={(ref) => (specialCB = ref)}
        />
        <BouncyCheckbox text="Newsletters" textStyle={{ textDecorationLine: 'none'}} onPress={(isChecked) => {
            setNotifications({...notifications, news: !isChecked})
          }}
          isChecked={notifications.news}
          fillColor={'#495E57'}
          disableBuiltInState
          ref={(ref) => (newsCB = ref)}
        />
      </View>
      <Pressable style={[styles.button, {backgroundColor: '#F4CE14', color:'#333333', marginTop:20, alignItems: 'center'}]}
        onPress={() => {
          // TODO : Set isOnboardingCompleted : false and move to onboarding
        }}
      ><Text>Log out</Text></Pressable>
      <View
        style={{flexDirection: "row", alignSelf:"center"}}
      >
        <Pressable style={[styles.button, {backgroundColor: 'white'}]}
          onPress={() => {
            navigation.navigate('Home')
          }}
        ><Text>Disard changes</Text></Pressable>
        <Pressable style={[styles.button, {backgroundColor: '#495E57', color:"#EDEFEE"}]}
          onPress={() => {
            const dt = {
              firstName : firstName,
              lastName : lastName,
              email : email,
              phone : phone,
              notifications : notifications
            }

            storeData(dt)
            navigation.navigate('Home')
          }}
        ><Text>Save changes</Text></Pressable>
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
