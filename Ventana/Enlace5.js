import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
;


const Enlace5 = ({navigation}) => {
    const inicio = () => {
        navigation.push('Login')
    };
    const registrar = () => {
        navigation.push('Registro')
    };

    return (
        <View style = {Global.container}>
   
            <Text style={{ fontWeight: 'bold' }}>Registrarse</Text>

            <TouchableOpacity onPress={inicio}>
                <Image
                    source= {require('../assets/inicio.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>

        </View>
    );
      
   
};
export default Enlace5;