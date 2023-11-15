import React from "react";
import { Dimensions, View, Text, StyleSheet, TextInput, Pressable} from "react-native";

const width = Dimensions.get('screen').width;

export default function LoginPage() {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    

    return (
        <View style={styleLoginPage.viewContainer}>
            <View>
                <Text style={styleLoginPage.title}>RedCar</Text>
                <View style={styleLoginPage.viewInputs}>
                    <TextInput
                        style={styleLoginPage.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styleLoginPage.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Senha"
                    />
                    <Pressable style={styleLoginPage.loginButton} >
                        {({pressed}) =>(
                            <Text style={styleLoginPage.textButton}>Entrar</Text>
                        )}
                    </Pressable>
                    <Pressable>
                        {({pressed})=>(
                            <Text style={styleLoginPage.textSingUp}>Fazer cadastro</Text>
                        )}
                    </Pressable>
                </View>
            </View> 
        </View>
    )
}

const styleLoginPage = StyleSheet.create({
    
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        textAlign: "center",
        backgroundColor: "#bd2a2a",
    },

    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 50,
        lineHeight: 66,
        color: "white",
        fontWeight: "bold",
        padding: 38,
        textShadowColor: "black", // Cor da sombra (preta com 50% de opacidade)
        textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        textShadowRadius: 20, // Raio da sombra
    },

    viewInputs: {
        justifyContent: 'center',
        textAlign: "center",
    },

    input: {
        height: 50,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 15,
        borderRadius: 20,
        color: "black",
        backgroundColor: "white",
        
        padding: 15,
    },

    loginButton: {
        backgroundColor: "#db4444",
        justifyContent: 'center',
        textAlign: "center",
        width: "50%",
        padding: 17,
        left: width / 4,
        elevation: 5,
        shadowColor: 'black',
        borderRadius: 20,
        marginTop: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    textButton: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
    },

    textSingUp: {
        color: "white",
        fontWeight: "bold",
        padding: 20,
        textAlign: "center",
        justifyContent: "center",
    }
})