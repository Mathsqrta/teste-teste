import { StyleSheet } from "react-native";

export const stylesLink = StyleSheet.create({

    text:{
      marginTop: 0,  
      color: '#4A4A4C',
      fontSize: 13.71,
    }
  
  });

export const stylesLinksImportantes = StyleSheet.create({

    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
      marginTop: 0,
    }
  
});
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFF'
    },
    header: {
        minHeight: 60,
        marginTop: 20,
        backgroundColor: '#4369B0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputTextView:{
        flex: 1,
        backgroundColor: '#2C4877',
        height: 40,
        width: 30,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 28,
        flexDirection: 'row',
    },
    textInput:{
      color:"#F5FFFF",
      flex: 1,
      paddingRight: 10,
    },
    btt:{
        backgroundColor: '#4369B0',
        color: '#FFFF',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:60,
        borderRadius: 10,
        marginTop: 5,

    },
    conteudoFacebook:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 20,
        backgroundColor: '#FFFF',
        
    },
  }


);