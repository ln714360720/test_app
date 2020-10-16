import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import  {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {NavigationContainer} from  '@react-navigation/native'
import {createStackNavigator} from  '@react-navigation/stack'
import Home from './js/component/Home'
import Welcome from './js/component/Welcome'
const Stack=createStackNavigator();
const App=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App
