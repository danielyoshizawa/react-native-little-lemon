import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from 'react-native';

export default function Header(props) {
  return (
    <View style={props.style.header}>
      <Image
        source={require("../assets/Logo.png")}
        style={props.style.logo}
      />
      <View
        style={{marginHorizontal: 20}}
      >
        <Pressable
          onPress={() => {
            props.navigation.navigate('Profile')
          }}
        >
          <Text>Profile</Text>
        </Pressable>
      </View>
    </View>
  )
}
