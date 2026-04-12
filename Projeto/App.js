import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import react, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importanto o context com os dados
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';

import Routes from './src/routes';

// //Criando a constante do navigator
// const Drawer = createDrawerNavigator();

// //Importando a api
// import api from './src/services/api';

// //Import das telas do projeto
// import Home from './Screens/Home';
// import Login from './Screens/Login_screen';
// import Myevents from './Screens/Myevents';
// import Sign from './Screens/Sign_screen';

// //importando as rotas separadas
// import AppRouth from './auth.routes';
// import AppRoutes from './app.routes';
// import { ActivityIndicator } from 'react-native-web';

// const Routes = () =>{
//   const {signed, loading} = useContext(AuthContext);

//   if(loading) {
//     return(
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
//         <ActivityIndicator size="large" color="#2196F3" />
//       </View>
//     );
//   }

//   return signed ? <AppRoutes /> : <AuthRoutes />;
// };


// export default function App() {
//   return (
//     <NavigationContainer>
//       <AuthProvider>
//         <Drawer.Navigator initialRouteName="Eventos">
//         <Drawer.Screen name="Cadastro" component={Sign} />
//         <Drawer.Screen name="Login" component={Login} />
//         <Drawer.Screen name="Eventos" component={Home} />
//         <Drawer.Screen name="Meus Eventos" component={Myevents} />
//       </Drawer.Navigator>
//       </AuthProvider>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
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
