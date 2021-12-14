import React from 'react';
import {  View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorParamList } from '../../../types';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Story">

export const Story = () => {

    const navigation = useNavigation<HomeProps>();
    function irParaHome(){
        navigation.navigate('Home');
      }
    return(
        <View style={styles.container}> 
            <View style={styles.header}> 
            <Image style={ styles.avatar} source={require("../../assets/bob.png")}></Image>
            <Text style={{color:"white", fontWeight: "800", marginLeft: 10, fontSize:15, marginTop: 15}}> Clone do Instagram</Text>
            </View>
            <View style={styles.body}>  
                <View style={styles.imagem}>
                    <Image source={require("../../assets/Lembrete.png")}></Image>
                </View>  
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.bttHome} onPress={irParaHome}>
                    <Text style={{color:"white", fontWeight: "800"}}> Voltar para Home</Text>
                </TouchableOpacity>
            </View>
        </View>   
         
    )}
        
    
export default Story;