import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// theme
import { Colors } from './theme/Colors'

// pages
import { Menu } from './pages/Menu'
import { Modos } from './pages/Modos'
import { Game } from './components/Game'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.black,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Menu" component={Menu} options={{
          title: ''
        }} />
        <Stack.Screen name="Modos" component={Modos} options={{ title: 'Modos' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: 'Cálcule' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
