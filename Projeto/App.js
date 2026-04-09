import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import react from 'react';

//Criando a constante do navigator
const Stack = createStackNavigator();

//Import das telas do projeto
import Home from './Screens/Home';
// import Events from './Screens/Events';
// import Login from './Screens/Login_screen';
// import Myevents from './Screens/Myevents';
// import Qrcode from './Screens/QrcodeArea';
// import Sign from './Screens/Sign_screen';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Event" component={Events} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyEvent" component={Myevents} />
        <Stack.Screen name="Qrcode" component={Qrcode} />
        <Stack.Screen name="Sign" component={Sign} /> */}
      </Stack.Navigator>
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
