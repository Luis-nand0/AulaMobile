// Rotas de eventos
import React from 'react';

import Eventos from "../../Screens/Home"
import MeusEventos from '../../Screens/Myevents';
import Detalhes from '../../Screens/detalheEvento'
import Ingresso from '../../Screens/ingresso';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();


function EventosStack(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name='Eventos' component={Eventos} options={{headerShown: false}}/>
            <AppStack.Screen name='Detalhes' component={Detalhes} />
            <AppStack.Screen name='Ingresso' component={Ingresso} />
        </AppStack.Navigator>
    )
}


export default function AppRoutes(){
    return(
        <AppDrawer.Navigator>
            <AppDrawer.Screen name='inicio' component={EventosStack} />
            <AppDrawer.Screen name='Meus Eventos' component={MeusEventos}/>
        </AppDrawer.Navigator>
    );
}