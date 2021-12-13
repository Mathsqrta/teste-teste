import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Home from './src/pages/home';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}> 
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent: 'center',
  },
})
//entrar aqui depois pra mudar o justify content!!!!
//tentei colocar a propriedade de responsividade ao tamanho da tela do celular pra tela do pc
//mas acho q n vai rolar