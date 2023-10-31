import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import redcar from '../../assets/redcar_tela_2.jpg';

const width = Dimensions.get('screen').width;

export default function HomePage() {
    return  <SafeAreaView>
                <ScrollView>
                        <Image source={redcar} style={styleRedCar.topo} />
                        <Text style={styleRedCar.title}>RedCar</Text>
                    <View>
                        <Text style={styleRedCar.singupTitle}>Novo cliente</Text>
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
        position: "absolute",
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
        
    }
});