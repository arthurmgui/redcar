import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Pressable} from "react-native";
import redcar from '../../../assets/redcar_tela_2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;


export default function HomePage() {
    
    return  (
        <View style={styleRedCar.viewContainer}>
            <Image source={redcar} style={styleRedCar.topo} />
            <View style={styleRedCar.appBar}>
                <Text style={styleRedCar.title}>RedCar</Text>
            </View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View>
                        <Text style={styleRedCar.quicklyAcessTxt}>Acesso rápido</Text>
                        <View style={styleRedCar.containerQuiclyCards}>
                            <View style={styleRedCar.containerCards}>
                                <Pressable style={styleRedCar.card}>
                                    {({pressed}) => (
                                        <View style={styleRedCar.iconCard}>
                                            <Icon name="user" size={20} color="white" style={styleRedCar.iconCard}/>
                                        </View>
                                    )}
                                </Pressable>
                                <Text style={styleRedCar.textCard}>
                                    clientes
                                </Text>
                            </View>
                            <View style={styleRedCar.containerCards}>
                                <Pressable style={styleRedCar.card}>
                                    {({pressed}) => (
                                        <View style={styleRedCar.iconCard}>
                                            <Icon name="car" size={20} color="white" style={styleRedCar.iconCard}/>
                                        </View>
                                    )}
                                </Pressable>
                                <Text style={styleRedCar.textCard}>
                                    garagem
                                </Text>
                            </View>
                            <View style={styleRedCar.containerCards}>
                                <Pressable style={styleRedCar.card}>
                                    {({pressed}) => (
                                        <View style={styleRedCar.iconCard}>
                                            <Icon name="money" size={20} color="white" style={styleRedCar.iconCard}/>
                                        </View>
                                    )}
                                </Pressable>
                                <Text style={styleRedCar.textCard}>
                                    orçamento
                                </Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}

const styleRedCar = StyleSheet.create({

    safeAreaStyle: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#bd2a2a",
    },

    viewContainer: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#bd2a2a",
    },

    topo: {
        width: "100%",
        height: 280 / 900 * width,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },

    appBar: {
        position: "absolute",
        width: "100%"
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

    quicklyAcessTxt: {
        width: "100%",
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        padding: 17,
    },

    containerQuiclyCards: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }, 

    containerCards: {
        flex: 1,
        alignItems: "center",
    },

    card: {
        backgroundColor: "#db4444",
        width: "85%",
        padding: 17,
        borderRadius: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    cardPressed: {
        backgroundColor: "#f35757",
    },

    iconCard: {
        alignItems: "center",
        justifyContent: "center",
    },

    textCard: {
        color: "white"
    },

    textButtonCreate: {
        color:"white",
        fontSize: 16,
        textAlign: "center"
    }
});