import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from "react-native";
import api from '../src/services/api';
import { AuthContext } from "../src/contexts/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const [eventos, setEventos] = useState([]);
    const { deslogar, confirmados } = useContext(AuthContext);
    const [filtroAtivo, setFiltroAtivo] = useState('todos');

    useEffect(() => {
        async function getEvents() {
            try {
                const Response = await api.get('events');
                setEventos(Response.data);
            } catch (error) {
                console.log('Erro ao consumir API');
            }
        }
        getEvents();
    }, []);

    const eventosFiltrados = eventos.filter(item => {
        const jaConfirmou = confirmados.includes(item.id);
        if (filtroAtivo === 'sim') return jaConfirmou;
        if (filtroAtivo === 'nao') return !jaConfirmou;
        return true;
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Nossos Eventos!</Text>
                <TouchableOpacity onPress={deslogar} style={styles.logoutBtn}>
                    <MaterialCommunityIcons name="logout" size={24} color="#FF5252" />
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                {[
                    { id: 'todos', label: 'Todos', icon: 'format-list-bulleted' },
                    { id: 'sim', label: 'Confirmados', icon: 'check-circle-outline' },
                    { id: 'nao', label: 'Pendentes', icon: 'clock-outline' }
                ].map((f) => (
                    <TouchableOpacity
                        key={f.id}
                        onPress={() => setFiltroAtivo(f.id)}
                        style={[styles.filterBtn, filtroAtivo === f.id && styles.filterBtnActive]}
                    >
                        <MaterialCommunityIcons 
                            name={f.icon} 
                            size={18} 
                            color={filtroAtivo === f.id ? "#fff" : "#666"} 
                        />
                        <Text style={[styles.filterText, filtroAtivo === f.id && styles.filterTextActive]}>
                            {f.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={eventosFiltrados}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => {
                    const jaConfirmou = confirmados.includes(item.id);
                    return (
                        <TouchableOpacity 
                            style={styles.card} 
                            onPress={() => navigation.navigate('Detalhes', { item })}
                        >
                            <View style={styles.cardContent}>
                                <View style={styles.infoArea}>
                                    <Text style={styles.eventLocal}>{item.eventLocal}</Text>
                                    <View style={styles.row}>
                                        <MaterialCommunityIcons name="calendar" size={14} color="#999" />
                                        <Text style={styles.eventDate}>{item.eventDate}</Text>
                                    </View>
                                </View>
                                
                                {jaConfirmou ? (
                                    <View style={styles.badgeSuccess}>
                                        <MaterialCommunityIcons name="check-decagram" size={20} color="#4CAF50" />
                                    </View>
                                ) : (
                                    <MaterialCommunityIcons name="chevron-right" size={24} color="#CCC" />
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F7FA', paddingHorizontal: 15 },
    header: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 20, 
        marginBottom: 20 
    },
    welcomeText: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
    logoutBtn: { padding: 5 },
    filterContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 20 
    },
    filterBtn: { 
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8, 
        paddingHorizontal: 12, 
        borderRadius: 20, 
        backgroundColor: '#E0E6ED',
        flex: 0.31
    },
    filterBtnActive: { backgroundColor: '#2196F3' },
    filterText: { fontSize: 12, marginLeft: 5, color: '#666', fontWeight: '600' },
    filterTextActive: { color: '#fff' },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardContent: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    infoArea: { flex: 1 },
    eventLocal: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 4 },
    row: { flexDirection: 'row', alignItems: 'center' },
    eventDate: { fontSize: 14, color: '#999', marginLeft: 5 },
    badgeSuccess: { 
        backgroundColor: '#E8F5E9', 
        padding: 6, 
        borderRadius: 50 
    }
});

export default Home;