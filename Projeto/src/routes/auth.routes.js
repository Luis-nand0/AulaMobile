// Rotas de autenticação (cadastro e login)

import React from 'react';

import Login from '../../Screens/Login_screen';
import Sign from '../../Screens/Sign_screen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <AuthStack.Screen name="Cadastro" component={Sign} options={{headerShown:false}} />
        </AuthStack.Navigator>
    )
}