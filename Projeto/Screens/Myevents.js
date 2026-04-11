//Tela meus eventos
//Objetivos: permitir que o usário liste e acesse os eventos ao qual se cadastrou

import React, {useState} from "react";
import { View, TextInput, Button, Text } from "react-native";

const Myevents = ({navigation}) => {
    const [value, setValue] = useState('');


return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Página de Eventos</Text>
    </View>
);
};

export default Myevents;