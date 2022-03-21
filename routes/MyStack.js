import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Sesiones from '../screens/Sesiones';
import Login from '../screens/Login';
import Observaciones from '../screens/Observaciones';
import About from '../screens/About';
import UserInput from '../componentes/UserInput';
import { Global } from '../styles/Global';
import { StyleSheet, View, Text, Button, Image } from 'react-native'

const Stack = createStackNavigator();


const MyStack = () => {
    return (
        <Stack.Navigator
            
        screenOptions={{
            headerStyle:  {
                backgroundColor: '#9932cc'
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
            
        }} >
            <Stack.Screen 
                name = 'Login' 
                component= {Login}
            
                
            />
            
            <Stack.Screen name= 'Home' component={Home} />

            <Stack.Screen name = 'Sesiones' component={Sesiones} />

            <Stack.Screen name = 'Observaciones' component={Observaciones} />

            <Stack.Screen name = 'About' component={About} />

        </Stack.Navigator>
    )
}


export default MyStack;