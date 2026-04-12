import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { QRCodeCanvas } from 'qrcode.react'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Ingresso = ({ route }) => {
    const { dadosParaQR } = route.params || {};

    if (!dadosParaQR) {
        return (
            <View style={styles.errorContainer}>
                <MaterialCommunityIcons name="alert-circle-outline" size={60} color="#FF5252" />
                <Text style={styles.errorText}>Nenhum dado encontrado.</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ticket}>
                <View style={styles.ticketHeader}>
                    <MaterialCommunityIcons name="ticket-confirmation" size={28} color="#FFF" />
                    <Text style={styles.headerTitle}>INGRESSO VÁLIDO</Text>
                </View>

                <View style={styles.qrSection}>
                    <View style={styles.qrBorder}>
                        <QRCodeCanvas 
                            value={JSON.stringify(dadosParaQR)} 
                            size={170}
                            level={"H"}
                        />
                    </View>
                    <Text style={styles.qrHelper}>Apresente este QR Code no check-in</Text>
                </View>

  
                <View style={styles.perforationContainer}>
                    <View style={styles.leftCutout} />
                    <View style={styles.dottedLine} />
                    <View style={styles.rightCutout} />
                </View>


                <View style={styles.infoSection}>
                    <View style={styles.infoRowFull}>
                        <Text style={styles.label}>EVENTO</Text>
                        <Text style={styles.valueLarge}>{dadosParaQR.evento}</Text>
                    </View>

                    <View style={styles.infoRowSplit}>
                        <View style={styles.infoBox}>
                            <Text style={styles.label}>USUÁRIO</Text>
                            <Text style={styles.value}>{dadosParaQR.usuario}</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.label}>DATA DO EVENTO</Text>
                            <Text style={styles.value}>{dadosParaQR.dataEvento}</Text>
                        </View>
                    </View>

                    <View style={styles.confirmationBox}>
                        <MaterialCommunityIcons name="clock-check-outline" size={14} color="#4CAF50" />
                        <Text style={styles.confirmationText}>
                            Confirmado em: <Text style={{fontWeight: 'bold'}}>{dadosParaQR.confirmadoEm}</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#2196F3', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    ticket: { 
        backgroundColor: '#fff', 
        borderRadius: 20, 
        width: '100%', 
        maxWidth: 360, 
        overflow: 'hidden',
        elevation: 10,
    },
    ticketHeader: {
        backgroundColor: '#1976D2',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        letterSpacing: 1.5
    },
    qrSection: {
        padding: 25,
        alignItems: 'center',
    },
    qrBorder: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 10,
        marginBottom: 10
    },
    qrHelper: {
        fontSize: 11,
        color: '#999',
    },
    perforationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
    },
    leftCutout: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#2196F3',
        marginLeft: -10
    },
    rightCutout: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#2196F3',
        marginRight: -10
    },
    dottedLine: {
        flex: 1,
        height: 1,
        borderWidth: 1,
        borderColor: '#EEE',
        borderStyle: 'dashed',
    },
    infoSection: {
        padding: 25,
    },
    infoRowFull: {
        marginBottom: 15
    },
    infoRowSplit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    infoBox: {
        flex: 1
    },
    label: { 
        fontSize: 10, 
        color: '#AAA', 
        fontWeight: 'bold',
        marginBottom: 3
    },
    valueLarge: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    value: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        color: '#555' 
    },
    confirmationBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F8E9',
        padding: 8,
        borderRadius: 8,
        marginTop: 5
    },
    confirmationText: {
        fontSize: 11,
        color: '#2E7D32',
        marginLeft: 5
    },
    errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    errorText: { marginTop: 10, color: '#666' }
});

export default Ingresso;