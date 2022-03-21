import React from 'react'
import { StyleSheet, View, Text, Image,  Button, FlatList} from 'react-native';
import { Global} from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation}) => {

    const pressHandler = () => {
        navigation.push('Sesiones')
    }
    const observTerapia = () => {
        navigation.push('Observaciones')
    }
    const acercaDe = () => {
        navigation.push('About')
    }
    const atras = () => {
        navigation.push('Login')
    }
   

    return (
        <View style = {Global.container}>
            <Text> Home </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <TouchableOpacity onPress = {pressHandler} >
                <Image 
                    source={require('../assets/EJERCICIOS.png')} 
                    style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity onPress = {observTerapia} >
                <Image
                    source={require('../assets/observaciones.png')} 
                    style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>

            <Text> </Text>
                  
            <TouchableOpacity onPress={acercaDe} >
                <Image
                 source={require('../assets/acercade.png')} 
                 style= {{ width: 250, height: 50}}
                />

            </TouchableOpacity>
               
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <TouchableOpacity onPress={atras} >
                <Image
                    source={require('../assets/volver.png')} 
                    style= {{ width: 250, height: 50}}
                />
            </TouchableOpacity>
            

        </View>
    )
};



export default Home;