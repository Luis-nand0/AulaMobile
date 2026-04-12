import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { AuthContext } from "../src/contexts/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Detalhes = ({ route, navigation }) => { 
    const { item } = route.params;
    const { user, confirmados, confirmarPresenca } = useContext(AuthContext);

    const jaConfirmou = confirmados.includes(item.id);

    const handleVerIngresso = () => {
        const dadosParaQR = {
            usuario: user.nome,
            evento: item.eventLocal,
            dataEvento: item.eventDate,
            confirmadoEm: new Date().toLocaleString('pt-BR')
        };
        navigation.navigate('Ingresso', { dadosParaQR });
    }

    function Confirmacao() {
        confirmarPresenca(item.id);
        console.log('Presença confirmada!');
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerImageContainer}>
                    <MaterialCommunityIcons name="calendar-star" size={80} color="#2196F3" />
                    <Text style={styles.mainTitle}>{item.eventLocal}</Text>
                </View>

                <View style={styles.contentCard}>
                    <View style={styles.infoSection}>
                        <View style={styles.iconBackground}>
                            <MaterialCommunityIcons name="clock-outline" size={24} color="#2196F3" />
                        </View>
                        <View style={styles.textColumn}>
                            <Text style={styles.label}>Data e Horário</Text>
                            <Text style={styles.value}>{item.eventDate}</Text>
                        </View>
                    </View>

                    <View style={styles.infoSection}>
                        <View style={styles.iconBackground}>
                            <MaterialCommunityIcons name="map-marker-outline" size={24} color="#2196F3" />
                        </View>
                        <View style={styles.textColumn}>
                            <Text style={styles.label}>Local do Evento</Text>
                            <Text style={styles.value}>{item.eventLocal}</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.descriptionSection}>
                        <Text style={styles.label}>Sobre o evento</Text>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        {jaConfirmou ? (
                            <TouchableOpacity 
                                style={[styles.button, styles.btnIngresso]} 
                                onPress={handleVerIngresso}
                            >
                                <MaterialCommunityIcons name="ticket-confirmation" size={22} color="#FFF" />
                                <Text style={styles.btnText}>VER MEU INGRESSO</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity 
                                style={[styles.button, styles.btnConfirmar]} 
                                onPress={Confirmacao} 
                            >
                                <MaterialCommunityIcons name="check-bold" size={22} color="#FFF" />
                                <Text style={styles.btnText}>CONFIRMAR PRESENÇA</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F5F7FA' 
    },
    headerImageContainer: {
        height: 220,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 15
    },
    contentCard: {
        padding: 25,
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconBackground: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#E3F2FD',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    textColumn: {
        flex: 1
    },
    label: { 
        fontSize: 12, 
        color: '#999', 
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    value: { 
        fontSize: 16, 
        color: '#333', 
        fontWeight: '600' 
    },
    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginVertical: 10,
        marginBottom: 25
    },
    descriptionSection: {
        marginBottom: 30
    },
    descriptionText: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginTop: 10
    },
    buttonContainer: { 
        marginTop: 10 
    },
    button: {
        flexDirection: 'row',
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    btnConfirmar: { 
        backgroundColor: '#2196F3' 
    },
    btnIngresso: { 
        backgroundColor: '#4CAF50' 
    },
    btnText: { 
        color: '#fff', 
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    }
});

export default Detalhes;