import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

const Login = () => {
    return(
        <View style={styles.container}> 
            <View style={styles.Login}>  
            <View style={styles.inputTextView}>
            <View style={styles.imagem}>
            <Image source={require("../../assets/facebook.png")}></Image>
            <Text> Facebook</Text>
            </View>
                <TextInput 
                placeholder="Email"
                placeholderTextColor="#000000"
                style={styles.textInput}
                ></TextInput> 

                <TextInput 
                placeholder="Password"
                placeholderTextColor="#000000"
                style={styles.textInput}
                ></TextInput> 
            
            </View>
            </View>
        </View>
         
    )}
        
    const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor: '#455CB1',
        alignContent: 'center',
        flexDirection: 'row',

        },
        Login:{
            marginTop: 70,
        },
        inputTextView:{
            flex: 1,
            backgroundColor: '#FFFFFF',
            //minHeight: 4,
            width: 330,
            marginHorizontal: 10,
            alignItems: 'center',
            borderRadius: 28,
            flexDirection: 'row',
            marginLeft: 15,
            

        },
        textInput:{
            color:"#F5FFFF",
            flex: 1,
            paddingRight: 10,
            minWidth: 70,

        },
        imagem:{
            flex: 1,
            alignContent: 'flex-start',
            marginTop: 350,
            marginLeft: 15,
            flexDirection: 'row',
        }
});
export default Login;