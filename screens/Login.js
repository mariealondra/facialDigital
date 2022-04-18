import React from 'react';
import { Image, StyleSheet, ScrollView, View, Text, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Global } from '../styles/Global';
import { ButtonStyle } from '../styles/ButtonStyle';
import UserInput from '../componentes/UserInput';
import { post } from '../backend/rutas/fadiapp';


const Login = ({navigation}) => {

   
    const pushHandler = () => {
        navigation.push('Home')
    };

 
  return (
        <View style = {Global.container}>
            <Text>Login</Text>
          
            <Text>  </Text>
            <Image 
                source={require('../assets/logo.png')} 
                style= {{ width: 200, height: 200}}
                
            />
            <Text>  </Text>
            <UserInput />
            <Text>  </Text>
            <TouchableOpacity onPress={pushHandler}>
                <Image
                    source= {require('../assets/registrarse.png')}
                    style= {{width: 250, height: 50}}
                />
            
            </TouchableOpacity>
        </View>
        );
   
};

export default Login;