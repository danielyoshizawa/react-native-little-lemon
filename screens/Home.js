import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import FoodList from '../components/FoodList'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header style={styles} navigation={navigation}/>
      <Hero style={styles} />
      <Menu style={styles} />
      <FoodList style={styles} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hero:{
    alignSelf: 'stretch',
    padding: 10,
    backgroundColor: 'green'
  },
  subhero: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  search: {
    alignSelf: 'stretch',
    backgroundColor: 'pink',
    marginTop: 10,
    padding: 10,
  },
  menu: {
  },
  food: {
  },
  photo: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  logo: {
    width: 160,
    height: 65,
    resizeMode: 'contain'
  },
  item: {
    backgroundColor: 'red',
    fontSize: 15
  }
})
