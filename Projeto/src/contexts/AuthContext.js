//Arquivo de contexto para facilitar a armazenagem e busca dos dados

import React, { Children, createContext, useEffect, useState } from "react";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { AccessibilityInfo } from "react-native";

//Criando o contexto
export const AuthContext = createContext({});


export const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [confirmados, setConfirmados] = useState([]);

//Verificado o cadastro ao abrir o aplicativo
useEffect(() => {
    async function  loadStorageData() {
        const storageUser = await AsyncStorage.getItem('usuario_logado');
        if (storageUser) {
            setUser(JSON.parse(storageUser));
        }
        setLoading(false);
    }
    loadStorageData();
}, []);


// função de cadastro
async function cadastrar(nome, email) {
    
    const storage = await AsyncStorage.getItem('usuarios_app');
    let listaUsuarios = storage ? JSON.parse(storage) : [];

    const ususarioExiste = listaUsuarios.find(u => u.email === email);
    if(ususarioExiste){
        alert("Este e-mail já está cadastrado!");
        return;
    }

    const novoUsuario = {nome, email};
    listaUsuarios.push(novoUsuario);

    await AsyncStorage.setItem('usuarios_app', JSON.stringify(listaUsuarios));
    alert("Usuario cadastrado com sucesso");
}


// função de login
async function logar(nome, email) {

    const storage = await AsyncStorage.getItem('usuarios_app');
    const listaUsuarios = storage ? JSON.parse(storage) : [];

    const ususarioEncontrado = listaUsuarios.find(
        (u) => u.email === email && u.nome === nome
    );

    if(ususarioEncontrado) {
        await AsyncStorage.setItem('usuario_logado', JSON.stringify(ususarioEncontrado));
        setUser(ususarioEncontrado);
        return true;
    } else {
        alert("Usuário não cadastrado!");
        return false;
    }
}

// função de deslogar
async function  deslogar() {
    await AsyncStorage.removeItem('usuario_logado');
    setUser(null);
    setConfirmados([]);
}

//Carregamer os eventos já confirmados
useEffect(()=>{
    async function loadConfirmados() {

        if(user) {
            const chaveUsuario = `confirmados_${user.email}`;
            const saved = await AsyncStorage.getItem(chaveUsuario);
             if (saved) setConfirmados(JSON.parse(saved));
        } else {
            setConfirmados([])
        }

     
    }
    loadConfirmados();
}, [user]);

// função de confirmar presença nos eventos
async function confirmarPresenca(eventId) {
    if(confirmados.includes(eventId)) return;

    const novaLista = [...confirmados, eventId];
    setConfirmados(novaLista);

    const chaveUsuario = `confirmados_${user.email}`;
    await AsyncStorage.setItem(chaveUsuario, JSON.stringify(novaLista));
}


// Permitindo acessar os dados dentro do resto do APP

return(
    
<AuthContext.Provider value={{signed: !!user, user, cadastrar, logar, deslogar, confirmados, confirmarPresenca, loading}}>
    {children}
</AuthContext.Provider>

);

};
