import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import api from '../src/services/api';
import { AuthContext } from "../src/contexts/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Myevents = ({ navigation }) => {
    const [eventos, setEventos] = useState([]);
    const { confirmados } = useContext(AuthContext);

    useEffect(() => {
        async function getEvents() {
            try {
                const response = await api.get('events');
                setEventos(response.data);
            } catch (error) {
                console.log('Erro ao buscar eventos:', error);
            }
        }
        getEvents();
    }, []);

    const meusEventos = eventos.filter(item => confirmados.includes(item.id));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Minha Agenda</Text>
                <Text style={styles.headerSubtitle}>Eventos que você confirmou presença</Text>
            </View>
            
            {meusEventos.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <MaterialCommunityIcons name="calendar-blank" size={80} color="#CCC" />
                    <Text style={styles.emptyText}>Nenhum evento confirmado ainda.</Text>
                </View>
            ) : (
                <FlatList
                    data={meusEventos}
                    keyExtractor={(item) => String(item.id)}
                    contentContainerStyle={styles.listPadding}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => navigation.navigate('inicio', { screen: 'Detalhes', params: {item} })}
                        >
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>{item.name || item.eventLocal}</Text>
                                
                                <View style={styles.infoRow}>
                                    <MaterialCommunityIcons name="calendar" size={16} color="#666" />
                                    <Text style={styles.infoText}>{item.date || item.eventDate}</Text>
                                </View>

                                <View style={styles.infoRow}>
                                    <MaterialCommunityIcons name="map-marker" size={16} color="#666" />
                                    <Text style={styles.infoText}>{item.location || item.eventLocal}</Text>
                                </View>
                            </View>
                            
                            <MaterialCommunityIcons name="chevron-right" size={24} color="#2196F3" />
                        </TouchableOpacity>
                    )}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#F5F7FA' 
    },
    header: {
        padding: 25,
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 10
    },
    headerTitle: { 
        fontSize: 26, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 5
    },
    listPadding: {
        padding: 20
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderLeftWidth: 6,
        borderLeftColor: '#4CAF50', 
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    cardContent: {
        flex: 1
    },
    title: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#2196F3',
        marginBottom: 8 
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },
    infoText: { 
        marginLeft: 8, 
        color: '#666',
        fontSize: 14 
    },
    emptyContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 100 
    },
    emptyText: { 
        textAlign: 'center', 
        color: '#999', 
        fontSize: 16,
        marginTop: 15
    }
});

export default Myevents;