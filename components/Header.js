import { StyleSheet, View, Image } from 'react-native';

export default function Header(props) {
  return (
    <View style={props.style.header}>
      <Image
        source={require("../assets/Logo.png")}
        style={props.style.logo}
      />
    </View>
  )
}
