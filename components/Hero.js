import { StyleSheet, Text, View, Image } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Little Lemon
        </Text>
        <Text>
          Chicago
        </Text>
        <Text>
          We are a family owned{'\n'}
          Mediterranean restaurant,{'\n'}
          focused on traditional{'\n'}
          recipes served with a{'\n'}
          modern twist.
        </Text>
      </View>
      <View>
        <Image
          source={require('../assets/Hero_image.png')}
          style={styles.photo}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 120,
    resizeMode: 'cover'
  }
})
