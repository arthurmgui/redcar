import React from "react";
import { Text, Image, Dimensions, StyleSheet} from "react-native";
import redcar from '../../assets/carro-esporte.png';

const width = Dimensions.get('screen').width;

export default function HomePage() {
    return <Image source={redcar} style={styleCar.topo} />
}

const styleCar = StyleSheet.create({
    topo: {
        width: "100%",
        height: 512 / 512 * width,
    }
});