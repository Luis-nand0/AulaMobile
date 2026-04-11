import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Criando a constante do navigator
const Drawer = createDrawerNavigator();

//Importando a api
import api from './src/services/api';

//Import das telas do projeto
import Home from './Screens/Home';
import Login from './Screens/Login_screen';
import Myevents from './Screens/Myevents';
import Sign from './Screens/Sign_screen';



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Eventos">
        <Drawer.Screen name="Cadastro" component={Sign} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Eventos" component={Home} />
        <Drawer.Screen name="Meus Eventos" component={Myevents} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
