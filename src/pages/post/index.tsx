import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Constants from 'expo-constants';

const dadosPost = ([
    {
      id:1, 
      nome:'Zezinho',
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "Hoje foi doido",
    },
    {
      id:2, 
      nome:'Raissao',
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "blabla", 
    },
    {
      id:3, 
      nome:'P.',
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "é o perdomas",
    },
    {
      id:4, 
      nome:'Meci_Careca',
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "mais um premio fml vamo q vamo",
    },
    {
      id:5, 
      nome:'www.allace',
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "jojo",
    },
    
  ]);

export const Post = () => {

    /*const renderDadosPost = ({item})=>{
        return(
          <View style = {styles.containerPost}>
              <Image 
                style={styles.containerFlatListImage}
                source={{uri:item.foto}}
              />
            <View>
            <Text>{item.nome}</Text>
            <Text>({item.ddd}) {item.telefone}</Text>
            <Text>{item.email}</Text>
            </View>
          </View>
          
        );
    }*/

return(
    <View style={styles.container}>
        <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/raissao.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.tituloPost}>Raissao</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.options}> 
                <TouchableOpacity> 
                    <Image  style={styles.options} source={require('../../assets/options.png')}/>
                </TouchableOpacity> 
            </View>
            </View>
        </View>
        <View style={styles.postPublicado}> 
            <Image  style={styles.imagemPost} source={require('../../assets/raissao.jpeg')}/>
        </View>
        <View  style={styles.actionContainer}> 
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/love.png')}/>
            </View>
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/coment.png')}/>
            </View>
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/direct-instagram.png')}/>
            </View>   
        </View>
        <View style={styles.footerPost}> 
            
        </View>
    </View>

)
}

export default Post;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        
    },
    headerPost:{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20,
    },
    foto:{
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: '#4369B0',
    },
    texto:{
        padding: 10,
        justifyContent: 'space-around',
        marginLeft: 5,
    },
    tituloPost:{
        fontWeight: 'bold', 
        fontSize: 18,
        marginBottom: 4,
        color: "white",
    },
    img:{

    },
    postPublicado:{

    },
    textoPost:{
        fontSize: 15,

    },
    link:{
        color: '#4D6196',
        fontSize: 15,
    },
    imagemPost:{

        width: "100%",
        height: 350,
    },
    likes:{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    actionContainer:{
        flexDirection: 'row',
        marginVertical: 5,
    },
    shareIcones:{
        height: 20,
        width: 20,
    },
    share:{
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
    },
    footerPost:{
    },

    options:{
        height: 30,
        width: 30,
        alignContent: "flex-end",
        marginHorizontal: 5,
    },
    alignHeader:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});