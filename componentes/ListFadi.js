import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, TouchableOpacity } from 'react-native';

import RowFadi from '../componentes/RowFadi';
    
const ListFadi = ({ itemList }) => (
    <View style= {styles.container}>
        <FlatList 
            data= {itemList}
            renderItem= {({ item }) => <RowFadi
                title= {item.title}
                description= {item.description}
                image_url= {item.image_url}
            />}
        />

    </View>
);

const styles = StyleSheet.create ({
    container: {
       flex: 1,
    }
});

export default ListFadi; 