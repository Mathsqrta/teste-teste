import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        alignContent: "center",
        

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