import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TextInput} from 'react-native';
 
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Projetos from './src/pages/Projetos';
 
const Tab = createBottomTabNavigator();
 
const icons = {
  Pessoal:{
    name: 'ios-person-outline',
    
  },
  Formação:{
    name: 'ios-book-outline',
  },
  Projeto:{
    name: 'ios-code-slash-outline',
  }
}
 
export default function App(){
  return(
    <NavigationContainer style={styles.area}>
      <Tab.Navigator
      
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
      
        <Tab.Screen  name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Formacao} />
        <Tab.Screen name='Projeto' component={Projetos} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  area:{
    backgroundColor: '#FFCCD2',
    height:400,
    
  },
})
