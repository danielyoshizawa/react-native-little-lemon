import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const DATA = [
  {
    id : '0',
    title: 'Item 0'
  },
  {
    id : '1',
    title: 'Item 1'
  },
  {
    id : '2',
    title: 'Item 2'
  }
]

const Item = ({item}) => (
  <Text style={styles.item}>{item.title}</Text>
)

export default function Menu() {
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
      />
    )
  }

  return (
      <View style={styles.container}>
        <Text>ORDER FOR DELIVERY!</Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  item: {
    fontSize: 15,
  }
})
