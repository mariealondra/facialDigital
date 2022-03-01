import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';


const About = ({navigation}) => { 
        
    const pushHandler = () => {
        navigation.push('Home')
    };
        

    return (
        <View style = {Global.container}>
            <Text>About</Text>
            <Button 
                title= 'Regresar'
                color= '#8a2be2'
                onPress= {pushHandler}
            />
            
        </View>
    )

};


export default About;