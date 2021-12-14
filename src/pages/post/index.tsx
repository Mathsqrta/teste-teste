import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { styles } from './styles';
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

    /*const renderDadosPost = ({item})=>{
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
          
        );*/
    

return(
    <View style={styles.container}>
        <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/rai.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>math.sqrt(a)</Text>
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
                <Text style={styles.nome}>Raissao</Text>
                <Text style={{color: "white"}}> 10 pufavô </Text> 
            </View>

            <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/cat.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>mecicareca</Text>
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
            <Image  style={styles.imagemPost} source={require('../../assets/mecicareca.jpg')}/>
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
                <Text style={styles.nome}>mecicareca</Text>
                <Text style={{color: "white"}}> Mais um titulo nosso fml vamo q vamo</Text> 
            </View>
        
            <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/meo.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>Moleza.png</Text>
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
            <Image  style={styles.imagemPost} source={require('../../assets/moleza.jpg')}/>
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
                <Text style={styles.nome}>Moleza.png</Text>
                <Text style={{color: "white"}}> arriba</Text> 
            </View>

            <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/www.jpeg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>www.allace</Text>
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
            <Image  style={styles.imagemPost} source={require('../../assets/alek.jpg')}/>
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
                <Text style={styles.nome}>www.allace</Text>
                <Text style={{color: "white"}}> os cara são bunito</Text> 
            </View>
            <View style={styles.headerPost}>
                 <Image  style={styles.foto} source={require('../../assets/pe.jpg')}/>
            <View style={styles.alignHeader}> 
            <View style={styles.texto}> 
            <TouchableOpacity> 
                <Text style={styles.nome}>Pomodoro</Text>
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
            <Image  style={styles.imagemPost} source={require('../../assets/pomodoro.jpg')}/>
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
                <Text style={styles.nome}>Pomodoro</Text>
                <Text style={{color: "white"}}> tomates de alta qualidade</Text> 
            </View>
    </View>

)}

export default Post;
