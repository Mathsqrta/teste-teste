
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';


const obj1 = {backgroundColor: "red", marginTop: 0};

const LinkItem = (props:any) => {
  return(
      <Text style = {{ marginTop: 0}}> {props.name}</Text>
    );
}

const stylesLink = StyleSheet.create({

  text:{
    marginTop: 0,  
    color: '#4A4A4C',
    fontSize: 13.71,
  }

});

const stylesLinksImportantes = StyleSheet.create({

  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomColor: "red",
    borderBottomWidth: 1, 
    marginTop: 0,
  }

});
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
const Home = () => {
    return(

        <View style={styles.container}>
        <View style={styles.header}>
  
          <Image source={require("../../assets/seta.png")}></Image>
  
          <View style={styles.inputTextView}>
            <Image source={require("../../assets/ei_search.png")}></Image>
            <TextInput 
            placeholder="Search"
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}
            ></TextInput> 
          </View>
          
          <Image source={require("../../assets/share.png")}></Image>
  
          <Text></Text>
          
        </View>
        <Text></Text>
        <LinksImportantes />
        <StatusBar style="auto" />
      </View>
    );
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          
        },
        header: {
            minHeight: 60,
            marginTop: 20,
            backgroundColor: '#4369B0',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        inputTextView:{
            flex: 1,
            backgroundColor: '#2C4877',
            height: 40,
            width: 30,
            marginHorizontal: 10,
            alignItems: 'center',
            borderRadius: 28,
            flexDirection: 'row',
        },
        textInput:{
          color:"#F5FFFF",
          flex: 1,
          paddingRight: 10,
        }
      }


);
export default Home;