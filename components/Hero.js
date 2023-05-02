import { StyleSheet, Text, View, Image } from 'react-native';
import Search from './Search'

export default function Hero(props) {
  return (
    <View style={props.style.hero}>
      <View>
        <Text>
          Little Lemon
        </Text>
        <Text>
          Chicago
        </Text>
      </View>
      <View style={props.style.subhero}>
        <Text>
          We are a family owned{'\n'}
          Mediterranean restaurant,{'\n'}
          focused on traditional{'\n'}
          recipes served with a{'\n'}
          modern twist.
        </Text>
        <Image
          source={require('../assets/Hero_image.png')}
          style={props.style.photo}
        />
      </View>
      <Search style={props.style} />
    </View>
  )
}
