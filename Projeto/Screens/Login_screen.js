import React, { useContext, useState } from "react";
import { View, TextInput, Text, Alert, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { AuthContext } from "../src/contexts/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Login = ({navigation}) => {
    const [nomeDigitado, setNomeD] = useState('');
    const [emailDigitado, setEmailD] = useState('');

    const { logar } = useContext(AuthContext);

    async function verificarLogin() {
        const usuarioLogado = await logar(nomeDigitado, emailDigitado);

        if (usuarioLogado) {
            console.log("Usuário Logado!");
            setEmailD('');
            setNomeD('');
        } else {
            Alert.alert("Erro", "Nome ou Email não cadastrados");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name="ticket-confirmation" size={40} color="#2196F3" />
                </View>
                
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>Acesse seus ingressos e eventos</Text>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Nome de Usuário</Text>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="account" size={20} color="#999" style={styles.inputIcon} />
                        <TextInput 
                            style={styles.input}
                            value={nomeDigitado} 
                            onChangeText={setNomeD} 
                            placeholder="Ex: Luis Silva"
                            placeholderTextColor="#CCC"
                        />
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>E-mail</Text>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="email" size={20} color="#999" style={styles.inputIcon} />
                        <TextInput 
                            style={styles.input}
                            value={emailDigitado} 
                            onChangeText={setEmailD} 
                            placeholder="seuemail@exemplo.com"
                            placeholderTextColor="#CCC"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={verificarLogin}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                    <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.footerContainer} 
                    onPress={() => navigation.navigate('Cadastro')} 
                >
                    <Text style={styles.footerText}>
                        Não possui conta? <Text style={styles.footerLink}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#2196F3', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 20
    },
    card: { 
        backgroundColor: '#fff', 
        padding: 30, 
        borderRadius: 25, 
        width: '100%', 
        maxWidth: 400, 
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    title: { 
        fontSize: 26, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    subtitle: { 
        fontSize: 14, 
        color: '#777', 
        marginBottom: 30 
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 20
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999',
        marginBottom: 8,
        textTransform: 'uppercase',
        marginLeft: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#EEE'
    },
    inputIcon: {
        marginRight: 10
    },
    input: { 
        flex: 1,
        height: 50,
        color: '#333',
        fontSize: 16
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#2196F3',
        width: '100%',
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 5
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    footerText: {
        marginTop: 25,
        fontSize: 12,
        color: '#AAA',
        textAlign: 'center'
    }
});

export default Login;