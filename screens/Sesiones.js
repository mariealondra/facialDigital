import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { Global } from '../styles/Global';


const Sesiones = ({ navigation }) => {

    const pushHandler = () => {
    navigation.push('Home')
    };

    return (
        <View style = {Global.container}>
            <Text>Sesiones</Text>

            <Text>  </Text>

            <TextInput
                style= {estilo.input}
                placeholder= 'Buscar ejercicio'
            />

            <Button 
                title= 'Retroceder' 
                onPress = {pushHandler} 
                color= '#9932cc'
            />

        </View>
    )

};

const estilo = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#add8e6',
        fontSize: 20,
        height: 50,
        borderColor: '#777',
        borderWidth: 1,
        margin: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})


export default Sesiones;