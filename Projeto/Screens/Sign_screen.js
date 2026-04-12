import React, { useContext, useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { AuthContext } from "../src/contexts/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Sign = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const { cadastrar } = useContext(AuthContext);

    async function enviarCadastro() {
        await cadastrar(nome, email);
        console.log(`Nome: ${nome}`);
        console.log(`Email: ${email}`);

        setEmail("");
        setNome('');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons name="account-plus" size={40} color="#2196F3" />
                    </View>

                    <Text style={styles.title}>Criar Conta</Text>
                    <Text style={styles.subtitle}></Text>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Seu Nome</Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons name="account-outline" size={20} color="#999" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="Ex: Ricardão"
                                value={nome} 
                                onChangeText={setNome}
                                placeholderTextColor="#CCC"
                            />
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>E-mail</Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons name="email-outline" size={20} color="#999" style={styles.inputIcon} />
                            <TextInput 
                                style={styles.input}
                                placeholder="exemplo@email.com"
                                value={email} 
                                onChangeText={setEmail}
                                placeholderTextColor="#CCC"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={enviarCadastro}>
                        <Text style={styles.buttonText}>CADASTRAR AGORA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.loginRedirect} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.redirectText}>
                            Já tem uma conta? <Text style={styles.redirectLink}>Faça Login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#2196F3' 
    },
    scrollContainer: {
        flexGrow: 1,
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
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
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
        marginBottom: 30,
        textAlign: 'center'
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
        backgroundColor: '#F9F9F9',
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
        backgroundColor: '#4CAF50', 
        width: '100%',
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        elevation: 4
    },
    buttonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10
    },
    loginRedirect: {
        marginTop: 25
    },
    redirectText: {
        fontSize: 14,
        color: '#777'
    },
    redirectLink: {
        color: '#2196F3',
        fontWeight: 'bold'
    }
});

export default Sign;