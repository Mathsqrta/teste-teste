import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import Constants from 'expo-constants';

const dadosPost = ([
    {
      id:1, 
      nome:'Zezinho',
      avatar: <Image source={require('../../assets/raissao.jpeg')}/>,
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "Hoje foi doido",
    },
    {
      id:2, 
      nome:'Raissao',
      avatar: <Image source={require('../../assets/raissao.jpeg')}/>,
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "blabla", 
    },
    {
      id:3, 
      nome:'P.',
      avatar: <Image source={require('../../assets/raissao.jpeg')}/>,
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "é o perdomas",
    },
    {
      id:4, 
      nome:'Meci_Careca',
      avatar: <Image source={require('../../assets/raissao.jpeg')}/>,
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "mais um premio fml vamo q vamo",
    },
    {
      id:5, 
      nome:'www.allace',
      avatar: <Image source={require('../../assets/raissao.jpeg')}/>,
      foto:'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
      legenda: "jojo",
    },
    
  ]);

export const Post = () => {

    const renderDadosPost = ({item})=>{
        return(
          <View style = {styles.img}>
              <View style={styles.nome}>
                  <Text>{item.nome}</Text>
              </View>
              <Image style={styles.img} source={{uri:item.foto}}/>
              <View>
                  <Text> {item.nome}</Text>
                  <Text>{item.legenda}</Text>
              </View>
          </View>
          
        );
    }

return(
    <View style={styles.container}>
        <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/raissao.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>Raissao</Text>
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
            <View style={styles.shareDm}>
                <Image style={styles.shareIcones} source={require('../../assets/bookmark.png')}/>
            </View>  
            </View>
            <View style={styles.legenda}> 
                <Text style={{color: "white", fontWeight: "800", }}>Raissao</Text>
                <Text style={{color: "white",}}> Legenda hiper criativa</Text> 
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
        paddingLeft: 10,
        paddingTop: 20,
        alignContent: 'center',
    },
    foto:{
        height: 35,
        width: 35,
        borderRadius: 50,
        backgroundColor: '#4369B0',
    },
    texto:{
        padding: 10,
        justifyContent: 'space-around',
        marginLeft: 5,
    },
    nome:{
        fontWeight: 'bold', 
        fontSize: 15,
        marginBottom: 5,
        color: "white",
    },
    img:{

    },
    postPublicado:{
        width: "100%",

    },
    legenda:{
        color: 'white',
        flexDirection: "row",
        marginLeft: 5,
        marginTop: 2,
        fontSize: 12,


    },

    imagemPost:{
        width: "100%",
        height: 350,
    },
    
    actionContainer:{
        flexDirection: 'row',
        marginTop: 9,
    },
    shareIcones:{
        height: 22,
        width: 22,
    },
    share:{
        flexDirection: 'row',
        marginLeft:10,
    },
    shareDm:{
        flexDirection: 'row',
        marginLeft:230,
    },
    footerPost:{
        fontSize: 15,
        color: "white",

    },
    options:{
        height: 30,
        width: 30,
        alignContent: "flex-end",
        marginHorizontal: 95,
    },
    alignHeader:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});