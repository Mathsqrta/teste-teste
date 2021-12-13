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
      backgroundColor: 'black',
      marginBottom: 0,
    }
  
});
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    header: {
        minHeight: 60,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    btt:{
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
    footer:{

    }
  }


);