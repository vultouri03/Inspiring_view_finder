import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from './components/map';
import List from './components/List';

const App = () => {
  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator();

  return(
    <>
    {/* <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer> */}

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='list' component={List}/>
        <Tab.Screen name='map' component={Map}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App;
