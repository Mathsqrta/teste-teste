
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

const obj1 = {backgroundColor: "blue", marginTop: 0};

const LinkItem = (props:any) => {
  return(
      <Text style = {stylesLink.text}> {props.name}</Text>
    );
}

const LinksImportantes = () => {

  return(<View style={stylesLinksImportantes.container}>
    
    <LinkItem name = {<Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/homepage.png")}></Image>}/>
    <LinkItem name = {<Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/search.png")}></Image>}/>
    <LinkItem name = {<Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/video.png")}></Image>}/>
    <LinkItem name = {<Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/bag.png")}></Image>}/>
    <LinkItem name = {<Image style={{marginLeft: 6, marginRight: 3}} source={require("../../assets/profile.png")}></Image>}/>

      </View>
      );
};
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">
const Home = () => {

const navigation = useNavigation<HomeProps>();

  function irParaTelaHome(){
    navigation.navigate('Home');
  }

    return(

        <View style={styles.container}> 
        <View style={styles.header}>
  
        <TouchableOpacity style={styles.btt} onPress={irParaTelaHome}> 
          <Image style={{height: 50, width: 150, marginLeft: 10}} source={require("../../assets/instagram.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btt} onPress={irParaTelaHome}> 
          <Image style={{height: 30, width: 30, marginLeft: 10}} source={require("../../assets/love.png")}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btt} onPress={irParaTelaHome}> 
          <Image style={{height: 30, width: 30, marginLeft: 10}} source={require("../../assets/btnmensagem.png")}></Image>
        </TouchableOpacity>
        </View>
        
        <LinksImportantes />
        <TouchableOpacity style={styles.btt} onPress={irParaTelaHome}>
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