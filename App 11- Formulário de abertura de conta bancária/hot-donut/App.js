import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PaginaUm from './pages/PaginaUm';
import PaginaDois from './pages/PaginaDois';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaUm">
        <Stack.Screen
          name="=Banco União"
          component={PaginaUm}
          options={{
            title: 'Banco União',
            headerStyle: {
              backgroundColor: '#7267CB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="PaginaDois"
          component={PaginaDois}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#7267CB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;