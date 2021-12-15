import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'black',

    },
    body:{
        //backgroundColor: "red",
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
    voltar:{
      width: 25,
      height: 25,
      margin: 20,
    },
    voltar2:{
      width: 15,
      height: 15,
      margin: 8,
    },
    Pomodoro:{
      flex: 1,
      flexDirection: "row",
    },
    botoes: {
      width: 25,
      height: 25,
      margin: 5,
      marginTop: -35,
    },
    inputTextView:{
        flex:1,
        backgroundColor:"gray",
        height:40,
        marginHorizontal:10,
        alignItems: "center",
        borderRadius:10,
        flexDirection:"row",
        marginTop: 12,
    },
        textInput:{
        color:"#F5FFFF",
        // maxWidth:200
        flex:1,
        paddingRight:10,
    },
      item: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#e5e5e5',
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    //borderColor: 'gray',
    //borderRadius: 5,
    justifyContent: 'space-between',
  },
    item2: {
    flex: 1,
    flexDirection: 'row',
  },
  text_item: {
    color: 'gray',
  },
  text_nome: {
    fontSize: 18,
    color: 'white',
  },
    containerFlatListImage: {
    height: 50,
    width: 50,
    //backgroundColor:'blue',
    borderRadius: 50,
    marginRight: 5,
  },
    imagens4: {
    width: 30,
    height: 30,
    marginTop: 9,
    marginRight: 7,
  },

});