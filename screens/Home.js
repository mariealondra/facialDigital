import React from 'react'
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
import { Global} from '../styles/Global';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation}) => {
   /* const inicioSesion = () => {
        navigation.push('Login')
    }*/
    const pressHandler = () => {
        navigation.push('Sesiones')
    }
    const observTerapia = () => {
        navigation.push('Observaciones')
    }
    const acercaDe = () => {
        navigation.push('About')
    }
   

    return (
        <View style = {Global.container}>
            <Text> Home </Text>

            <Button title='Ejercicios' 
                onPress = {pressHandler}
                color = '#9932cc'
            />
            <Text> </Text>
            
            <Button 
                title= 'Observaciones' 
                color= '#9932cc'
                onPress={observTerapia}
            
            />
            <Text> </Text>
            <Button 
                title= 'Acerca de'
                color= '#9932cc'
                onPress={acercaDe}
            
            />

        </View>
    )
};



export default Home;