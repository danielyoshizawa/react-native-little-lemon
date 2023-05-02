import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Profile from './screens/Profile'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          option={{title: 'Home'}}
        />
        <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          option={{title: 'Welcome'}}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
          option={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
