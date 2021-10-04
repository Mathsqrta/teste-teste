import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const Post = () => {
return(
    <View style={styles.container}>
        <View style={styles.headerPost}>
            <View style={styles.foto}>
            </View>
            <View style={styles.texto}> 
                <Text style={styles.tituloPost}>Meu post</Text>
                    <View style={styles.horario}>
                        <Text>2 hrs</Text>
                        <Image style={styles.img} source={require('../../assets/globo.png')}/>
                    </View>
            </View>
        </View>
        <View style={styles.postPublicado}> 
            <Text style={styles.textoPost}>Este é o design que vamos replicar hoje na aula: 
                <Text style={styles.link}> https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
            </Text>
            <Image  style={styles.imagemPost} source={require('../../assets/post.png')}/>
        </View>
        <View  style={styles.likes}> 
            <Image source={require('../../assets/likes.png')}/>
            <Text> 12</Text>
        </View>
        <View  style={styles.shareContainer}> 
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/like.png')}/>
                <Text> Like</Text>
            </View>
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/share1.png')}/>
                <Text> Share</Text>
            </View>
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/comentario.png')}/>
                <Text> Comment</Text>
            </View>   
        </View>
        <View style={styles.footerPost}> 
            <TouchableOpacity style={styles.learnMore}>
            <Text style={{color: '#FFFF'}}>Learn more</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messenger}>
            <Image style={ {width: 20, height: 20}} source={require('../../assets/btnmensagem.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tresPontos}>
            <Image style={ {width: 22, height: 5}} source={require('../../assets/3pontos.png')}/>
            </TouchableOpacity>
        </View>
    </View>

)
}

export default Post;

const styles = StyleSheet.create({
    container:{
        padding: 5,
        backgroundColor: '#FFFFFF',
        
    },
    headerPost:{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 20,
    },
    foto:{
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: '#4369B0',
    },
    texto:{
        padding: 10,
        justifyContent: 'space-around',
        marginLeft: 5,
        
    },
    horario:{
        flexDirection: 'row',
        
    },
    tituloPost:{
        fontWeight: 'bold', 
        fontSize: 18,
        marginBottom: 4,
    },
    img:{
        marginLeft: 6,
    },
    postPublicado:{
        marginLeft: 20,

    },
    textoPost:{
        fontSize: 15,

    },
    link:{
        color: '#4D6196',
        fontSize: 15,
    },
    imagemPost:{
        marginTop:10,
        width: 310,
        height: 282,
    },
    likes:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
    },
    shareContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    shareIcones:{
        height: 18,
        width: 18,
    },
    share:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        marginLeft: 15,
    },
    footerPost:{
        height: 43,
        flexDirection: 'row',
    },
    learnMore:{
        flex: 6,
        backgroundColor: '#4369B0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
        marginLeft:10,
    },
    messenger:{
        flex: 2,
        backgroundColor: '#4369B0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    tresPontos:{
        flex: 2,
        borderRadius: 5,
        borderColor:'#4369B0',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginRight:10
    }
});