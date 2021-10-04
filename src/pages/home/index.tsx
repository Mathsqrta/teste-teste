
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { stylesLink } from './styles';
import { stylesLinksImportantes } from './styles';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { StackNavigatorParamList } from '../../../types';
import { Post } from '../post'; 

const obj1 = {backgroundColor: "red", marginTop: 0};

const LinkItem = (props:any) => {
  return(
      <Text style = {stylesLink.text}> {props.name}</Text>
    );
}

const LinksImportantes = () => {

  return(<View style={stylesLinksImportantes.container}>
    
    <LinkItem name = "Home"/>
    <LinkItem name = "Posts"/>
    <LinkItem name = "Vídeos"/>
    <LinkItem name = "Photos"/>
    <LinkItem name = "Community"/>

      </View>
      );
};
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">
const Home = () => {

const navigation = useNavigation<HomeProps>();

  function irParaTelaLogin(){
    navigation.navigate('Login');
  }

    return(

        <View style={styles.container}>
        <View style={styles.header}>
  
          <Image style={{height: 30, width: 15, marginLeft: 10}} source={require("../../assets/seta.png")}></Image>
  
          <View style={styles.inputTextView}>
            <Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/ei_search.png")}></Image>
            <TextInput 
            placeholder="Search"
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}
            ></TextInput> 
          </View>
          
          <Image style={{height: 30, width:30, marginRight: 10}} source={require("../../assets/share.png")}></Image>
          
        </View>
        
        <LinksImportantes />
        <TouchableOpacity style={styles.btt} onPress={irParaTelaLogin}>
           <Text style={{color: '#FFFF'}}>Segunda Tela</Text>
        </TouchableOpacity>
        <ScrollView> 
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView> 
        <StatusBar style="auto" />

        <View style={styles.conteudoFacebook}>
        </View>
      </View>
    );
}

export default Home;