import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Post = () => {
return(
    <View style={styles.container}>
        <View style={styles.headerPost}>
            <View style={styles.foto}>
            </View>
            <View style={styles.texto}>
            <View style={styles.horario}>
                <Text>2 hrs</Text>
                {/*<Image />*/}
            </View>

                <Text> meu post</Text>
            </View>
        </View>
        <Text> oi mkkk</Text>
    </View>

)
}

export default Post;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        
    },
    headerPost:{

    },
    foto:{
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: '#4369B0',
    },
    texto:{

    },
    horario:{

    },
});