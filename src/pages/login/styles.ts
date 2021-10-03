import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#455CB1',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFFFFF',

    },
    body:{
        marginBottom: 30,
        color:'#FFFFFF',
        justifyContent: 'center',
    },

    textInput:{
        backgroundColor: '#FFFFFF',
        margin: 10,
        width: 300,
        maxHeight: 50,
        fontWeight: '600',
        flex: 1,
        padding:10,
        color:'#C2C0C1',
        
    },
    textInputBtt:{
        backgroundColor: '#3B4885',
        color: '#FFFFFF',
        margin: 10,
        width: 300,
        maxHeight: 50,
        fontWeight: '600',
        flex: 1,
        padding:10,
        textAlign: 'center',
        marginBottom:100,
    },
    btt:{
        backgroundColor: '#3B4885',
        color: '#FFFF',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10,
        marginBottom: 90,
        marginTop: 10

    },
    imagem:{
        flex: 1,
        marginTop: 250,
        marginLeft: 10,
        flexDirection: 'row',
        color: '#FFFFFF',
    },
    Login:{
        backgroundColor: '#455CB1',

    }
});