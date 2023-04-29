import { StyleSheet, View, Image } from 'react-native';

export default function Header() {
  return (
    <View>
      <Image
        source={require("../assets/Logo.png")}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 65,
    resizeMode: 'contain'
  }
})
