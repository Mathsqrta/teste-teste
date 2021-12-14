import { StyleSheet } from "react-native";

export const stylesMenuBar = StyleSheet.create({

    container:{
      flexDirection: "row",
      margin: 2,
      backgroundColor: 'black',
      },
  
});
  
export const stylesSupMenuBar = StyleSheet.create({
    container:{
      marginTop: 20,
      flexDirection: 'row',
      backgroundColor: 'black',
    }
});
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      height: '100%',
      alignContent: 'center',
    },
    header: {
        minHeight:60,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    actionIg:{
      marginLeft: 170,
      flexDirection: "row",
      padding: 5
    },
    bttAction:{
      
    },
    logoInsta:{
      width: 110,
      height: 37.5,
      marginLeft: 30,
    },
    bttMenuBar:{
        alignItems: "flex-start",
        color: '#FFFF',
        height: 40,
        justifyContent: 'center',
        marginHorizontal: 24,
        marginTop: 5,

    },
    footer:{
      backgroundColor: 'black',
      flexDirection: "row",
      width: 108,
    },
    imgHeader:{
      height: 20, 
      width: 20, 
      marginRight: 10
    },
    bttstories:{
      width:50,
      height: 50,
      borderRadius: 50,
      
    },
    Stories:{
        flexDirection: "row",
        justifyContent: "center",
        minHeight: 200,

    }
  }


);