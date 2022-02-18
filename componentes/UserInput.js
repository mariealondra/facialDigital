import React from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';

const UserInput = ({navigation}) => { 
    
    return (
        <View>
            <TextInput
               style= {estilo.input}
               placeholder= 'Digite su nombre'
              
           />
           <TextInput
               style= {estilo.input}
               placeholder= 'Escriba su contraseña'
              
           />
        </View>
        
    )
}

const estilo = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#add8e6',
        fontSize: 20,
        height: 50,
        borderColor: '#777',
        borderWidth: 1,
        margin: 10,
        padding: 8
    },

})

export default UserInput;