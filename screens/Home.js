import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Menu from '../components/Menu'
import FoodList from '../components/FoodList'

export default function Home() {
  return (
    <View>
      <Header />
      <Hero />
      <Search />
      <Menu />
      <FoodList />
    </View>
  )
}
