import React from 'react'
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
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

            <Button title='Ejercicios' 
                onPress = {pressHandler}
                color = '#8a2be2'
            />
            <Text> </Text>
            
            <Button 
                title= 'Observaciones' 
                color= '#8a2be2'
                onPress={observTerapia}
            
            />
            <Text> </Text>
            <Button 
                title= 'Acerca de'
                color= '#8a2be2'
                onPress={acercaDe}
            
            />
            <Text> </Text>
            
            <Button 
                title= 'Regresar'
                color= '#8a2be2'
                onPress={atras}
            
            />

        </View>
    )
};



export default Home;