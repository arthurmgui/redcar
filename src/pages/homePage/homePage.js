import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, TextInput, Alert, Button, KeyboardAvoidingView, TouchableOpacity, Pressable} from "react-native";
import redcar from '../../../assets/redcar_tela_2.jpg';

const width = Dimensions.get('screen').width;


export default function HomePage() {
    
    const [clientName, onChangeClientName] = React.useState('');
    const [clientAdress, onChangeClientAdress] = React.useState('');
    const [clientContact, onChangeClientContact] = React.useState('');
    const [clientCar, onChangeClientCar] = React.useState('');
    const [carLicensePlate, onChangeCarLicensePlate] = React.useState('');
    const [inputClientSearch, onChangeInputClientSearch] = React.useState('');

    return  (
        <SafeAreaView>
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
            <ScrollView>
                    <KeyboardAvoidingView>
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
                        <View style={styleRedCar.containerButton}>
                            <Pressable style={styleRedCar.buttonCreate}>
                                {({pressed}) => (
                                    <Text style={[styleRedCar.textButtonCreate, pressed && styleRedCar.textButtonCreate]}>Cadastrar cliente</Text>
                                )}
                            </Pressable>
                        </View>
                    </KeyboardAvoidingView>
            </ScrollView>
            </SafeAreaView>
    )
}

const styleRedCar = StyleSheet.create({
    topo: {
        width: "100%",
        height: 400 / 680 * width,
    },

    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 50,
        lineHeight: 66,
        color: "white",
        fontWeight: "bold",
        padding: 38,
        textShadowColor: "red", // Cor da sombra (preta com 50% de opacidade)
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
        backgroundColor: '#8e1e1ef6',
        borderWidth: 2,
        borderColor: 'rgba(300, 0, 0, 0.8)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 15,
        shadowColor: "red",
        shadowOffset: { width: 2, height: 2},
        shadowRadius: 20,
    },

    appBar: {
        position: "absolute",
        width: "100%"
    },

    containerButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 

    buttonCreate: {
        backgroundColor: "red",
        width: "50%",
        padding: 10,
        borderRadius: 5,
    },

    textButtonCreate: {
        color:"white",
        fontSize: 16,
        textAlign: "center"
    }
});