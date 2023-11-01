import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, TextInput, Alert, Button} from "react-native";
import redcar from '../../../assets/redcar_tela_2.jpg';

const width = Dimensions.get('screen').width;


export default function HomePage() {
    
    const [clientName, onChangeClientName] = React.useState('');
    const [clientAdress, onChangeClientAdress] = React.useState('');
    const [clientContact, onChangeClientContact] = React.useState('');
    const [clientCar, onChangeClientCar] = React.useState('');
    const [carLicensePlate, onChangeCarLicensePlate] = React.useState('');
    const [inputClientSearch, onChangeInputClientSearch] = React.useState('');

    return  <SafeAreaView>
                <ScrollView>
                        <Image source={redcar} style={styleRedCar.topo} />
                        <View style={styleRedCar.appBar}>
                            <Text style={styleRedCar.title}>RedCar</Text>
                            <TextInput
                                style={styleRedCar.inputSearch}
                                onChangeText={onChangeInputClientSearch}
                                value={inputClientSearch}
                                placeholder="Pesquise o Cliente"
                            />
                        </View>

                        <View>
                            <Text style={styleRedCar.singupTitle}>Novo cliente</Text>
                            <TextInput
                                style={styleRedCar.input}
                                onChangeText={onChangeClientName}
                                value={clientName}
                                placeholder= "Nome"
                            />
                            <TextInput
                                style={styleRedCar.input}
                                onChangeText={onChangeClientAdress}
                                value={clientAdress}
                                placeholder= "Endereço"
                            />
                            <TextInput
                                style={styleRedCar.input}
                                onChangeText={onChangeClientContact}
                                value={clientContact}
                                placeholder= "Contato"
                                keyboardType= "number-pad"
                            />
                            <TextInput
                                style={styleRedCar.input}
                                onChangeText={onChangeClientCar}
                                value={clientCar}
                                placeholder= "Modelo do carro"
                            />
                            <TextInput
                                style={styleRedCar.input}
                                onChangeText={onChangeCarLicensePlate}
                                value={carLicensePlate}
                                placeholder= "Placa do carro"
                            />
                            <Button
                                style={styleRedCar.button}
                                onPress={()=> Alert.alert('Cliente cadastrado!')}
                                title="Criar Cadastro"
                                color="red"
                            />
                        </View>
                </ScrollView>
            </SafeAreaView>
}

const styleRedCar = StyleSheet.create({
    topo: {
        width: "100%",
        height: 410 / 580 * width,
    },

    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 50,
        lineHeight: 66,
        color: "white",
        fontWeight: "bold",
        padding: 38,
        textShadowColor: 'rgba(3, 3, 3, 5)', // Cor da sombra (preta com 50% de opacidade)
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 20, // Raio da sombra
    },

    singupTitle: {
        width: "100%",
        textAlign: "center",
        fontSize: 23,
        color: "red",
        fontWeight: "bold",
        padding: 17,
    },

    input: {
        height: 45,
        margin: 8,
        color: "black",
        borderWidth: 2,
        borderColor: "red",
        padding: 10,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
    },

    inputSearch: {
        height: 60,
        margin: 8,
        color: "white",
        backgroundColor: 'rgba(300, 0, 0, 0.9)',
        borderWidth: 2,
        borderColor: 'rgba(300, 0, 0, 0.8)',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 15,
    },

    appBar: {
        position: "absolute",
        width: "100%"
    }
});