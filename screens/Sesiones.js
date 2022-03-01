import React, { useState } from 'react';
import { render } from 'react-dom';
import { FlatList, Image, StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { Global } from '../styles/Global';
import sonrisa from '../assets/sonrisa.png';
import mediaLu from '../assets/mediaLu.png';
import sindientes from '../assets/sindientes.png';
import orificionasal from '../assets/orificionasal.png';
import labiosuperior from '../assets/labiosuperior.png';

const  Sesiones = ({ navigation }) => {
    
    const pushHandler = () => {
        navigation.push('Home')
    };

    const [ images, setImages] = useState([
        require('../assets/sonrisa.png'),
        require('../assets/mediaLu.png'),
        require('../assets/sindientes.png'),
        require('../assets/orificionasal.png'),
        require('../assets/labiosuperior.png'),
        require('../assets/labiosup(1).png')
    ])
    
    return (
        <View style = {Global.input}>
            <Text>Sesiones</Text>

            <Text>  </Text>
            <FlatList 
                horizontal= {true}
                showsHorizontalScrollIndicator= {true}
                data= {images}
                renderItem= { ({item, index}) => (
                    <Image source = {item}
                        key= {index}
                        style= {{
                            width:260,
                            height:300,
                            borderWidth:2,
                            borderColor:'#d35647',
                            resizeMode:'contain',
                            margin:8
                        }}
                        />
                )}
            
            />

            <Button 
                title= 'Retroceder' 
                onPress = {pushHandler} 
                color= '#9932cc'
            />

        </View>
    )
    
        

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
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})


export default Sesiones;