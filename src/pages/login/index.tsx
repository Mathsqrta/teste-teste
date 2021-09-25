import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

const Login = () => {
    return(
        <View style={styles.container}> 
            <View style={styles.body}>  
                <View style={styles.imagem}>
                    <Image source={require("../../assets/facebook.png")}></Image>
                    <Text style={{color:'#FFFFFF', fontSize: 45, fontWeight: "bold"}}> Facebook</Text>
                </View>
                <View style={styles.inputTextView}>
                    <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    style={styles.textInput}
                    ></TextInput> 
                </View>
                <View style={styles.inputTextView}>
                    <TextInput 
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    style={styles.textInput}
                    ></TextInput> 
                </View>
                <View style={styles.Login}>
                    <Text style={{
                    backgroundColor: '#455CB1',
                    color:'#FFFFFF',
                    fontSize: 15, 
                    textAlign: 'center'
                    }}> Log in
                    </Text>
                </View>
                
                <Text style={{
                color:'#FFFFFF',
                fontSize: 15,
                textDecorationLine: 'underline', 
                textAlign: 'center'
                }}> Sing up to Facebook
                </Text>

            </View>
        </View>   
         
    )}
        
    const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor: '#455CB1',
        alignContent: 'center',
        flexDirection: 'row',
        color: '#FFFFFF',

        },
        body:{
        },
        inputTextView:{
            flex: 1,
            width: 330,
            maxHeight: 70,
           // marginHorizontal: 10,
            marginLeft: 20,
            marginBottom: 110,
        },

        textInput:{
            backgroundColor: '#FFFFFF',
            margin: 10,
            flex: 1,
            paddingRight: 10,
            height: 0,
            flexDirection: 'column',
            paddingLeft: 15,

        },
        imagem:{
            flex: 1,
            marginTop: 250,
            marginLeft: 30,
            flexDirection: 'row',
            color: '#FFFFFF',
        },
        Login:{
            backgroundColor: '#455CB1',

        }
});
export default Login;