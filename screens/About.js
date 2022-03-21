import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Global } from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const About = ({navigation}) => { 
        
    const pushHandler = () => {
        navigation.push('Home')
    };
        

    return (
        <View style = {Global.container}>
            <Text>About</Text>
            <Text> </Text>
            <TouchableOpacity onPress= {pushHandler}>
                <Image
                    source={require('../assets/volver.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity>
            
        </View>
    )

};


export default About;