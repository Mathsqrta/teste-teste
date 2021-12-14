import React from "react"; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Home from './pages/home'; 
import Story from './pages/Story'; 
import App from '.pages/direct';

 
const Stack = createNativeStackNavigator(); 
const Routes = () =>{ 
    return( 
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="Home" 
                screenOptions={{ 
                    headerShown:false, 
                }} 
            > 
                
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="Story" component={Story}/> 
                <Stack.Screen name="Diretc" component={App}/> 
                
            </Stack.Navigator> 
        </NavigationContainer> 
    ); 
};  
 
export default Routes;