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
                    <Image source={require("../../assets/facebook.png")}></Image>
                    <Text style={{color: "white", marginRight: 3}}>yeye</Text>
                    <Image source={require("../../assets/seta.png")}></Image>
                </View>
                
                <TouchableOpacity style={styles.btt} onPress={irParaStory}>
                    <Image source={require("../../assets/seta.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bttesquerda} onPress={irParaStory}>
                    <Image source={require("../../assets/seta.png")}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bttHome} onPress={irParaHome}>
                    <Image source={require("../../assets/seta.png")}/>
                </TouchableOpacity>
            </View>
        </View>   
         
    )}
        
    
export default Story;