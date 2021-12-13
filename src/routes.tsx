import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { createTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Story from "./pages/Story";
//import Direct from './pages/direct';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

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
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 



export default Routes;