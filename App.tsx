import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={require("./src/assets/seta.png")}></Image>
        <Image source={require("./src/assets/ei-search.png")}></Image>
        <Image source={require("./src/assets/share.png")}></Image>

        <Text>header</Text>
        
      </View>
      <Text>teste teste teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
  header: {
      minHeight: 93,
      height: 93,
      marginTop: 23,
      backgroundColor: '#2C4877',
      
  }
});
