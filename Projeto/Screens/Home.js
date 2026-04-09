// Tela Home
// Objetivo: Permitir que o usúario acesse com facilidade as funções do aplicativo

import React, {useState} from "react";
import { View, TextInput, Button, Text } from "react-native-web";

const Home = ({navigation}) => {
    const [value, setValue] = useState('');


return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Olá mundo</Text>
    </View>
);
};

export default Home;