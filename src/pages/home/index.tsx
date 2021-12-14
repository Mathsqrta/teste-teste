
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { stylesMenuBar } from './styles';
import { stylesSupMenuBar } from './styles';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { StackNavigatorParamList } from '../../../types';
import { Post } from '../post'; 
import { Story } from '../Story';
//import { Direct } from '../direct';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">

const Home = () => {

const navigation = useNavigation<HomeProps>();
  function irParaTelaHome(){
    navigation.navigate('Home');
  }
  function irParaTelaDirect(){
    navigation.navigate('Direct');
  }
  function irParaTelaStories(){
    navigation.navigate('Story');
  }

  return(

    <View style={styles.container}> 
        
      <View style={styles.header}>
        <View style={stylesSupMenuBar.container}>
          <TouchableOpacity style={styles.logoInsta} onPress={irParaTelaHome}> 
              <Image style={styles.logoInsta} source={require("../../assets/instagram.png")}></Image>
          </TouchableOpacity>
          <View style={styles.actionIg}>
          <TouchableOpacity style={styles.bttAction} onPress={irParaTelaHome}> 
            <Image style={styles.imgHeader} source={require("../../assets/more.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bttAction} onPress={irParaTelaHome}> 
            <Image style={styles.imgHeader} source={require("../../assets/love.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bttAction} onPress={irParaTelaDirect}> 
            <Image style={styles.imgHeader} source={require("../../assets/btnmensagem.png")}></Image>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Stories}> 
          <TouchableOpacity style={styles.bttstories} onPress={irParaTelaStories}> <Image source={require("../../assets/raissao.jpeg")}></Image> </TouchableOpacity>
          <TouchableOpacity style={styles.bttstories} onPress={irParaTelaStories}> <Image source={require("../../assets/mecicareca.jpg")}></Image> </TouchableOpacity>
          <TouchableOpacity style={styles.bttstories} onPress={irParaTelaStories}> <Image source={require("../../assets/pe.jpg")}></Image> </TouchableOpacity>
          <TouchableOpacity style={styles.bttstories} onPress={irParaTelaStories}> <Image source={require("../../assets/moleza.jpg")}></Image>  </TouchableOpacity>
          <TouchableOpacity style={styles.bttstories} onPress={irParaTelaStories}> <Image source={require("../../assets/alek.jpg")}></Image>  </TouchableOpacity>
        </View>
      </View>
        
      <ScrollView> 
        <Post /> 
        <Post /> 
      </ScrollView> 
      <StatusBar style="auto" />

      <View style={styles.footer}>
        <MenuBar />
      </View>
    </View>
    );
}
const MenuBar = () => {

  return(

  <View style={stylesMenuBar.container}>

    <TouchableOpacity style={styles.bttMenuBar} onPress={require("../home")}>
      <Image style={{width: 25, height: 25, marginBottom: 5}} source={require("../../assets/homepage.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bttMenuBar}>
      <Image style={{width: 25, height: 25, marginBottom: 5}} source={require("../../assets/search.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bttMenuBar}>
      <Image style={{width: 20, height: 20, marginBottom: 5}} source={require("../../assets/video.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bttMenuBar}>
      <Image style={{width: 25, height: 25, marginBottom: 5}} source={require("../../assets/bag.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bttMenuBar}>
      <Image style={{width: 28, height: 28, borderRadius:50, marginBottom: 5}} source={require("../../assets/profile.png")}></Image>
    </TouchableOpacity>
    
      </View>
      );
};


export default Home;