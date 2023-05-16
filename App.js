import Onboarding from './screens/Onboarding'
import Home from './screens/Home'
import Profile from './screens/Profile'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const state = {isOnboardingCompleted : false}
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { state.isOnboardingCompleted ? (
          <>
            <Stack.Screen
              name='Home'
              component={Home}
              option={{title: 'Home'}}
            />
            <Stack.Screen
              name='Profile'
              component={Profile}
              option={{title: 'Profile'}}
            />
          </>
        ) : (
          <Stack.Screen
            name='Onboarding'
            component={Onboarding}
            option={{title: 'Welcome'}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
