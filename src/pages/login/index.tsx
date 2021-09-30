import React from 'react';
import {  View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';

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
                <TouchableOpacity />
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
                    }}>Sing up to Facebook
                    </Text>
            </View>
        </View>   
         
    )}
        
    
export default Login;