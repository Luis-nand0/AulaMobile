import { use, useState } from "react";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Cadastro() {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [curso, setCurso] = useState("")

    const armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor)
    }

   const buscarCurso = async(chave) => {
    const valor = await AsyncStorage.getItem(chave)
    setCurso(valor)
  }

    armazenar('01', nome)
    armazenar('02', idade)
    armazenar('03', curso)

    buscarCurso('03')

  const alerta = (nome, curso, idade) => {
    Alert.alert(
        "Dados cadastrados", 
        `Nome: ${nome}
         Idade: ${idade}
         Curso: ${curso}`
    );
  }

  buscarCurso('03')

    return (
       <View style={styles.container}>
         <Text>Nome do Aluno: </Text>
         <TextInput onChangeText={nome}></TextInput>
         <Text>Idade do Aluno: </Text>
         <TextInput onChangeText={idade}></TextInput>
         <Text>Curso do Aluno: </Text>
         <TextInput onChangeText={curso}></TextInput>
        
         <Button onPress={alerta}></Button>


         <StatusBar style="auto" />
       </View>
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