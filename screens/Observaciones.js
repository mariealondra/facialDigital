import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Global } from '../styles/Global';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { ButtonStyle } from '../styles/ButtonStyle';


const Observaciones = ({ navigation }) => {

    const pushHandler = () => {
    navigation.push('Home')
    };


    return (
        <View style = {Global.container}>
            <Text>Observaciones del terapeuta</Text>

            <Text>  </Text>

            <Text style= {estilo.est}>
                Frecuencias de movimientos normales
                Próximamente actualizaciones de sesión
            </Text>

            <TextInput
                style= {estilo.input}
                placeholder= 'Buscar análisis'
            />
            <Button 
                title= 'Buscar' 
                onPress = {pushHandler}
                color= '#8a2be2'

            />
            <Text>  </Text>

            <TextInput
                style= {estilo.input}
                placeholder= 'Escriba sus comentarios'
            />

            <Button 
                title= 'Comentar' 
                onPress = {pushHandler}
                color= '#8a2be2'

            />
            <Text>      


            </Text>

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
        borderColor: '#777',
        borderWidth: 1,
        margin: 10,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    },
    estiloText: {
        fontSize: 20,
        height: 50,
        padding: 8
    }
})

export default Observaciones;