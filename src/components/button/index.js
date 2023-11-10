import  React from 'react';
import { Pressable, Text } from 'react-native';

export default function ButtonStyle({children}) {
    return  <Pressable style={styleButton.buttonCreate} >
                {({pressed}) => (
                    <Text style={[styleButton.textButtonCreate, pressed && styleButton.textButtonCreate]}>{children}</Text>
                )}
            </Pressable>

    const styleButton = StyleSheet.create({
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
    })
}