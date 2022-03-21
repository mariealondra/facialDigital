import React, { useState } from 'react';
import { render } from 'react-dom';
import { StatusBar } from 'expo-status-bar';
import { FlatList, 
    SectionList, 
    SafeAreaView, 
    Image, 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    TouchableOpacity } 
    from 'react-native';
import {Video} from 'expo-av';
import Ejercicio1 from '../assets/Ejercicio1.mp4';
import { Global } from '../styles/Global';



const Listado = ({ item }) => {
    return (
      <View>
          
          <TouchableOpacity>
            <Image
                source={{uri : item.uri}}
                style={estilo.Photo}
                resizeMode="cover"
            />
            
          </TouchableOpacity>
            
        <Text style={estilo.textStyle}>{item.text}</Text>
      </View>
    );
};

const  Sesiones = ({ navigation }) => {
    
  const pushHandler = () => {
      navigation.push('Home')
  };

  const gifsVideos = () => {
    
  }
  
  return (
      <View style={estilo.container}>
          <StatusBar style= 'dark' />
          <SafeAreaView style={{ flex: 1 }}>
              <SectionList
                  contentContainerStyle={{ paddingHorizontal: 10 }}
                  stickySectionHeadersEnabled={false}
                  sections={Ejercicios}
                  renderSectionHeader={({ section }) => (
                      
                     <Text style= {estilo.sectionHeader}>{section.title}</Text>
                  )}
                  renderItem={({ item, section }) => {
                  return <Listado item={item} />;
                  }}
              />
          </SafeAreaView>
    

          <Button 
              title= 'Retroceder' 
              onPress = {pushHandler} 
              color= '#9932cc'
          />

      </View>
  )
};
 
const Ejercicios = [
    {
      title: 'Ejercios para parálisis facial',
      data: [
        {
          key: '1',
          text: 'Sonrisa',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647113440/sonrisa_srpzoy.gif',
        },
        {
          key: '2',
          text: 'Sorpresa',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646949436/sorpresa_mr6hpl.gif',
        },
        {
          key: '3',
          text: 'Ceño fruncido',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646948280/Fruncir_gtjehg.gif',
        },
        {
          key: '4',
          text: 'Lance beso',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646950026/beso_hab2qi.gif',
        },
        {
          key: '5',
          text: 'Ejercicio nasal',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646948610/orificionasal_lxdbn2.gif',
        },

      {
          key: '6',
          text: 'Arrugue la nariz',
          uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646949769/Arruguenariz_lgjvx9.gif',
      },
      {
        key: '7',
        text: 'Arqueé la ceja',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1646947827/subidaceja_e7okxc.gif',
      },
      {
        key: '8',
        text: 'Infle cachete',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647113140/Inflar_cachete_yupn9u.gif',
      },
      {
        key: '9',
        text: 'Movimientos circulares con la lengua',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647113618/masajelengua_a2wqse.gif',
      },
      {
        key: '10',
        text: 'El grito',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647114217/elgrito_qmpthp.gif',
      },
      {
        key: '11',
        text: 'Labios apretados',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647115424/labiosapretados_nuqlzy.gif',
      },
      {
        key: '12',
        text: 'Cara de pez',
        uri: 'https://res.cloudinary.com/mariealondra/image/upload/v1647115439/caradepez_ya4zpt.gif',
      },
         
      ],
    },
]
    

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
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
    },
    itemSt: {
        margin: 10,
      },
    Photo: {
        width: 200,
        height: 200,
      },
    textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5,
    }
    
});


export default Sesiones;