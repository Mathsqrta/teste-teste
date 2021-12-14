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
    function irParaStory(){
        navigation.navigate('Story')
    }
    return(
        <View style={styles.container}> 
            <View style={styles.body}>  
                <View style={styles.imagem}>
                    <Image source={require("../../assets/raissao.jpeg")}></Image>
                </View>
    
                <TouchableOpacity style={styles.bttHome} onPress={irParaHome}>
                    <Image source={require("../../assets/seta.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>

            </View>
        </View>   
         
    )}
        
    
export default Story;