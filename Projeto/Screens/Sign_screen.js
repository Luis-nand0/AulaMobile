//Tela de cadastro
// Permitir o usuário se cadastrar com nome, email e senha

import React, {useState} from "react";
import { View, TextInput, Button, Text } from "react-native";

//Importando o "banco de dados"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./Home";


const Sign = ({navigation}) => {
    const [value, setValue] = useState('');

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');

//Função para cadastrar os dados na memória
const cadastrarDados = async () => {
    try {
        const usuario = {
            nome: nome,
            email: email,
        };

        const jsonValue = JSON.stringify(usuario);
        await AsyncStorage.setItem('dados_usuario', jsonValue);

        console.log(`Nome cadastrado: ${nome}`);
        console.log(`Nome cadastrado: ${email}`);

        navigation.navigate('Eventos');

        alert("Cadastro realizado!")

    } catch (e) {
        console.log("Erro ao cadastrar usuário", e);
    }
}

return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Cadastre-se </Text>
        <Text>Nome: </Text>
        <TextInput placeholder="Informe seu nome" value={nome} onChangeText={(nome) => setNome(nome)}></TextInput>
        <Text> Email: </Text>
        <TextInput placeholder="Informe seu E-mail" value={email} onChangeText={(email) => setEmail(email)}></TextInput>
        <Button title="Cadastrar" onPress={cadastrarDados}></Button>
    </View>
);
};

export default Sign;