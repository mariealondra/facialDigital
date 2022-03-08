import React from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';

    
const RowFadi = ({ title, description, image_url }) => (

  
    <View style = {Global.container}>
        <Image source= {{uri: image_url}} style= {estilo.photo} />
        <View style= {styles.textContainer}>
            <Text style = {estilo.title}>
                {title}

            </Text>
            <Text style= {estilo.description}>
                {description}
            </Text>
        </View>

    </View>
    

);


const estilo = StyleSheet.create({
    input: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2
    },
    title: {
        fontSize: 16,
        color: '#000'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center'

    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50
    }
});


export default RowFadi;