import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
import { Global } from '../styles/Global';

const ButtonFadi = ({navigation}) => {

    return (
        <View styles= {Global.container}>
            <Button 
            title = 'Aceptar' 
            color= '#8a2be2'
            
            />
        </View>
    )

}

export default ButtonFadi;