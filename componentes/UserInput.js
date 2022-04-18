import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';

const UserInput = () => { 
    
    return (
        <View>
            <TextInput
               style= {estilo.input}
               placeholder= 'Digite su usuario o email'
              
           />
           <TextInput
               style= {estilo.input}
               placeholder= 'Escriba su contraseña'
              
           />
        </View>
        
    )
}

export default function UserInput(){
    const [name, setName]= useState('');
    const [password, sePassword]= useState();

    return (
        <View>
            <TextInput
               style= {estilo.input}
               placeholder= 'Digite su usuario o email'
              
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
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#777',
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

