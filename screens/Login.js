import React from 'react';
import { Image, StyleSheet, View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import { ButtonStyle } from '../styles/ButtonStyle';
//import logo from './assets/logo.jpeg'


const Login = ({navigation}) => {

   
    const pushHandler = () => {
        navigation.push('Home')
    };

 
  return (
        <View style = {Global.container}>
            <Text>Login</Text>
          
            <Text>  </Text>
           
            <TouchableOpacity style = {ButtonStyle.addButton} >
                <Button 
                title = 'Registrarse' 
                onPress = {pushHandler}
                color= '#008000'
                />
            
            </TouchableOpacity>
        </View>
        );
   
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
        padding: 8
    },

})

export default Login;