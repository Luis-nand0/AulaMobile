// Tel de login
//Objetivo: Permitir que o usuário consiga logar no aplicativo através de email e senha

import React, {useState} from "react";
import { View, TextInput, Button, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const [value, setValue] = useState('');

const [nomeDigitado, setNomeD] = useState('');
const [emailDigitado, setEmailD] = useState('');

const verificarDados = async () => {
    try{
        const dadosSalvos = await AsyncStorage.getItem('dados_usuario');

        if(dadosSalvos !== null){
            const usuarioObjeto = JSON.parse(dadosSalvos);
        
            if(emailDigitado === usuarioObjeto.email && senhaDigitado === ususario.Oje)
        }
    }
}

return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Realize seu login</Text>
        <Text>Nome: </Text>
        <TextInput value="nome" onChangeText={(nomeDigitado) => setNomeD(nomeDigitado)} placeholder="Informe seu nome de usuário"></TextInput>
        <Text>Email:</Text>
        <TextInput value="email" onChangeText={(emailDigitado) => setEmailD(emailDigitado)} placeholder="Informe seu Email"></TextInput>
    </View>
);
};

export default Login;