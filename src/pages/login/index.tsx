import React from 'react';
import {  View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorParamList } from '../../../types';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Login">
const Login = () => {

    const navigation = useNavigation<HomeProps>();
    function irParaHome(){
        navigation.navigate('Home');
      }
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
                <TouchableOpacity style={styles.btt} onPress={irParaHome}>
                <Text style={{color: '#FFFF'}}>Log in</Text>
                </TouchableOpacity>
                    <Text style={{
                    color:'#FFFFFF',
                    fontSize: 15,
                    textDecorationLine: 'underline', 
                    textAlign: 'center',
                    marginBottom: 70,
                    marginTop: 10
                    }}>Sing up to Facebook
                    </Text>
            </View>
        </View>   
         
    )}
        
    
export default Login;