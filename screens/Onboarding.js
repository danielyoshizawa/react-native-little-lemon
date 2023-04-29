import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header'
import Hero from '../components/Hero'
import Info from '../components/Info'

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <Info />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})
