import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinksImportantes = () => {

  return(<View> 
    <Text> 
      Meu primeiro componente
      </Text> 
      </View>
      );
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={require("./src/assets/seta.png")}></Image>

        <View style={styles.inputTextView}>
          <Image source={require("./src/assets/ei_search.png")}></Image>
          <TextInput 
          placeholder="Search"
          placeholderTextColor="F5FFFF"
          style={styles.textInput}
          ></TextInput> 
        </View>
        
        <Image source={require("./src/assets/share.png")}></Image>

        <Text></Text>
        
      </View>
      <Text>teste teste teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
  header: {
      minHeight: 70,
      marginTop: 23,
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
    //maxWidth: 200,
    flex: 1,
    paddingRight: 10,
  }
}
);
