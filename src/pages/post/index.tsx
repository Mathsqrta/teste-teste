import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const Post = () => {
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
                <Image style={styles.shareIcones} source={require('../../assets/share1.png')}/>
            </View>
            <View style={styles.share}>
                <Image style={styles.shareIcones} source={require('../../assets/comentario.png')}/>
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
        padding: 5,
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
        marginLeft: 6,
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
    actionContainer:{
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

    options:{
        height: 30,
        width: 30,
        alignContent: "flex-end",
        marginHorizontal: 5,
        marginLeft: 100,
    },
    alignHeader:{
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'space-between',
    }
});