import React from 'react';
import { StyleSheet, View, Text, Image, TextInput} from 'react-native';

const Login = () => {
    return(
        <View style={styles.container}> 
            <View style={styles.body}>  
                <View style={styles.imagem}>
                    <Image source={require("../../assets/facebook.png")}/>
                    <Text style={{color:'#FFFFFF', fontSize: 45, fontWeight: "bold"}}> Facebook</Text>
                </View>
                
                    <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    style={styles.textInput}
                    ></TextInput> 
                
               
                    <TextInput 
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#808080"/> 
                
                    <TextInput 
                    style={styles.textInputBtt}
                    placeholder="Log In"
                    placeholderTextColor="#FFFFFF"
                    />
                
                
                <Text style={{
                color:'#FFFFFF',
                fontSize: 15,
                textDecorationLine: 'underline', 
                textAlign: 'center',
                marginBottom: 70
                }}> Sing up to Facebook
                </Text>

            </View>
        </View>   
         
    )}
        
    const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor: '#455CB1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#FFFFFF',

        },
        body:{
            marginBottom: 30,
            color:'#FFFFFF',
            justifyContent: 'center',
        },

        textInput:{
            backgroundColor: '#FFFFFF',
            margin: 10,
            width: 300,
            maxHeight: 50,
            fontWeight: '600',
            flex: 1,
            padding:10,
            color:'#C2C0C1',
            
        },
        textInputBtt:{
            backgroundColor: '#3B4885',
            color: '#FFFFFF',
            margin: 10,
            width: 300,
            maxHeight: 50,
            fontWeight: '600',
            flex: 1,
            padding:10,
            textAlign: 'center',
            marginBottom:100,
        },
        imagem:{
            flex: 1,
            marginTop: 250,
            marginLeft: 10,
            flexDirection: 'row',
            color: '#FFFFFF',
        },
        Login:{
            backgroundColor: '#455CB1',

        }
});
export default Login;