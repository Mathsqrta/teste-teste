import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'black',

    },
    body:{
        backgroundColor: "red",
        flexDirection: "column",
    },
    imagem:{
        width: 1,
        height: 1,
    },
    btt:{
        borderRadius: 50,
        borderColor: "white",
    },
    bttHome:{
        borderRadius: 50
    },
    Story:{
        backgroundColor: 'white',
    },
    footer:{
        backgroundColor: "black",
        minHeight: 60,
        width:"100%",
        position: "relative",
        marginTop: 600,
        justifyContent: "center",
        alignItems: "center",
    },
    header:{
        minHeight: 60,
        color: "white",
        fontWeight: "800",
        flexDirection: "row",
        alignItems: "center",
    },

    avatar:{
        borderRadius: 50,
        height: 40,
        width: 40,
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10,
        
    },
});